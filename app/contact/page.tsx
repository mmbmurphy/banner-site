export const metadata = {
  title: "Contact | Banner",
  description: "Book a demo to see how Banner can transform your CapEx management.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section_layout16">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div className="text-align-center">
                <div className="max-width-large align-center">
                  <h1 className="heading-style-h1">Book a Demo</h1>
                  <div className="spacer-medium"></div>
                  <p className="text-size-medium">
                    See how Banner can help your team manage CapEx more effectively.
                    Fill out the form below and we&apos;ll be in touch.
                  </p>
                </div>
              </div>
              <div className="spacer-xlarge"></div>
              <div className="max-width-medium align-center">
                <div className="contact-form_component w-form">
                  <form className="contact-form_form">
                    <div className="form-field-wrapper">
                      <label htmlFor="name" className="form-field-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-input w-input"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="form-field-wrapper">
                      <label htmlFor="email" className="form-field-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-input w-input"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                    <div className="form-field-wrapper">
                      <label htmlFor="company" className="form-field-label">
                        Company
                      </label>
                      <input
                        type="text"
                        className="form-input w-input"
                        id="company"
                        name="company"
                        placeholder="Your company"
                      />
                    </div>
                    <div className="form-field-wrapper">
                      <label htmlFor="message" className="form-field-label">
                        Message
                      </label>
                      <textarea
                        className="form-input is-text-area w-input"
                        id="message"
                        name="message"
                        placeholder="Tell us about your CapEx challenges..."
                        rows={4}
                      />
                    </div>
                    <div className="margin-top margin-medium">
                      <button type="submit" className="button w-button">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
