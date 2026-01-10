"use client";

import { useRef, useState } from "react";
import Link from "next/link";

interface GuideLayoutProps {
  title: string;
  subtitle?: string;
  category: string;
  readTime?: string;
  children: React.ReactNode;
}

export default function GuideLayout({
  title,
  subtitle,
  category,
  readTime,
  children,
}: GuideLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    if (!contentRef.current || isGenerating) return;

    setIsGenerating(true);

    try {
      // Dynamically import html2pdf to avoid SSR issues
      const html2pdf = (await import("html2pdf.js")).default;

      const element = contentRef.current;
      const opt = {
        margin: [0.75, 0.75, 0.75, 0.75] as [number, number, number, number],
        filename: `${title.toLowerCase().replace(/\s+/g, "-")}.pdf`,
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
        },
        jsPDF: {
          unit: "in" as const,
          format: "letter" as const,
          orientation: "portrait" as const,
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="guide-page">
      {/* Hero Header */}
      <header className="guide-hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="guide-hero-content">
              <Link href="/guides" className="guide-back-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                All Guides
              </Link>
              <div className="guide-hero-meta">
                <span className="guide-category">{category}</span>
                {readTime && <span className="guide-read-time">{readTime}</span>}
              </div>
              <h1 className="guide-hero-title">{title}</h1>
              {subtitle && <p className="guide-hero-subtitle">{subtitle}</p>}
              <div className="guide-hero-actions">
                <button
                  onClick={handleDownloadPDF}
                  disabled={isGenerating}
                  className="guide-download-btn"
                >
                  {isGenerating ? (
                    <>
                      <svg className="guide-download-spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                      </svg>
                      Generating PDF...
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download PDF
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Guide Content */}
      <main className="guide-main">
        <div className="padding-global">
          <div className="container-large">
            <div className="guide-content-wrapper">
              <article ref={contentRef} className="guide-content">
                {/* PDF Header - only visible in PDF */}
                <div className="guide-pdf-header">
                  <div className="guide-pdf-logo">
                    <img src="/images/Frame.png" alt="Banner" />
                  </div>
                  <div className="guide-pdf-title">
                    <span className="guide-pdf-category">{category}</span>
                    <h1>{title}</h1>
                    {subtitle && <p>{subtitle}</p>}
                  </div>
                </div>
                {children}
                {/* PDF Footer - only visible in PDF */}
                <div className="guide-pdf-footer">
                  <p>www.getbanner.com</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="guide-cta-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="guide-cta-wrapper">
              <div className="guide-cta-content">
                <h2>Ready to transform your CapEx management?</h2>
                <p>See how Banner can help you gain visibility, control costs, and streamline operations.</p>
                <div className="guide-cta-buttons">
                  <Link href="/contact" className="button w-button">
                    Book a Demo
                  </Link>
                  <Link href="/guides" className="guide-cta-link">
                    Explore more guides
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
