import { useState, type FormEvent } from 'react';
import { siteConfig } from '../data/siteConfig';
import { services } from '../data/services';
import { MailIcon } from './icons/Icons';
import './ContactForm.css';

/**
 * Contact / inquiry form with no backend.
 *
 * If `siteConfig.contactGoogleFormEmbedUrl` is set, this renders an embedded
 * Google Form instead (see README.md → "Connecting the contact form"). Since
 * the form itself is a cross-origin Google iframe, we can't restyle what's
 * *inside* it — the polish here is in the frame around it: a branded header,
 * accent border, and a loading skeleton instead of a blank white box while
 * Google's form loads.
 *
 * Until a Google Form is connected, submitting this form opens the visitor's
 * email client with a pre-filled message addressed to `siteConfig.emailHref`
 * — no server or database required.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formLoaded, setFormLoaded] = useState(false);

  if (siteConfig.contactGoogleFormEmbedUrl) {
    return (
      <div className="contact-form-embed">
        <div className="contact-form-embed__header">
          <span className="contact-form-embed__icon">
            <MailIcon />
          </span>
          <div>
            <h3>Send Us a Message</h3>
            <p>Fill out the form below — we typically respond within one business day.</p>
          </div>
        </div>

        <div className="contact-form-embed__frame">
          {!formLoaded && (
            <div className="contact-form-embed__skeleton" aria-hidden="true">
              <div className="contact-form-embed__spinner" />
              <span>Loading form…</span>
            </div>
          )}
          {/* height is a generous fallback — the actual visible size and
              header crop are set in ContactForm.css (with a wider mobile
              crop, since Google's own header wraps to more lines there). */}
          <iframe
            src={siteConfig.contactGoogleFormEmbedUrl}
            title="Contact form"
            width="100%"
            height="1100"
            loading="lazy"
            onLoad={() => setFormLoaded(true)}
            className={formLoaded ? 'is-loaded' : ''}
          >
            Loading form…
          </iframe>
        </div>
      </div>
    );
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get('name');
    const email = data.get('email');
    const phone = data.get('phone');
    const serviceRequired = data.get('service');
    const message = data.get('message');

    const subject = `Website Enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service Required: ${serviceRequired}`,
      '',
      'Message:',
      message,
    ].join('\n');

    const mailtoUrl = `${siteConfig.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">
          Full Name <span className="required">*</span>
        </label>
        <input type="text" id="name" name="name" required autoComplete="name" />
      </div>

      <div className="contact-form__row">
        <div className="form-field">
          <label htmlFor="email">
            Email Address <span className="required">*</span>
          </label>
          <input type="email" id="email" name="email" required autoComplete="email" />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="service">Service Required</label>
        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message">
          Message <span className="required">*</span>
        </label>
        <textarea id="message" name="message" required placeholder="Tell us briefly about your requirement…" />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Send Message
      </button>

      <p className="form-note">
        This opens your email app with the message pre-filled — nothing is stored or sent
        through this website.{' '}
        {submitted && <strong>If your email app didn't open, please email us directly at {siteConfig.emailDisplay}.</strong>}
      </p>
    </form>
  );
}
