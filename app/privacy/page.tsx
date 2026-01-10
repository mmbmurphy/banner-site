import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Banner",
  description: "Privacy Policy for Banner Technologies, Inc. - How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="padding-global">
          <div className="container-large">
            <div className="legal-header-content">
              <Link href="/" className="legal-back-link">
                &larr; Back
              </Link>
              <h1 className="legal-title">Privacy Policy</h1>
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
                  Banner Technologies, Inc. ("Banner", "we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our enterprise CapEx management platform and related services (the "Service").
                </p>
                <p>
                  This policy applies to our customers ("Customers"), their authorized users ("Users"), and visitors to our website. By accessing or using the Service, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </section>

              <section>
                <h2>2. Information We Collect</h2>
                <h3>2.1 Information You Provide</h3>
                <p>We collect information you voluntarily provide, including:</p>
                <ul>
                  <li><strong>Account Information:</strong> Name, email address, phone number, job title, company name, and billing information when you create an account or subscribe to our Service</li>
                  <li><strong>Customer Data:</strong> Project information, financial data, documents, vendor details, invoices, contracts, and other information you upload to the Service</li>
                  <li><strong>Communications:</strong> Information you provide when you contact us for support, submit feedback, or respond to surveys</li>
                </ul>

                <h3>2.2 Information Collected Automatically</h3>
                <p>When you use our Service, we automatically collect:</p>
                <ul>
                  <li><strong>Usage Data:</strong> Features accessed, actions taken, time spent, and navigation patterns within the Service</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, device identifiers, and IP address</li>
                  <li><strong>Log Data:</strong> Server logs including access times, pages viewed, and referring URLs</li>
                </ul>

                <h3>2.3 Cookies and Tracking Technologies</h3>
                <p>
                  We use cookies and similar technologies to maintain session state, remember preferences, and analyze Service usage. You can control cookies through your browser settings, but disabling cookies may limit Service functionality.
                </p>
              </section>

              <section>
                <h2>3. How We Use Information</h2>
                <p>We use collected information to:</p>
                <ul>
                  <li>Provide, maintain, and improve the Service</li>
                  <li>Process transactions and manage subscriptions</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to inquiries and provide customer support</li>
                  <li>Monitor and analyze usage trends and preferences</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Develop new features and services based on aggregated insights</li>
                </ul>
              </section>

              <section>
                <h2>4. Data Sharing and Disclosure</h2>
                <p>We do not sell your personal information. We may share information in the following circumstances:</p>

                <h3>4.1 Service Providers</h3>
                <p>
                  We engage trusted third-party service providers to perform functions on our behalf, including cloud hosting, payment processing, analytics, and customer support. These providers are contractually bound to protect your information and use it only for specified purposes.
                </p>

                <h3>4.2 Business Transfers</h3>
                <p>
                  In connection with a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. We will provide notice before your information becomes subject to a different privacy policy.
                </p>

                <h3>4.3 Legal Requirements</h3>
                <p>
                  We may disclose information if required by law, subpoena, or government request, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
                </p>

                <h3>4.4 With Your Consent</h3>
                <p>
                  We may share information with third parties when you give us explicit consent to do so.
                </p>
              </section>

              <section>
                <h2>5. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your information, including:
                </p>
                <ul>
                  <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256)</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Employee security training and background checks</li>
                  <li>Incident response procedures and monitoring</li>
                </ul>
                <p>
                  While we strive to protect your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2>6. Data Retention</h2>
                <p>
                  We retain personal information for as long as necessary to provide the Service and fulfill the purposes described in this policy, unless a longer retention period is required by law.
                </p>
                <p>
                  Customer Data is retained for the duration of the subscription. Upon termination, Customers may request data export within 30 days. After this period, data is deleted in accordance with our data retention schedule.
                </p>
              </section>

              <section>
                <h2>7. Your Rights and Choices</h2>
                <p>Depending on your location, you may have the following rights:</p>
                <ul>
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
                  <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
                  <li><strong>Objection:</strong> Object to certain processing activities</li>
                  <li><strong>Withdrawal of Consent:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p>
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:privacy@withbanner.com">privacy@withbanner.com</a>. We will respond within the timeframe required by applicable law.
                </p>
              </section>

              <section>
                <h2>8. California Privacy Rights (CCPA)</h2>
                <p>
                  California residents have additional rights under the California Consumer Privacy Act (CCPA), including:
                </p>
                <ul>
                  <li>Right to know what personal information is collected, used, and shared</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
                  <li>Right to non-discrimination for exercising privacy rights</li>
                </ul>
                <p>
                  To submit a CCPA request, email{" "}
                  <a href="mailto:privacy@withbanner.com">privacy@withbanner.com</a> with "CCPA Request" in the subject line.
                </p>
              </section>

              <section>
                <h2>9. European Privacy Rights (GDPR)</h2>
                <p>
                  If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have rights under the General Data Protection Regulation (GDPR), including the rights described in Section 7 above.
                </p>
                <p>
                  Banner processes personal data as a data processor on behalf of our Customers (data controllers). For data subject requests related to Customer Data, please contact your organization's administrator.
                </p>
                <p>
                  <strong>Legal Basis for Processing:</strong> We process personal data based on:
                </p>
                <ul>
                  <li>Performance of a contract (providing the Service)</li>
                  <li>Legitimate interests (improving and securing the Service)</li>
                  <li>Compliance with legal obligations</li>
                  <li>Consent (where applicable)</li>
                </ul>
                <p>
                  <strong>International Transfers:</strong> Data may be transferred to and processed in the United States. We use Standard Contractual Clauses and other appropriate safeguards for international data transfers.
                </p>
              </section>

              <section>
                <h2>10. Third-Party Services</h2>
                <p>
                  Our Service integrates with third-party applications and services. This Privacy Policy does not apply to third-party services. We encourage you to review the privacy policies of any third-party services you connect to Banner.
                </p>
                <p>Key third-party services we use include:</p>
                <ul>
                  <li><strong>Cloud Infrastructure:</strong> Amazon Web Services (AWS) for hosting and data storage</li>
                  <li><strong>Payment Processing:</strong> Stripe for payment transactions</li>
                  <li><strong>Analytics:</strong> Google Analytics for website analytics (with IP anonymization)</li>
                  <li><strong>Customer Support:</strong> Intercom for chat and support communications</li>
                </ul>
              </section>

              <section>
                <h2>11. Children's Privacy</h2>
                <p>
                  The Service is designed for business use and is not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we learn that we have collected information from a child, we will delete it promptly.
                </p>
              </section>

              <section>
                <h2>12. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of material changes by posting a notice on our website or sending an email to the address associated with your account at least 30 days before the changes take effect.
                </p>
                <p>
                  Your continued use of the Service after the effective date of any changes constitutes acceptance of the updated Privacy Policy.
                </p>
              </section>

              <section>
                <h2>13. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul>
                  <li>Email: <a href="mailto:privacy@withbanner.com">privacy@withbanner.com</a></li>
                  <li>Support: <a href="mailto:support@withbanner.com">support@withbanner.com</a></li>
                  <li>Phone: 415-231-7512</li>
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
