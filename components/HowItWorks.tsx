"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Connect Your Systems",
    description: "Integrate with Yardi, RealPage, QuickBooks, and other accounting systems in minutes.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Import Your Portfolio",
    description: "Bring in your properties, projects, and historical data with guided onboarding.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "See Real-Time Visibility",
    description: "Get instant portfolio-wide CapEx visibility with live forecasts and reporting.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <ScrollReveal>
              <div className="how-it-works-header">
                <h2 className="heading-style-h2">Get Started in Days, Not Months</h2>
                <p className="text-size-medium how-it-works-subtitle">
                  Banner is designed for rapid deployment with minimal IT overhead
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="how-it-works-grid">
                {steps.map((step, index) => (
                  <div key={index} className="how-it-works-step">
                    <div className="step-number">{step.number}</div>
                    <div className="step-icon">{step.icon}</div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="step-connector">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      <style jsx>{`
        .how-it-works-section {
          background: #f8f9fa;
        }
        .how-it-works-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .how-it-works-subtitle {
          color: #666;
          margin-top: 0.75rem;
        }
        .how-it-works-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          position: relative;
        }
        .how-it-works-step {
          background: #ffffff;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          position: relative;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          border: 1px solid #f0f0f0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .how-it-works-step:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        .step-number {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #f25e53;
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
        }
        .step-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 64px;
          height: 64px;
          margin: 1rem auto;
          background: #f8f9fa;
          border-radius: 16px;
          color: #f25e53;
        }
        .step-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 1rem 0 0.5rem;
        }
        .step-description {
          font-size: 0.9375rem;
          color: #666;
          line-height: 1.6;
          margin: 0;
          flex: 1;
          min-height: 3em;
        }
        .step-connector {
          display: none;
          position: absolute;
          right: calc(-1rem - 12px);
          top: 2.5rem;
          transform: none;
          color: #ddd;
        }
        @media (min-width: 992px) {
          .step-connector {
            display: block;
          }
        }
        @media (max-width: 991px) {
          .how-it-works-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
