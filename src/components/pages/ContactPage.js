import React from "react";

const ContactPage = () => {
  return (
    <>
      <main id="content" class="site-content">
        <header class="page-header inner-sm outer">
          <h1 class="page-title line-top">Contact</h1>
        </header>
        <section id="contact-form" class="block block-form outer">
          <div class="inner">
            <div class="block-content inner-sm">
              <p>
                Hi there! If you want to leave a message, feel free to fill the
                contact form below, and I'll get back to you within 1-2 days.
              </p>
              <form
                name="contactForm"
                id="contactForm"
                action="/thank-you"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div class="screen-reader-text">
                  <label id="contactForm-bot-label">
                    Don't fill this out if you're human:{" "}
                    <input
                      aria-labelledby="contactForm-bot-label"
                      name="bot-field"
                    />
                  </label>
                </div>
                <input
                  type="hidden"
                  aria-label="contactForm-name"
                  name="form-name"
                  value="contactForm"
                />
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    required=""
                  />
                  <span class="animate-border" aria-hidden="true" />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    required=""
                  />
                  <span class="animate-border" aria-hidden="true" />
                </div>
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <div class="form-select-wrap">
                    <select id="subject" name="subject">
                      <option value="">Please select</option>
                      <option value="Error on the site">
                        Error on the site
                      </option>
                      <option value="Sponsorship">Sponsorship</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Your message"
                  />
                  <span class="animate-border" aria-hidden="true" />
                </div>
                <div class="form-group form-checkbox">
                  <input type="checkbox" id="consent" name="consent" />
                  <label for="consent">
                    I understand that this form is storing my submitted
                    information so I can be contacted.
                  </label>
                </div>
                <div class="form-submit">
                  <button type="submit" class="button">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
