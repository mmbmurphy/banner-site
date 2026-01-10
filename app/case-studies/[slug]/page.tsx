import { notFound } from "next/navigation";
import Link from "next/link";
import { getCaseStudy, getAllCaseStudies } from "@/lib/content";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

// Generate static paths for all case studies
export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

// Generate metadata for each case study page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${caseStudy.companyName} Case Study | Banner`,
    description: caseStudy.subtitle,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  // Parse stat values for AnimatedCounter
  const parseStatValue = (value: string) => {
    const num = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    return { num, suffix };
  };

  return (
    <>
      {/* Hero Section */}
      <header className="case-study-hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <ScrollReveal>
                <div className="case-study-hero-content">
                  <div className="case-study-hero-left">
                    <div className="case-study-meta">
                      <img
                        src={caseStudy.companyLogo}
                        alt={caseStudy.companyName}
                        className="case-study-company-logo"
                      />
                      <span className="case-study-industry">{caseStudy.industry}</span>
                    </div>
                    <h1 className="heading-style-h1">{caseStudy.title}</h1>
                    <p className="text-size-medium case-study-subtitle">{caseStudy.subtitle}</p>
                    <div className="margin-top margin-medium">
                      <Link href="/contact" className="button w-button">
                        Get similar results
                      </Link>
                    </div>
                  </div>
                  <div className="case-study-hero-right">
                    <img
                      src={caseStudy.heroImage}
                      alt={caseStudy.companyName}
                      className="case-study-hero-image"
                      srcSet={`
                        /images/portrait-casestudy-banner-p-500.webp 500w,
                        /images/portrait-casestudy-banner-p-800.webp 800w,
                        /images/portrait-casestudy-banner-p-1080.webp 1080w,
                        /images/portrait-casestudy-banner-p-1600.webp 1600w,
                        /images/portrait-casestudy-banner.webp 2048w
                      `}
                      sizes="(max-width: 991px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="case-study-stats">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <ScrollReveal>
                <div className="case-study-stats-grid">
                  {caseStudy.stats.map((stat, index) => {
                    const { num, suffix } = parseStatValue(stat.value);
                    return (
                      <div key={index} className="case-study-stat-item">
                        <div className="stat-heading">
                          <AnimatedCounter end={num} suffix={suffix} duration={2000} />
                        </div>
                        <div className="stat-lower-text">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="case-study-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <ScrollReveal>
                <div className="case-study-content-block">
                  <h2 className="heading-style-h2">{caseStudy.challenge.title}</h2>
                  <div className="spacer-medium"></div>
                  <p className="text-size-medium">{caseStudy.challenge.content}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="case-study-testimonial">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <ScrollReveal>
                <div className="case-study-testimonial-content">
                  <img src="/images/__1.png" alt="" className="quote-icon" />
                  <blockquote className="case-study-quote">
                    {caseStudy.testimonial.quote}
                  </blockquote>
                  <div className="case-study-testimonial-author">
                    <img
                      src={caseStudy.testimonial.image}
                      alt={caseStudy.testimonial.author}
                      className="case-study-author-image"
                    />
                    <div>
                      <div className="text-weight-bold">{caseStudy.testimonial.author}</div>
                      <div className="text-size-small">{caseStudy.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="case-study-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <ScrollReveal>
                <div className="case-study-content-block">
                  <h2 className="heading-style-h2">{caseStudy.solution.title}</h2>
                  <div className="spacer-medium"></div>
                  <p className="text-size-medium">{caseStudy.solution.content}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="case-study-section light-blue">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <ScrollReveal>
                <div className="case-study-content-block">
                  <h2 className="heading-style-h2">{caseStudy.results.title}</h2>
                  <div className="spacer-medium"></div>
                  <p className="text-size-medium">{caseStudy.results.content}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="case-study-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <ScrollReveal>
                <div className="case-study-content-block">
                  <h2 className="heading-style-h2">Key Benefits</h2>
                  <div className="spacer-medium"></div>
                  <ul className="case-study-benefits-list">
                    {caseStudy.keyBenefits.map((benefit, index) => (
                      <li key={index} className="case-study-benefit-item">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#f25e53"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
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
                          Ready to achieve results like {caseStudy.companyName}?
                        </h3>
                      </div>
                      <p className="text-size-medium">
                        See how Banner can help your team manage CapEx more effectively.
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
