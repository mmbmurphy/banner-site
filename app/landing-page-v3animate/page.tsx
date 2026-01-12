import Link from "next/link";
import ChaosToOrderHero from "@/components/ChaosToOrderHero";
import FeatureTabs from "@/components/FeatureTabs";
import TestimonialSlider from "@/components/TestimonialSlider";
import ScrollReveal from "@/components/ScrollReveal";
import LogoMarquee from "@/components/LogoMarquee";
import AnimatedCounter from "@/components/AnimatedCounter";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import VideoModal from "@/components/VideoModal";
import MetricsBar from "@/components/MetricsBar";
import TrustBadges from "@/components/TrustBadges";
import HowItWorks from "@/components/HowItWorks";
import ResourcesSection from "@/components/ResourcesSection";

const integrationLogos = [
  { src: "/images/l1.png", alt: "Integration 1" },
  { src: "/images/l2.png", alt: "Integration 2" },
  { src: "/images/l3.png", alt: "Integration 3" },
  { src: "/images/l4.png", alt: "Integration 4" },
  { src: "/images/l5.png", alt: "Integration 5" },
  { src: "/images/quickbooks.png", alt: "QuickBooks" },
  { src: "/images/Mask-group.png", alt: "Integration 7" },
];

const clientLogos = [
  { src: "/images/client-logos/summit.svg", alt: "Summit Real Estate Group" },
  { src: "/images/client-logos/morgan-properties.png", alt: "Morgan Properties" },
  { src: "/images/client-logos/starwood.svg", alt: "Starwood Capital Group" },
  { src: "/images/client-logos/fcp.svg", alt: "FCP" },
  { src: "/images/client-logos/kennedy-wilson.svg", alt: "Kennedy Wilson" },
  { src: "/images/client-logos/tourmaline.png", alt: "Tourmaline" },
  { src: "/images/client-logos/cardinal.svg", alt: "Cardinal Group" },
  { src: "/images/client-logos/harbor-group.svg", alt: "Harbor Group" },
  { src: "/images/client-logos/industrious.svg", alt: "Industrious" },
  { src: "/images/client-logos/kettler.png", alt: "Kettler" },
  { src: "/images/client-logos/lantower.svg", alt: "Lantower" },
  { src: "/images/client-logos/livcor.svg", alt: "Livcor" },
  { src: "/images/client-logos/olympus.png", alt: "Olympus" },
  { src: "/images/client-logos/mra-group.svg", alt: "MRA Group" },
  { src: "/images/client-logos/29th-street.svg", alt: "29th Street Capital" },
  { src: "/images/client-logos/acacia.svg", alt: "Acacia" },
  { src: "/images/client-logos/acc.svg", alt: "ACC" },
  { src: "/images/client-logos/airbnb.svg", alt: "Airbnb" },
  { src: "/images/client-logos/air-communities.svg", alt: "AIR Communities" },
  { src: "/images/client-logos/april.png", alt: "April Housing" },
  { src: "/images/client-logos/clear-height.svg", alt: "Clear Height" },
  { src: "/images/client-logos/convene.svg", alt: "Convene" },
  { src: "/images/client-logos/dayrise.svg", alt: "Dayrise" },
  { src: "/images/client-logos/eos.svg", alt: "EOS Investors" },
  { src: "/images/client-logos/flynn.svg", alt: "Flynn Group" },
  { src: "/images/client-logos/griffin.svg", alt: "Griffin Partners" },
  { src: "/images/client-logos/osso.svg", alt: "Osso" },
  { src: "/images/client-logos/radco.svg", alt: "Radco" },
  { src: "/images/client-logos/ridc.svg", alt: "RIDC" },
  { src: "/images/client-logos/stoneweg.svg", alt: "Stoneweg" },
];

