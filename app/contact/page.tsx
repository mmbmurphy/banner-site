import ScrollReveal from "@/components/ScrollReveal";
import HubSpotEmbed from "@/components/HubSpotEmbed";

export const metadata = {
  title: "Book a Demo | Banner",
  description: "Book a demo to see how Banner can transform your CapEx management.",
};

const clientLogos = [
  { src: "/images/client-logos/livcor.svg", alt: "Livcor" },
  { src: "/images/client-logos/morgan-properties.png", alt: "Morgan Properties" },
  { src: "/images/client-logos/fcp.svg", alt: "FCP" },
  { src: "/images/client-logos/starwood.svg", alt: "Starwood Capital Group" },
  { src: "/images/client-logos/kennedy-wilson.svg", alt: "Kennedy Wilson" },
  { src: "/images/client-logos/cardinal.svg", alt: "Cardinal Group" },
];

export default function ContactPage() {
  return (
    <>
      <section className="section_layout16 page-with-sticky-nav">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout16_component">
                <ScrollReveal>
                  <div className="contact-page-grid">
                    <div className="contact-page-left">
                      <div className="contact-hero-top">
                        <div className="sol-hero-badge">
                          <span className="sol-badge-text">Book a Demo</span>
                        </div>
                        <h1 className="heading-style-h1">
                          See Banner in Action
                        </h1>
                        <p className="text-size-medium">
                          Book a personalized demo with our team to see how Banner can help you
                          manage CapEx across your portfolio with real-time visibility and control.
                        </p>
                      </div>
                      <div className="layout16_item-list">
                        <div className="layout16_item">
                          <div className="layout16_item-icon-wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f25e53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </div>
                          <div className="layout16_item-text-wrapper">
                            <p className="text-size-medium semi-bold">Portfolio Visibility</p>
                            <p>See how Banner gives you real-time visibility across all your properties and projects.</p>
                          </div>
                        </div>
                        <div className="layout16_item">
                          <div className="layout16_item-icon-wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f25e53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </div>
                          <div className="layout16_item-text-wrapper">
                            <p className="text-size-medium semi-bold">Cost Control</p>
                            <p>Learn how to track costs against budgets and catch variances before they become problems.</p>
                          </div>
                        </div>
                        <div className="layout16_item">
                          <div className="layout16_item-icon-wrapper">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f25e53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </div>
                          <div className="layout16_item-text-wrapper">
                            <p className="text-size-medium semi-bold">Seamless Integrations</p>
                            <p>Discover how Banner integrates with your existing accounting and property management systems.</p>
                          </div>
                        </div>
                      </div>
                      <div className="contact-logos-section">
                        <p className="text-size-small text-color-muted">Trusted by leading real estate companies</p>
                        <div className="contact-logos-row">
                          {clientLogos.map((logo, index) => (
                            <img
                              key={index}
                              src={logo.src}
                              alt={logo.alt}
                              className="contact-logo"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="contact-page-right">
                      <div className="hubspot-embed-wrapper">
                        <HubSpotEmbed meetingUrl="https://meetings.hubspot.com/murph3/website-booking-form?embed=true" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
