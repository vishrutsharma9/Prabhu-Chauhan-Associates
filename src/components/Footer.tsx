import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { services } from '../data/services';
import { PhoneIcon, MailIcon, PinIcon, LinkedInIcon, TwitterIcon, FacebookIcon } from './icons/Icons';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__about">
          <div className="site-footer__brand">
            {/* White backing so the logo (drawn for a light background) stays
                legible against the dark footer. */}
            <span className="site-footer__logo-plate">
              <img src="/images/ca-india-logo.png" alt="CA India" className="site-footer__logo" />
            </span>
            <span className="site-footer__brand-text">
              <span className="site-footer__brand-name">{siteConfig.firmName}</span>
              <span className="site-footer__brand-tag">Chartered Accountants</span>
            </span>
          </div>
          {/* Tagline hidden for now — re-add `<p>{siteConfig.tagline}</p>` here
              once siteConfig.ts has a real one. */}
          {(siteConfig.social.linkedin || siteConfig.social.twitter || siteConfig.social.facebook) && (
            <div className="site-footer__social">
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
              )}
              {siteConfig.social.twitter && (
                <a href={siteConfig.social.twitter} aria-label="Twitter / X" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="site-footer__col">
          <h3>Quick Links</h3>
          <ul>
            {siteConfig.nav.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Services</h3>
          <ul>
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.id}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Contact</h3>
          <ul className="site-footer__contact">
            <li>
              <PinIcon />
              <span>{siteConfig.addressDisplay}</span>
            </li>
            <li>
              <PhoneIcon />
              <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            </li>
            <li>
              <MailIcon />
              <a href={siteConfig.emailHref}>{siteConfig.emailDisplay}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>
            &copy; {year} {siteConfig.firmName}. All rights reserved.
          </p>
          <p className="site-footer__meta">
            {/* TODO: remove this line once the ICAI firm registration number is confirmed */}
            Firm Registration No. {siteConfig.registrationNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
