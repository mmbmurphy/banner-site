import Link from "next/link";
import FeatureTabs from "@/components/FeatureTabs";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="section_header62">
        <div className="padding-global">
          <div className="spacer-large"></div>
          <div className="container-large">
            <div>
              <div className="header62_component">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h1 className="heading-style-h1 text-wrap-balance">
                        Where Real Estate Owners and Operators Manage CapEx
                      </h1>
                    </div>
                    <p className="text-size-medium">
                      Banner replaces spreadsheets and email with one platform that links
                      long-term plans, annual budgets, and day-to-day execution across the
                      entire CapEx lifecycle.
                    </p>
                    <div className="margin-top margin-medium">
                      <div className="button-group is-center">
                        <Link href="/contact" className="button w-button">
                          Get started today
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="spacer-huge"></div>
                <div className="div-block">
                  <img
                    src="/images/hero-bg-pill-large.png"
                    loading="lazy"
                    sizes="(max-width: 2584px) 100vw, 2584px"
                    srcSet="/images/hero-bg-pill-large-p-500.png 500w, /images/hero-bg-pill-large-p-800.png 800w, /images/hero-bg-pill-large-p-1080.png 1080w, /images/hero-bg-pill-large-p-1600.png 1600w, /images/hero-bg-pill-large.png 2584w"
                    alt=""
                    className="hero-bg-pill"
                  />
                  <img
                    src="/images/dashboard.png"
                    loading="lazy"
                    sizes="(max-width: 4400px) 100vw, 4400px"
                    alt="Banner Dashboard"
                    srcSet="/images/dashboard-p-500.png 500w, /images/dashboard-p-800.png 800w, /images/dashboard-p-1080.png 1080w, /images/dashboard-p-1600.png 1600w, /images/dashboard-p-2000.png 2000w, /images/dashboard-p-2600.png 2600w, /images/dashboard-p-3200.png 3200w, /images/dashboard.png 4400w"
                    className="hero-dashboard-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Logos Section */}
      <section className="section-logos is-white">
        <div className="padding-top padding-xlarge">
          <div className="padding-global">
            <div className="container-large">
              <div className="margin-bottom margin-large">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <h2 className="heading-style-h6 is-black">
                      Trusted by real estate owners &amp; operators
                    </h2>
                  </div>
                  <div className="spacer-medium"></div>
                  <div className="logo_component">
                    <div className="marquee logo-bar">
                      <div className="w-dyn-list">
                        <div role="list" className="marquee-group w-dyn-items">
                          <div role="listitem" className="w-dyn-item">
                            <div className="logo-item">
                              <img
                                loading="eager"
                                src="/images/Summit-Real-Estate-Group_Color_RGB.svg"
                                alt=""
                                className="logos"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          .logo-bar .marquee-group {
            display: flex;
            flex-shrink: 0;
            justify-content: space-evenly;
            gap: 20px;
            min-width: 100%;
          }
          .logo-bar .logo-item {
            display: grid;
            place-items: center;
            min-width: 160px;
            padding: 16px;
          }
        `}} />
      </section>

      {/* Pain Points Section */}
      <section className="section_layout238">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout238_component">
                <div className="margin-bottom margin-xxlarge">
                  <div className="text-align-center">
                    <div>
                      <h2 className="heading-style-h2">
                        When capital projects live everywhere, management feels impossible.
                      </h2>
                    </div>
                  </div>
                </div>
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
                </div>
                <div className="w-layout-grid layout368_row">
                  <div className="layout368_card-large">
                    <div className="layout368_card-large-content">
                      <div className="layout368_card-large-content-top">
                        <h3 className="heading-style-h3 text-color-white">
                          <strong>See portfolio</strong> to property to job level detail
                        </h3>
                      </div>
                    </div>
                    <div className="layout368_card-large-image-wrapper">
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
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Features Tabs Section */}
      <FeatureTabs />

      {/* Integrations Section */}
      <section className="section-logos">
        <div className="padding-section-medium">
          <div className="padding-global">
            <div className="container-large">
              <div className="margin-bottom margin-large">
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
              </div>
            </div>
          </div>
          <div className="logo3_component-2">
            <div className="logo3_list">
              <div className="logo3_wrapper">
                <img loading="lazy" src="/images/l1.png" alt="" className="logo3_logo" />
              </div>
              <div className="logo3_wrapper">
                <img loading="lazy" src="/images/l2.png" alt="" className="logo3_logo" />
              </div>
              <div className="logo3_wrapper">
                <img loading="lazy" src="/images/l3.png" alt="" className="logo3_logo" />
              </div>
              <div className="logo3_wrapper">
                <img loading="lazy" src="/images/l4.png" alt="" className="logo3_logo" />
              </div>
              <div className="logo3_wrapper">
                <img loading="lazy" src="/images/l5.png" alt="" className="logo3_logo" />
              </div>
              <div className="logo3_wrapper">
                <img loading="lazy" src="/images/quickbooks.png" alt="" className="logo3_logo" />
              </div>
              <div className="logo3_wrapper">
                <img loading="lazy" src="/images/Mask-group.png" alt="" className="logo3_logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="left-overlay"></div>
        <div className="right-overlay"></div>
      </section>

      {/* Solutions Cards Section */}
      <section className="section_layout227">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="text-align-center">
                <h3 className="heading-style-h2">
                  Powerful enough for all real<br />estate owners &amp; operators
                </h3>
              </div>
              <div className="spacer-xhuge"></div>
              <div className="layout227_component">
                <div className="w-layout-grid layout227_list">
                  <div className="layout227_item is-black">
                    <div className="card-icon-wrap">
                      <img src="/images/Frame-34375601.png" loading="lazy" alt="" className="card-icon" />
                      <h3 className="heading-style-h5-3">Multifamily</h3>
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
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-fcp">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="fcp-wrapp">
                <div className="w-layout-grid grid">
                  <div className="layout2_lightbox">
                    <img
                      className="layout2_lightbox-image"
                      src="/images/portrait-casestudy-banner.webp"
                      alt=""
                      loading="lazy"
                      srcSet="/images/portrait-casestudy-banner-p-500.webp 500w, /images/portrait-casestudy-banner-p-800.webp 800w, /images/portrait-casestudy-banner-p-1080.webp 1080w, /images/portrait-casestudy-banner-p-1600.webp 1600w, /images/portrait-casestudy-banner-p-2000.webp 2000w, /images/portrait-casestudy-banner.webp 2048w"
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
                        <div className="text-block-5">Dara Vaziri</div>
                        <div className="text-block">Senior analyst</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacer-xhuge"></div>
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
                      <h3 className="stat-heading">5%</h3>
                      <div className="stat-lower-text">reduction in CapEx cost</div>
                    </div>
                    <div className="fcp-item">
                      <h3 className="stat-heading">70%</h3>
                      <div className="stat-lower-text">reduction in admin work</div>
                    </div>
                    <div className="fcp-item">
                      <h3 className="stat-heading">3X</h3>
                      <div className="stat-lower-text">portfolio growth with Banner</div>
                    </div>
                  </div>
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
