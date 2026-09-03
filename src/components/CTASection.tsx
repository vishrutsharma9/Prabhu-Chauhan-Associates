import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import './CTASection.css';

interface CTASectionProps {
  title?: string;
  lead?: string;
}

/** Reusable "Contact Us" call-to-action banner used on Home and inner pages. */
export function CTASection({
  title = 'Ready to talk to a Chartered Accountant?',
  lead = 'Tell us about your requirement and our team will get back to you promptly.',
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="container cta-section__inner reveal">
        <div>
          <h2>{title}</h2>
          <p className="section-lead">{lead}</p>
        </div>
        <div className="cta-section__actions">
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
          <a href={siteConfig.phoneHref} className="btn btn-outline">
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
