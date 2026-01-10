import Link from "next/link";

export const metadata = {
  title: "Acceptable Use Policy | Banner",
  description: "Acceptable Use Policy for Banner Technologies, Inc. - Guidelines for using our CapEx management platform.",
};

export default function AcceptablePage() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="padding-global">
          <div className="container-large">
            <div className="legal-header-content">
              <Link href="/" className="legal-back-link">
                &larr; Back
              </Link>
              <h1 className="legal-title">Acceptable Use Policy</h1>
              <p className="legal-updated">Last updated: January 10, 2026</p>
            </div>
          </div>
        </div>
      </header>

      <main className="legal-content">
        <div className="padding-global">
          <div className="container-large">
            <div className="legal-body">
              <section>
                <h2>1. Introduction</h2>
                <p>
                  This Acceptable Use Policy ("Policy") governs the use of the Banner platform and services (the "Service") provided by Banner Technologies, Inc. ("Banner", "we", "our", "us"). This Policy is incorporated into and forms part of our{" "}
                  <Link href="/terms">Terms of Service</Link>.
                </p>
                <p>
                  By accessing or using the Service, you agree to comply with this Policy. If you are using the Service on behalf of an organization, you represent that you are authorized to bind that organization to this Policy.
                </p>
                <p>
                  We may update this Policy from time to time. Your continued use of the Service after any changes constitutes acceptance of the updated Policy.
                </p>
              </section>

              <section>
                <h2>2. Permitted Use</h2>
                <p>
                  The Service is designed for enterprise capital expenditure management in the commercial real estate industry. Permitted uses include:
                </p>
                <ul>
                  <li>Managing capital projects, budgets, and financial tracking</li>
                  <li>Coordinating with vendors, contractors, and internal teams</li>
                  <li>Storing and managing project documents and records</li>
                  <li>Processing invoices and managing approvals</li>
                  <li>Generating reports and analytics for business purposes</li>
                  <li>Integrating with authorized third-party business applications</li>
                </ul>
              </section>

              <section>
                <h2>3. Prohibited Activities</h2>
                <p>
                  You may not use the Service for any unlawful purpose or in any way that violates this Policy. Prohibited activities include, but are not limited to:
                </p>

                <h3>3.1 Illegal or Harmful Activities</h3>
                <ul>
                  <li>Violating any applicable law, regulation, or third-party rights</li>
                  <li>Engaging in fraudulent, deceptive, or misleading activities</li>
                  <li>Money laundering or financing of illegal activities</li>
                  <li>Storing or transmitting content that promotes violence or illegal acts</li>
                </ul>

                <h3>3.2 Security Violations</h3>
                <ul>
                  <li>Attempting to gain unauthorized access to the Service, other accounts, or systems</li>
                  <li>Probing, scanning, or testing the vulnerability of the Service without authorization</li>
                  <li>Circumventing or disabling security features or access controls</li>
                  <li>Introducing viruses, malware, or other harmful code</li>
                  <li>Conducting denial-of-service attacks or other activities that disrupt the Service</li>
                </ul>

                <h3>3.3 Abuse of Service Resources</h3>
                <ul>
                  <li>Using excessive bandwidth, storage, or computing resources that degrade performance for other users</li>
                  <li>Automated access or data scraping without written authorization</li>
                  <li>Using the Service for cryptocurrency mining or similar resource-intensive activities</li>
                  <li>Reselling, sublicensing, or providing access to unauthorized third parties</li>
                </ul>

                <h3>3.4 Content Violations</h3>
                <ul>
                  <li>Uploading content that infringes intellectual property rights</li>
                  <li>Storing content unrelated to legitimate business purposes</li>
                  <li>Transmitting unsolicited commercial communications or spam</li>
                  <li>Impersonating another person or organization</li>
                </ul>

                <h3>3.5 Interference with Service Operation</h3>
                <ul>
                  <li>Reverse engineering, decompiling, or disassembling the Service</li>
                  <li>Interfering with the proper functioning of the Service</li>
                  <li>Modifying, adapting, or creating derivative works of the Service</li>
                  <li>Removing or altering proprietary notices or labels</li>
                </ul>
              </section>

              <section>
                <h2>4. Data and Content Responsibilities</h2>
                <p>
                  You are responsible for all data and content you upload, store, or transmit through the Service ("Customer Data"). You represent and warrant that:
                </p>
                <ul>
                  <li>You have all necessary rights and permissions to use and share Customer Data</li>
                  <li>Customer Data does not violate any applicable laws or third-party rights</li>
                  <li>You have obtained all required consents for personal data included in Customer Data</li>
                  <li>Customer Data is accurate and does not contain misleading information</li>
                </ul>
              </section>

              <section>
                <h2>5. Account Security</h2>
                <p>
                  You are responsible for maintaining the security of your account credentials and for all activities that occur under your account. You must:
                </p>
                <ul>
                  <li>Use strong, unique passwords and enable multi-factor authentication when available</li>
                  <li>Keep login credentials confidential and not share them with unauthorized persons</li>
                  <li>Promptly notify Banner of any suspected unauthorized access or security breach</li>
                  <li>Regularly review account access and remove users who no longer require access</li>
                  <li>Comply with your organization's security policies when using the Service</li>
                </ul>
              </section>

              <section>
                <h2>6. Third-Party Integrations</h2>
                <p>
                  When you connect the Service to third-party applications, you are responsible for:
                </p>
                <ul>
                  <li>Ensuring you have the right to establish such connections</li>
                  <li>Complying with the terms and policies of the third-party applications</li>
                  <li>Understanding how data flows between Banner and third-party services</li>
                  <li>Maintaining appropriate security configurations for integrations</li>
                </ul>
              </section>

              <section>
                <h2>7. Monitoring and Enforcement</h2>
                <p>
                  Banner reserves the right, but is not obligated, to monitor use of the Service for compliance with this Policy. We may take any action we deem appropriate in response to violations, including:
                </p>
                <ul>
                  <li>Issuing a warning to the account administrator</li>
                  <li>Temporarily suspending access to the Service</li>
                  <li>Removing or disabling access to violating content</li>
                  <li>Terminating the account without refund</li>
                  <li>Reporting violations to law enforcement authorities</li>
                  <li>Pursuing legal remedies for damages</li>
                </ul>
                <p>
                  We will attempt to provide notice before taking action when practicable, but we may act immediately if we reasonably believe the violation poses a risk to the Service, other users, or third parties.
                </p>
              </section>

              <section>
                <h2>8. Reporting Violations</h2>
                <p>
                  If you become aware of any violation of this Policy, please report it immediately to:
                </p>
                <ul>
                  <li>Email: <a href="mailto:abuse@withbanner.com">abuse@withbanner.com</a></li>
                  <li>Security issues: <a href="mailto:security@withbanner.com">security@withbanner.com</a></li>
                </ul>
                <p>
                  Please include as much detail as possible, including the nature of the violation, any relevant account information, and evidence of the violation.
                </p>
              </section>

              <section>
                <h2>9. Cooperation</h2>
                <p>
                  You agree to cooperate with Banner in investigating suspected violations of this Policy. This includes providing information and assistance as reasonably requested to resolve the issue.
                </p>
              </section>

              <section>
                <h2>10. No Warranty for Third-Party Actions</h2>
                <p>
                  While we strive to enforce this Policy, we cannot guarantee that all users will comply. Banner is not responsible for violations committed by other users. If you experience issues with another user, please report them to us using the contact information above.
                </p>
              </section>

              <section>
                <h2>11. Contact Us</h2>
                <p>
                  If you have questions about this Acceptable Use Policy, please contact us:
                </p>
                <ul>
                  <li>Policy questions: <a href="mailto:legal@withbanner.com">legal@withbanner.com</a></li>
                  <li>Report violations: <a href="mailto:abuse@withbanner.com">abuse@withbanner.com</a></li>
                  <li>Security concerns: <a href="mailto:security@withbanner.com">security@withbanner.com</a></li>
                  <li>General support: <a href="mailto:support@withbanner.com">support@withbanner.com</a></li>
                </ul>
                <p>
                  Banner Technologies, Inc.<br />
                  San Francisco, CA<br />
                  United States
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
