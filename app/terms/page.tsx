import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Banner",
  description: "Terms of Service for Banner Technologies, Inc. - Enterprise CapEx management software for commercial real estate.",
};

export default function TermsPage() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="padding-global">
          <div className="container-large">
            <div className="legal-header-content">
              <Link href="/" className="legal-back-link">
                &larr; Back
              </Link>
              <h1 className="legal-title">Terms of Service</h1>
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
                  Welcome to Banner Technologies, Inc. ("Banner", "Company", "we", "our", "us"). These Terms of Service ("Terms") govern your access to and use of the Banner platform, including our web application, APIs, and related services (collectively, the "Service").
                </p>
                <p>
                  Banner provides enterprise capital expenditure (CapEx) management software designed for commercial real estate owners, operators, and developers. By accessing or using our Service, you agree to be bound by these Terms and our{" "}
                  <Link href="/privacy">Privacy Policy</Link>.
                </p>
                <p>
                  If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms. If you do not have such authority, or if you do not agree with these Terms, you must not accept these Terms and may not use the Service.
                </p>
              </section>

              <section>
                <h2>2. Definitions</h2>
                <p><strong>"Customer"</strong> means the entity that has entered into a subscription agreement with Banner for access to the Service.</p>
                <p><strong>"Customer Data"</strong> means any data, content, or information uploaded, submitted, or transmitted by Customer or its Authorized Users through the Service, including but not limited to project data, financial information, documents, and communications.</p>
                <p><strong>"Authorized Users"</strong> means individuals who are authorized by Customer to access and use the Service under Customer's subscription.</p>
                <p><strong>"Subscription Term"</strong> means the period during which Customer has agreed to subscribe to the Service, as specified in the applicable Order Form or subscription agreement.</p>
              </section>

              <section>
                <h2>3. Access and Use of the Service</h2>
                <p>
                  Subject to these Terms and payment of applicable fees, Banner grants Customer a non-exclusive, non-transferable right to access and use the Service during the Subscription Term for Customer's internal business purposes.
                </p>
                <p>
                  Customer is responsible for:
                </p>
                <ul>
                  <li>Maintaining the confidentiality of all login credentials and account information</li>
                  <li>All activities that occur under Customer's account</li>
                  <li>Ensuring that Authorized Users comply with these Terms</li>
                  <li>The accuracy, quality, and legality of Customer Data</li>
                  <li>Obtaining all necessary consents and authorizations for data uploaded to the Service</li>
                </ul>
              </section>

              <section>
                <h2>4. Customer Data</h2>
                <p>
                  Customer retains all right, title, and interest in and to Customer Data. Customer grants Banner a limited license to use, process, and display Customer Data solely to provide and improve the Service.
                </p>
                <p>
                  Banner will maintain appropriate administrative, physical, and technical safeguards for protection of the security, confidentiality, and integrity of Customer Data, as further described in our{" "}
                  <Link href="/privacy">Privacy Policy</Link>.
                </p>
                <p>
                  Upon termination of the Subscription Term, Customer may request export of Customer Data within thirty (30) days. After such period, Banner may delete Customer Data in accordance with its data retention policies.
                </p>
              </section>

              <section>
                <h2>5. Subscription Fees and Payment</h2>
                <p>
                  Customer agrees to pay all fees specified in the applicable Order Form or subscription agreement. Unless otherwise specified:
                </p>
                <ul>
                  <li>Fees are quoted and payable in United States dollars</li>
                  <li>Fees are non-refundable except as expressly set forth herein</li>
                  <li>Payment is due within thirty (30) days of invoice date</li>
                  <li>Late payments may accrue interest at 1.5% per month or the maximum rate permitted by law</li>
                </ul>
                <p>
                  Banner may modify subscription fees upon renewal by providing at least sixty (60) days' prior written notice before the end of the then-current Subscription Term.
                </p>
              </section>

              <section>
                <h2>6. Prohibited Uses</h2>
                <p>Customer and its Authorized Users shall not:</p>
                <ul>
                  <li>Use the Service in violation of any applicable law or regulation</li>
                  <li>License, sublicense, sell, resell, or otherwise make the Service available to third parties</li>
                  <li>Attempt to gain unauthorized access to the Service or its related systems</li>
                  <li>Interfere with or disrupt the integrity or performance of the Service</li>
                  <li>Reverse engineer, decompile, or disassemble the Service</li>
                  <li>Use the Service to store or transmit malicious code</li>
                  <li>Use the Service to transmit unsolicited communications</li>
                  <li>Circumvent any usage limits or restrictions in the Service</li>
                </ul>
              </section>

              <section>
                <h2>7. Intellectual Property</h2>
                <p>
                  Banner and its licensors own all right, title, and interest in and to the Service, including all related intellectual property rights. The Service is protected by copyright, trademark, and other laws of the United States and foreign countries.
                </p>
                <p>
                  These Terms do not grant Customer any rights to Banner's trademarks, service marks, or logos. Customer may not use Banner's name or marks without prior written consent.
                </p>
                <p>
                  Customer may provide suggestions, enhancement requests, or other feedback regarding the Service ("Feedback"). Customer grants Banner a perpetual, irrevocable, royalty-free license to use and incorporate such Feedback into the Service.
                </p>
              </section>

              <section>
                <h2>8. Confidentiality</h2>
                <p>
                  Each party agrees to protect the confidential information of the other party using the same degree of care that it uses to protect its own confidential information, but in no event less than reasonable care.
                </p>
                <p>
                  Confidential information includes, but is not limited to: pricing information, technical data, business strategies, and Customer Data. Confidential information does not include information that is publicly available through no fault of the receiving party.
                </p>
              </section>

              <section>
                <h2>9. Service Level and Support</h2>
                <p>
                  Banner will use commercially reasonable efforts to make the Service available 99.9% of the time during each calendar month, excluding scheduled maintenance windows.
                </p>
                <p>
                  Banner provides customer support during business hours (9 AM - 6 PM Eastern Time, Monday through Friday, excluding U.S. federal holidays) via email at{" "}
                  <a href="mailto:support@withbanner.com">support@withbanner.com</a>.
                </p>
              </section>

              <section>
                <h2>10. Third-Party Integrations</h2>
                <p>
                  The Service may integrate with third-party applications, including but not limited to accounting systems, property management software, and document storage platforms. Customer's use of such integrations is subject to the applicable third-party terms and privacy policies.
                </p>
                <p>
                  Banner is not responsible for the operation, security, or data practices of third-party applications.
                </p>
              </section>

              <section>
                <h2>11. Disclaimer of Warranties</h2>
                <p>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. BANNER DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p>
                  BANNER DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. CUSTOMER USES THE SERVICE AT ITS OWN RISK.
                </p>
              </section>

              <section>
                <h2>12. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL BANNER BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE.
                </p>
                <p>
                  BANNER'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS SHALL NOT EXCEED THE AMOUNTS PAID BY CUSTOMER TO BANNER DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>
              </section>

              <section>
                <h2>13. Indemnification</h2>
                <p>
                  Customer agrees to indemnify, defend, and hold harmless Banner and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of or related to:
                </p>
                <ul>
                  <li>Customer's use of the Service in violation of these Terms</li>
                  <li>Customer Data or Customer's data practices</li>
                  <li>Customer's violation of any applicable law or third-party rights</li>
                </ul>
              </section>

              <section>
                <h2>14. Term and Termination</h2>
                <p>
                  These Terms remain in effect for the duration of the Subscription Term. Either party may terminate these Terms:
                </p>
                <ul>
                  <li>For convenience, by providing written notice at least thirty (30) days prior to the end of the then-current Subscription Term</li>
                  <li>For cause, if the other party materially breaches these Terms and fails to cure such breach within thirty (30) days of written notice</li>
                </ul>
                <p>
                  Upon termination, Customer's access to the Service will cease. Sections 4, 7, 8, 11, 12, 13, and 16 shall survive termination.
                </p>
              </section>

              <section>
                <h2>15. Modifications</h2>
                <p>
                  Banner may modify these Terms from time to time. We will provide notice of material changes by email or through the Service at least thirty (30) days before the changes take effect.
                </p>
                <p>
                  Continued use of the Service after such notice constitutes acceptance of the modified Terms. If Customer does not agree to the modified Terms, Customer must stop using the Service.
                </p>
              </section>

              <section>
                <h2>16. General Provisions</h2>
                <p>
                  <strong>Governing Law.</strong> These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
                </p>
                <p>
                  <strong>Dispute Resolution.</strong> Any disputes arising out of or related to these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, with arbitration to take place in Wilmington, Delaware.
                </p>
                <p>
                  <strong>Assignment.</strong> Customer may not assign these Terms without Banner's prior written consent. Banner may assign these Terms in connection with a merger, acquisition, or sale of all or substantially all of its assets.
                </p>
                <p>
                  <strong>Entire Agreement.</strong> These Terms, together with any applicable Order Form and the Privacy Policy, constitute the entire agreement between the parties regarding the subject matter hereof.
                </p>
                <p>
                  <strong>Severability.</strong> If any provision of these Terms is held to be unenforceable, such provision shall be modified to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.
                </p>
              </section>

              <section>
                <h2>17. Contact Information</h2>
                <p>For questions about these Terms, please contact us:</p>
                <ul>
                  <li>Email: <a href="mailto:legal@withbanner.com">legal@withbanner.com</a></li>
                  <li>Support: <a href="mailto:support@withbanner.com">support@withbanner.com</a></li>
                  <li>Phone: 415-231-7512</li>
                </ul>
                <p>
                  Banner Technologies, Inc.<br />
                  San Francisco, CA
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
