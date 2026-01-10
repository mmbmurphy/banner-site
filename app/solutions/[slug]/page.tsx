import { notFound } from "next/navigation";
import Link from "next/link";
import { getSolution, getAllSolutions } from "@/lib/content";
import LogoMarquee from "@/components/LogoMarquee";
import ScrollReveal from "@/components/ScrollReveal";

// Client logos for marquee
const clientLogos = [
  { src: "/images/client-logos/summit.svg", alt: "Summit Real Estate Group" },
  { src: "/images/client-logos/morgan-properties.png", alt: "Morgan Properties" },
  { src: "/images/client-logos/greystar.svg", alt: "Greystar" },
  { src: "/images/client-logos/starwood.svg", alt: "Starwood Capital Group" },
  { src: "/images/client-logos/fcp.svg", alt: "FCP" },
  { src: "/images/client-logos/kennedy-wilson.svg", alt: "Kennedy Wilson" },
  { src: "/images/client-logos/cardinal.svg", alt: "Cardinal Group" },
  { src: "/images/client-logos/harbor-group.svg", alt: "Harbor Group" },
  { src: "/images/client-logos/industrious.svg", alt: "Industrious" },
  { src: "/images/client-logos/lantower.svg", alt: "Lantower" },
  { src: "/images/client-logos/livcor.svg", alt: "Livcor" },
  { src: "/images/client-logos/griffin.svg", alt: "Griffin Partners" },
];

// Generate static paths for all solutions
export async function generateStaticParams() {
  const solutions = getAllSolutions();
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

// Generate metadata for each solution page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return { title: "Solution Not Found" };
  }

  return {
    title: `${solution.title} | Banner`,
    description: solution.description,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <header className="section_header1">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="header1_component">
                <ScrollReveal>
                  <div className="w-layout-grid header1_content">
                    <div className="header1_content-left">
                      <div className="margin-bottom margin-xsmall">
                        <div className="tag-wrapper">
                          <span className="text-style-tagline">{solution.tagline}</span>
                        </div>
                      </div>
                      <h1 className="heading-style-h1">{solution.heroTitle}</h1>
                      <div className="spacer-small"></div>
                      <p className="text-size-medium">{solution.heroDescription}</p>
                      <div className="spacer-medium"></div>
                      <div className="button-group">
                        <Link href="/contact" className="button w-button">
                          Get started today
                        </Link>
                        <a href="#how-it-works" className="button is-alternate normal w-button">
                          How it works
                        </a>
                      </div>
                    </div>
                    <div className="header1_image-wrapper">
                      <img
                        loading="eager"
                        src={solution.heroImage}
                        alt={solution.title}
                        className="header1_image"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Logos Section */}
      <section className="section-logos light-blue">
        <div className="padding-top padding-xlarge">
          <div className="padding-global">
            <div className="container-large">
              <div className="margin-bottom margin-large">
                <ScrollReveal>
                  <div className="text-align-center">
                    <div className="max-width-large align-center">
                      <h2 className="heading-style-h6 is-black">{solution.logosSectionTitle}</h2>
                    </div>
                    <div className="spacer-medium"></div>
                    <LogoMarquee logos={clientLogos} speed={40} />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="section_layout238-2">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout238_component">
                <ScrollReveal>
                  <div className="w-layout-grid layout238_list-2">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="feat-card">
                        <h3 className="heading-style-h3">{feature.title}</h3>
                        <div className="spacer-small"></div>
                        <p>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div id="how-it-works">
        <section className="section_testimonial4 light-blue">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-medium">
                <ScrollReveal>
                  <div className="fcp-wrapp is-second">
                    <div className="fcp-left">
                      <h3 className="heading-style-h3">
                        See the impact Banner delivers for {solution.title.toLowerCase()} teams
                      </h3>
                      <p className="max-width-medium">
                        Our customers consistently report significant improvements in efficiency,
                        cost control, and project visibility after implementing Banner.
                      </p>
                    </div>
                    <div className="fcp-right">
                      <div className="w-layout-grid fcp-grid">
                        {solution.stats.map((stat, index) => (
                          <div key={index} className="fcp-item">
                            <h3 className="stat-heading black">{stat.value}</h3>
                            <div className="stat-lower-text black">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonial Section */}
      <section className="section_testimonial4">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <ScrollReveal>
                <div className="max-width-large align-center">
                  <div className="testimonial4_component">
                    <div className="testimonial4_content">
                      <h3 className="heading-style-h5 text-align-center">
                        &ldquo;{solution.testimonial.quote}&rdquo;
                      </h3>
                      <div className="spacer-medium"></div>
                      <div className="testimonial4_client">
                        <div className="testimonial4_client-image-wrapper">
                          <img
                            loading="lazy"
                            src={solution.testimonial.image}
                            alt={solution.testimonial.author}
                            className="testimonial4_client-image"
                          />
                        </div>
                        <div className="testimonial4_client-info">
                          <div className="semi-bold">{solution.testimonial.author}</div>
                          <div>{solution.testimonial.role}, {solution.testimonial.company}</div>
                        </div>
                        <div className="divider-vertical"></div>
                        <div className="testimonial4_logo-wrapper">
                          <img
                            alt={solution.testimonial.company}
                            src={solution.testimonial.logo}
                            loading="lazy"
                            className="testimonial4_logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section_faq4">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="faq4_component">
                <div className="margin-bottom margin-xxlarge">
                  <ScrollReveal>
                    <div className="text-align-center">
                      <div className="max-width-large align-center">
                        <div className="margin-bottom margin-small">
                          <h2 className="heading-style-h2-2">FAQs</h2>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
                <div className="max-width-large align-center">
                  <ScrollReveal>
                    <div className="faq4_list">
                      {solution.faqs.map((faq, index) => (
                        <div key={index} className="faq4_accordion">
                          <details className="faq4_question-wrapper">
                            <summary className="faq4_question">
                              <div className="text-size-medium text-weight-bold">{faq.question}</div>
                              <div className="faq4_icon-wrappper">
                                <div className="icon-embed-small">
                                  <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                              </div>
                            </summary>
                            <div className="faq4_answer">
                              <div className="margin-bottom margin-small">
                                <p>{faq.answer}</p>
                              </div>
                            </div>
                          </details>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>
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
                        <h3 className="heading-style-h2">{solution.ctaTitle}</h3>
                      </div>
                      <p className="text-size-medium">{solution.ctaDescription}</p>
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
