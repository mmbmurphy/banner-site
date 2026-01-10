import Link from "next/link";
import { getAllCaseStudies } from "@/lib/content";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Case Studies | Banner",
  description: "See how real estate companies are transforming their CapEx management with Banner.",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <>
      {/* Hero Section */}
      <header className="section_header1 light-blue page-with-sticky-nav">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <ScrollReveal>
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <h1 className="heading-style-h1">Customer Success Stories</h1>
                    <div className="spacer-small"></div>
                    <p className="text-size-medium">
                      See how leading real estate companies are transforming their CapEx management with Banner.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* Case Studies Grid */}
      <section className="section_layout227">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="case-studies-grid">
                {caseStudies.map((caseStudy) => (
                  <ScrollReveal key={caseStudy.slug}>
                    <Link href={`/case-studies/${caseStudy.slug}`} className="case-study-card">
                      <div className="case-study-card-image-wrapper">
                        <img
                          src={caseStudy.heroImage}
                          alt={caseStudy.companyName}
                          className="case-study-card-image"
                        />
                      </div>
                      <div className="case-study-card-content">
                        <div className="case-study-card-meta">
                          <img
                            src={caseStudy.companyLogo}
                            alt={caseStudy.companyName}
                            className="case-study-card-logo"
                          />
                          <span className="case-study-industry">{caseStudy.industry}</span>
                        </div>
                        <h3 className="heading-style-h4">{caseStudy.title}</h3>
                        <p className="text-size-regular">{caseStudy.subtitle}</p>
                        <div className="case-study-card-stats">
                          {caseStudy.stats.slice(0, 2).map((stat, index) => (
                            <div key={index} className="case-study-card-stat">
                              <span className="case-study-card-stat-value">{stat.value}</span>
                              <span className="case-study-card-stat-label">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                        <div className="case-study-card-link">
                          Read case study <span>→</span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <header className="section-cta-main">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <ScrollReveal>
                <div className="header62_component-2">
                  <div className="text-align-center">
                    <div className="max-width-large align-center custom">
                      <div className="margin-bottom">
                        <h3 className="heading-style-h2">
                          Ready to write your own success story?
                        </h3>
                      </div>
                      <p className="text-size-medium">
                        Join the growing list of real estate companies transforming their CapEx management with Banner.
                      </p>
                      <div className="margin-top margin-medium">
                        <div className="button-group is-center custom">
                          <Link href="/contact" className="button is-secondary w-button">
                            Book a demo
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
