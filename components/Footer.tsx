"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    const scrollToElement = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 150; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    // If we're not on the homepage, navigate there first
    if (pathname !== "/") {
      router.push("/");
      // Wait for navigation then scroll
      setTimeout(scrollToElement, 100);
    } else {
      scrollToElement();
    }
  };

  return (
    <footer className="footer2_component">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-vertical padding-xxlarge">
            <div className="padding-bottom padding-xxlarge">
              <div className="footer-wrapp">
                <div className="footer-left">
                  <Link href="/" className="footer2_logo-link w-nav-brand">
                    <img
                      width="Auto"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 99vw, 763px"
                      alt=""
                      src="/images/logo.png"
                      loading="lazy"
                      srcSet="/images/logo-p-500.png 500w, /images/logo.png 763w"
                      className="footer2_logo"
                    />
                    <div className="footer-logo-text">Control CapEx Costs with Banner.</div>
                  </Link>
                  <div className="footer-contact-info">
                    <a href="mailto:info@withbanner.com" className="footer-contact-link">
                      info@withbanner.com
                    </a>
                    <a href="tel:+14152317512" className="footer-contact-link">
                      (415) 231-7512
                    </a>
                  </div>
                  <div className="footer-social">
                    <a
                      href="https://www.linkedin.com/company/withbanner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      aria-label="LinkedIn"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="footer-right">
                  <div className="w-layout-grid footer-grid">
                    <div className="footer2_link-column">
                      <div className="margin-bottom margin-xsmall">
                        <div className="text-weight-semibold">Navigate</div>
                      </div>
                      <div className="footer2_link-list">
                        <a
                          href="/#features"
                          className="footer2_link"
                          onClick={(e) => scrollToSection(e, "features")}
                        >
                          Features
                        </a>
                        <Link href="/case-studies" className="footer2_link">Case Studies</Link>
                        <Link href="/blog" className="footer2_link">Blog</Link>
                        <Link href="/about" className="footer2_link">About</Link>
                      </div>
                    </div>
                    <div className="footer2_link-column">
                      <div className="margin-bottom margin-xsmall">
                        <div className="text-weight-semibold">Support</div>
                      </div>
                      <div className="footer2_link-list">
                        <a
                          href="/#faqs"
                          className="footer2_link"
                          onClick={(e) => scrollToSection(e, "faqs")}
                        >
                          FAQs
                        </a>
                        <Link href="/contact" className="footer2_link">Contact Us</Link>
                      </div>
                    </div>
                    <div className="footer2_link-column">
                      <div className="margin-bottom margin-xsmall">
                        <div className="text-weight-semibold">Resources</div>
                      </div>
                      <div className="footer2_link-list">
                        <Link href="/info" className="footer2_link">Guides & Directories</Link>
                        <Link href="/guides" className="footer2_link">CapEx Guides</Link>
                      </div>
                    </div>
                    <div className="footer2_link-column">
                      <div className="margin-bottom margin-xsmall">
                        <div className="text-weight-semibold">Legal</div>
                      </div>
                      <div className="footer2_link-list">
                        <Link href="/terms" className="footer2_link">Terms</Link>
                        <Link href="/privacy" className="footer2_link">Privacy Policy</Link>
                        <Link href="/acceptable" className="footer2_link">Acceptable Use</Link>
                      </div>
                    </div>
                    <div className="footer2_right-wrapper">
                      <div className="margin-bottom margin-xsmall">
                        <Link href="/contact" className="button is-secondary w-button">
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="padding-top padding-medium">
              <div className="footer2_bottom-wrapper">
                <div className="w-layout-grid footer2_legal-list">
                  <div className="footer2_credit-text">
                    © {new Date().getFullYear()} Banner Technologies, Inc. All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
