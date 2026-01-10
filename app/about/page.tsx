import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | Banner",
  description: "Learn how Banner transforms CapEx management for real estate teams.",
};

export default function AboutPage() {
  return (
    <>
      <header className="section_header26-2">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="header26_component">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h1 className="heading-style-h1">About Banner</h1>
                  </div>
                  <p className="text-size-medium">
                    We&apos;re building the platform that real estate teams need to manage
                    capital expenditures efficiently and transparently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section_layout16">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="layout16_component">
                <div className="max-width-large">
                  <h2 className="heading-style-h2">Our Mission</h2>
                  <div className="spacer-medium"></div>
                  <p className="text-size-medium">
                    Real estate teams spend too much time wrestling with spreadsheets,
                    chasing down approvals via email, and manually reconciling budgets.
                    Banner brings all of this into one platform, giving teams the
                    visibility and control they need to execute capital projects
                    successfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <h2 className="heading-style-h2 text-color-white">
                    Want to learn more?
                  </h2>
                  <p className="text-size-medium text-color-white">
                    Schedule a demo to see Banner in action.
                  </p>
                  <div className="margin-top margin-medium">
                    <Link href="/contact" className="button is-white w-button">
                      Book a Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
