import { siteConfig } from '../data/siteConfig';
import { PageHero } from '../components/PageHero';
import { ContactForm } from '../components/ContactForm';
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from '../components/icons/Icons';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export function Contact() {
  useDocumentHead({
    title: `Contact Us | ${siteConfig.firmName}`,
    description: `Get in touch with ${siteConfig.firmName}. Find our office address, phone, email, and office hours, or send us an enquiry directly.`,
  });
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        lead="Have a question or need assistance? Reach out using the details below, or send us a message directly."
      />

      <div className="section" ref={revealRef}>
        <div className="container contact-layout">
          <div className="contact-info reveal">
            <h2>Visit or Reach Us</h2>

            <ul className="contact-info__list">
              <li>
                <PinIcon />
                <div>
                  <strong>Office Address</strong>
                  <p>{siteConfig.addressDisplay}</p>
                </div>
              </li>
              <li>
                <PhoneIcon />
                <div>
                  <strong>Phone</strong>
                  <p>
                    <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
                  </p>
                </div>
              </li>
              <li>
                <MailIcon />
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href={siteConfig.emailHref}>{siteConfig.emailDisplay}</a>
                  </p>
                </div>
              </li>
              <li>
                <ClockIcon />
                <div>
                  <strong>Office Hours</strong>
                  {siteConfig.officeHours.map((slot) => (
                    <p key={slot.days}>
                      {slot.days}: {slot.hours}
                    </p>
                  ))}
                </div>
              </li>
            </ul>

            <div className="contact-map">
              {siteConfig.googleMapsEmbedUrl ? (
                <iframe
                  src={siteConfig.googleMapsEmbedUrl}
                  title="Office location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="contact-map__placeholder">
                  <PinIcon />
                  <p>
                    Google Maps location placeholder.
                    <br />
                    Add a map embed URL in <code>src/data/siteConfig.ts</code> →{' '}
                    <code>googleMapsEmbedUrl</code>.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="reveal">
            <h2>Send an Enquiry</h2>
            <p className="section-lead" style={{ marginBottom: 24 }}>
              Fill out the form and our team will get back to you shortly.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