export default function LandingPageV3Animate() {
  return (
    <>
      {/* Animated Hero - Chaos to Order */}
      <ChaosToOrderHero />

      {/* Metrics Bar */}
      <MetricsBar />

      {/* Logos Section */}
      <section className="section-logos is-white">
        <div className="padding-top padding-xlarge">
          <div className="padding-global">
            <div className="container-large">
              <div className="margin-bottom margin-large">
                <ScrollReveal>
                  <div className="text-align-center">
                    <div className="max-width-large align-center">
                      <h2 className="heading-style-h6 is-black">
                        Trusted by top real estate owners &amp; operators globally
                      </h2>
                    </div>
                    <div className="spacer-medium"></div>
                    <LogoMarquee logos={clientLogos} speed={60} />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Pain Points Section */}
      <section className="section_layout238">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout238_component">
                <div className="margin-bottom margin-xxlarge">
                  <ScrollReveal>
                    <div className="text-align-center">
                      <div>
                        <h2 className="heading-style-h2">
                          When capital projects live everywhere, management feels impossible.
                        </h2>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
                <ScrollReveal>
                  <div className="w-layout-grid layout238_list">
                    <div className="layout238_item">
                      <div className="margin-bottom margin-small">
                        <div className="layout238_item-icon-wrapper">
                          <img loading="lazy" src="/images/EyeSlash.svg" alt="" className="icon-1x1-medium" />
                        </div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-style-h5">
                          No visibility across drives, inboxes, sheets, and tools
                        </h3>
                      </div>
                    </div>
                    <div className="layout238_item">
                      <div className="margin-bottom margin-small">
                        <div className="layout238_item-icon-wrapper">
                          <img loading="lazy" src="/images/FileDashed.svg" alt="" className="icon-1x1-medium" />
                        </div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-style-h5">
                          By the time they&apos;re shared, reports are out of date
                        </h3>
                      </div>
                    </div>
                    <div className="layout238_item">
                      <div className="margin-bottom margin-small">
                        <div className="layout238_item-icon-wrapper">
                          <img loading="lazy" src="/images/HourglassHigh.svg" alt="" className="icon-1x1-medium" />
                        </div>
                      </div>
                      <div className="margin-bottom margin-small">
                        <h3 className="heading-style-h5">
                          Stitching data together takes hours for asset managers
                        </h3>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <header className="section_header26">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="header26_component">
                <div className="margin-bottom margin-xxlarge">
                  <ScrollReveal>
                    <div className="text-align-center">
                      <div className="max-width-large align-center">
                        <div className="margin-bottom margin-small">
                          <h1 className="heading-style-h2 text-color-white">
                            Stop flying blind on CapEx.
                          </h1>
                        </div>
                        <p className="text-size-medium text-color-white">
                          Plan, approve, track, and report all in Banner —<br />
                          with real-time sync to your accounting system.
                        </p>
                        <div className="margin-top margin-medium">
                          <div className="button-group is-center">
                            <Link href="/contact" className="button is-secondary w-button">
                              Book a demo
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
                <ScrollReveal>
                  <div className="w-layout-grid layout368_row">
                    <div id="w-node-_22bdcdf3-0362-6d95-8cf3-1e988f56972c-f9d7f908" className="layout368_card-large">
                      <div className="layout368_card-large-content">
                        <div className="layout368_card-large-content-top">
                          <h3 className="heading-style-h3 text-color-white">
                            <strong>See portfolio</strong> to property to job level detail
                          </h3>
                        </div>
                      </div>
                      <div id="w-node-_22bdcdf3-0362-6d95-8cf3-1e988f56972d-f9d7f908" className="layout368_card-large-image-wrapper">
                        <img
                          sizes="(max-width: 1117px) 100vw, 1117px"
                          srcSet="/images/Group-35933-p-500.png 500w, /images/Group-35933-p-800.png 800w, /images/Group-35933-p-1080.png 1080w, /images/Group-35933.png 1117w"
                          alt=""
                          src="/images/Group-35933.png"
                          loading="lazy"
                          className="layout368_card-large-image"
                        />
                      </div>
                    </div>
                    <div className="layout368_card-small">
                      <div className="layout368_card-small-content">
                        <div className="layout368_card-small-content-top">
                          <div className="layout368_item-icon-wrapper">
                            <img
                              sizes="(max-width: 1008px) 100vw, 1008px"
                              srcSet="/images/Group-35934-p-500.png 500w, /images/Group-35934-p-800.png 800w, /images/Group-35934.png 1008w"
                              alt=""
                              src="/images/Group-35934.png"
                              loading="lazy"
                              className="layout368_card-large-image"
                            />
                          </div>
                          <div className="card-bottom-wrap">
                            <h3 className="heading-style-h3 text-color-white">
                              <strong>Ensure costs</strong> don&apos;t go over budget
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="layout368_card-small">
                      <div className="layout368_card-small-content">
                        <div className="layout368_card-small-content-top">
                          <div className="layout368_item-icon-wrapper">
                            <img
                              sizes="(max-width: 612px) 100vw, 612px"
                              srcSet="/images/Group-35935-p-500.png 500w, /images/Group-35935.png 612w"
                              alt=""
                              src="/images/Group-35935.png"
                              loading="lazy"
                              className="layout-card-circle"
                            />
                          </div>
                          <div className="card-bottom-wrap">
                            <h3 className="heading-style-h3 text-color-white">
                              <strong>Make proactive decisions</strong> from accurate forecasts
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Features Tabs Section */}
      <FeatureTabs />

      {/* How It Works Section */}
      <div id="how-it-works" style={{ scrollMarginTop: '180px' }}>
        <HowItWorks />
      </div>

      {/* Integrations Section */}
      <section className="section-logos">
        <div className="padding-section-medium">
          <div className="padding-global">
            <div className="container-large">
              <div className="margin-bottom margin-large">
                <ScrollReveal>
                  <div className="text-align-center-2">
                    <div className="max-width-large align-center">
                      <h2 className="heading-style-h3 text-color-white">Integrations</h2>
                      <div className="spacer-xlarge"></div>
                      <h2 className="heading-style-h6 text-color-white">
                        Banner delivers accurate, real-time forecasts by combining project
                        status and timelines with up-to-date invoicing and payment data.
                      </h2>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
          <ScrollReveal delay={200}>
            <LogoMarquee logos={integrationLogos} speed={20} />
          </ScrollReveal>
        </div>
        <div className="left-overlay"></div>
        <div className="right-overlay"></div>
      </section>

      {/* Solutions Cards Section */}
      <section className="section_layout227">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <ScrollReveal>
                <div className="text-align-center">
                  <h3 className="heading-style-h2">
                    Powerful enough for all real<br />estate owners &amp; operators
                  </h3>
                </div>
              </ScrollReveal>
              <div className="spacer-xhuge"></div>
              <ScrollReveal>
                <div className="layout227_component">
                  <div className="w-layout-grid layout227_list">
                    <div className="layout227_item is-black">
                      <div className="card-icon-wrap">
                        <img src="/images/Frame-34375601.png" loading="lazy" alt="" className="card-icon" />
                        <h3 className="heading-style-h5-3">Multifamily</h3>
                      </div>
                      <div className="solution-stat">
                        <span className="solution-stat-number">2M+</span>
                        <span className="solution-stat-label">units managed</span>
                      </div>
                      <div className="margin-bottom margin-small">
                        <p className="paragraph-4">
                          Real-time portfolio visibility and cost control to protect NOI
                          across every property.
                        </p>
                      </div>
                      <div className="button-group is-center">
                        <Link href="/solutions/multifamily" className="button is-link is-icon w-inline-block">
                          <div>Learn More &gt;</div>
                        </Link>
                      </div>
                    </div>
                    <div className="layout227_item is-black is-blue">
                      <div className="card-icon-wrap">
                        <img src="/images/Frame-34375601_1.png" loading="lazy" alt="" className="card-icon" />
                        <h3 className="heading-style-h5-3">Commercial</h3>
                      </div>
                      <div className="solution-stat">
                        <span className="solution-stat-number">$10B+</span>
                        <span className="solution-stat-label">in commercial CapEx</span>
                      </div>
                      <div className="margin-bottom margin-small">
                        <p className="paragraph-4">
                          CapEx clarity and governance across complex commercial portfolios.
                        </p>
                      </div>
                      <div className="button-group is-center">
                        <Link href="/solutions/commercial" className="button-3 is-link is-icon w-inline-block">
                          <div>Learn More &gt;</div>
                        </Link>
                      </div>
                    </div>
                    <div className="layout227_item is-black is-blue is-orange">
                      <div className="card-icon-wrap">
                        <img src="/images/Frame-34375601_2.png" loading="lazy" alt="" className="card-icon" />
                        <h3 className="heading-style-h5-3">Developers</h3>
                      </div>
                      <div className="solution-stat">
                        <span className="solution-stat-number">$10B+</span>
                        <span className="solution-stat-label">in development spend</span>
                      </div>
                      <div className="margin-bottom margin-small">
                        <p className="paragraph-4">
                          CapEx control built for development workflows and draw-ready
                          reporting.
                        </p>
                      </div>
                      <div className="button-group is-center">
                        <Link href="/solutions/developers" className="button-3 is-link is-icon w-inline-block">
                          <div>Learn More &gt;</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Management Features Grid */}
      <ScrollReveal>
        <FeatureGrid />
      </ScrollReveal>

      {/* Case Study Section */}
      <section className="section-fcp">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <ScrollReveal>
                <div className="fcp-wrapp">
                  <div className="w-layout-grid grid">
                    <div className="layout2_lightbox">
                      <VideoModal
                        videoUrl="https://banner-web-assets.nyc3.cdn.digitaloceanspaces.com/videos/FCP%20Testimonial_FINAL.mp4"
                        thumbnailSrc="/images/portrait-casestudy-banner.webp"
                        thumbnailSrcSet="/images/portrait-casestudy-banner-p-500.webp 500w, /images/portrait-casestudy-banner-p-800.webp 800w, /images/portrait-casestudy-banner-p-1080.webp 1080w, /images/portrait-casestudy-banner-p-1600.webp 1600w, /images/portrait-casestudy-banner-p-2000.webp 2000w, /images/portrait-casestudy-banner.webp 2048w"
                        alt="Watch FCP testimonial video"
                      />
                    </div>
                    <div className="fcp-content">
                      <div className="fcp-wrapp">
                        <div className="fcp-wrapp-top">
                          <img src="/images/__1.png" loading="lazy" alt="" className="image-6" />
                          <p className="paragraph-5">
                            We implemented Banner because we can manage our entire portfolio on
                            it and have access to every stakeholder involved, along with live
                            information. It provides a really meaningful check and balance in
                            our CapEx projects.
                          </p>
                        </div>
                        <div className="fcp-wrapp-bottom">
                          <div className="text-block-5">Jeff Robertson</div>
                          <div className="text-block">SVP Asset Management</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <div className="spacer-xhuge"></div>
              <ScrollReveal>
                <div className="fcp-wrapp is-second">
                  <div className="fcp-left">
                    <h3 className="heading-style-h3-2 is-white">
                      FCP gains one source of truth for CapEx
                    </h3>
                    <p className="paragraph-6 max-width-medium">
                      By moving 1,000+ projects onto Banner, FCP aligned asset managers,
                      vendors, and property managers in one system with real-time visibility.
                    </p>
                  </div>
                  <div className="fcp-right">
                    <div className="w-layout-grid fcp-grid">
                      <div className="fcp-item">
                        <h3 className="stat-heading">
                          <AnimatedCounter end={5} suffix="%" duration={2000} />
                        </h3>
                        <div className="stat-lower-text">reduction in CapEx cost</div>
                      </div>
                      <div className="fcp-item">
                        <h3 className="stat-heading">
                          <AnimatedCounter end={70} suffix="%" duration={2000} />
                        </h3>
                        <div className="stat-lower-text">reduction in admin work</div>
                      </div>
                      <div className="fcp-item">
                        <h3 className="stat-heading">
                          <AnimatedCounter end={3} suffix="X" duration={2000} />
                        </h3>
                        <div className="stat-lower-text">portfolio growth with Banner</div>
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
      <FAQ />

      {/* Resources Section */}
      <ResourcesSection />

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
                          Everything you need to manage CapEx in one platform
                        </h3>
                      </div>
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
