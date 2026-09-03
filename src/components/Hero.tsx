import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import './Hero.css';

/**
 * Home page hero — a full-width band with a dark-to-light background
 * (navy on the left, fading to the page background on the right), styled
 * after reference CA firm sites that use a strong photographic hero.
 *
 * We don't have a real office/team photo to use honestly, so the "photo"
 * side is a plain gradient plus a subtle abstract line texture instead of
 * a stock image — replace `.hero__texture` in Hero.css with a real photo
 * background once the firm has one (see the comment there).
 */
export function Hero() {
  return (
    <section className="hero">
      <div className="hero__texture" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="eyebrow hero__eyebrow reveal">Chartered Accountants</span>
        <h1 className="reveal">{siteConfig.firmName}</h1>
        <p className="hero__intro reveal">{siteConfig.shortIntro}</p>
        <div className="hero__actions reveal">
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
          <Link to="/services" className="btn btn-outline">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
