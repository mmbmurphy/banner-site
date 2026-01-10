import Link from "next/link";

export default function Footer() {
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
                </div>
                <div className="footer-right">
                  <div className="w-layout-grid footer-grid">
                    <div className="footer2_link-column">
                      <div className="margin-bottom margin-xsmall">
                        <div className="text-weight-semibold">Navigate</div>
                      </div>
                      <div className="footer2_link-list">
                        <Link href="/" className="footer2_link">Product</Link>
                        <Link href="/blog" className="footer2_link">Resources</Link>
                        <Link href="/about" className="footer2_link">About</Link>
                      </div>
                    </div>
                    <div className="footer2_link-column">
                      <div className="margin-bottom margin-xsmall">
                        <div className="text-weight-semibold">Support Us</div>
                      </div>
                      <div className="footer2_link-list">
                        <Link href="/#faqs" className="footer2_link">FAQs</Link>
                        <Link href="/contact" className="footer2_link">Contact Us</Link>
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
