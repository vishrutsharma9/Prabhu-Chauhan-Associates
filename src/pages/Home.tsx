import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { sortedUpdates } from '../data/updates';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { IndustryCard } from '../components/IndustryCard';
import { UpdatesShowcase } from '../components/UpdatesShowcase';
import { CTASection } from '../components/CTASection';
import { ServiceIcon } from '../components/icons/ServiceIcons';
import { ArrowRightIcon, CheckIcon } from '../components/icons/Icons';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Home.css';

// Generic, non-fabricated value props. Replace/expand once the firm can
// confirm specific strengths (do not add certifications, years of
// experience, or client counts here unless verified).
const strengths = [
  {
    title: 'Personalized Attention',
    description: '[Replace with a real strength — e.g. every client is guided by a dedicated point of contact.]',
  },
  {
    title: 'Timely Compliance',
    description: '[Replace with a real strength — e.g. a structured compliance calendar so deadlines are never missed.]',
  },
  {
    title: 'Transparent Process',
    description: '[Replace with a real strength — e.g. clear, jargon-free communication at every step.]',
  },
  {
    title: 'Client-First Approach',
    description: '[Replace with a real strength — e.g. advice tailored to your specific business, not generic templates.]',
  },
];

export function Home() {
  useDocumentHead({
    title: `${siteConfig.firmName} | Chartered Accountants`,
    description: siteConfig.shortIntro,
  });
  const revealRef = useScrollReveal<HTMLDivElement>();

  const previewServices = services.slice(0, 6);
  const previewIndustries = industries.slice(0, 8);

  return (
    <div ref={revealRef}>
      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                              */}
      {/* ---------------------------------------------------------------- */}
      <Hero />

      {/* ---------------------------------------------------------------- */}
      {/* LATEST UPDATES                                                    */}
      {/* ---------------------------------------------------------------- */}
      <UpdatesShowcase updates={sortedUpdates} />

      {/* ---------------------------------------------------------------- */}
      {/* ABOUT / FIRM OVERVIEW + KEY AREAS OF EXPERTISE                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="section">
        <div className="container about">
          <div className="about__copy reveal">
            <span className="eyebrow">About the Firm</span>
            <h2>A trusted partner for your financial matters</h2>
            {siteConfig.aboutParagraphs.map((para, i) => (
              <p key={i} className="section-lead">
                {para}
              </p>
            ))}
          </div>

          <div className="about__expertise reveal">
            <h3>Key Areas of Expertise</h3>
            <ul className="expertise-list">
              {services.map((service) => (
                <li key={service.id}>
                  <ServiceIcon name={service.icon} />
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* SERVICES PREVIEW                                                  */}
      {/* ---------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">What We Do</span>
            <h2>Our Services</h2>
            <p className="section-lead">
              Comprehensive accounting, tax, and advisory services tailored to individuals and
              businesses.
            </p>
          </div>
          <div className="grid grid-3">
            {previewServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="home-services__more reveal">
            <Link to="/services" className="btn btn-secondary">
              View All Services <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* INDUSTRIES WE SERVE                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header center reveal">
            <span className="eyebrow">Sectors We Work With</span>
            <h2>Industries We Serve</h2>
            <p className="section-lead">
              We work with businesses across a range of industries, each with its own accounting
              and compliance nuances.
            </p>
          </div>
          <div className="grid grid-4">
            {previewIndustries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
          <div className="home-services__more reveal">
            <Link to="/industries" className="btn btn-secondary">
              View All Industries <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* WHY CHOOSE US                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Why Choose Us</span>
            <h2>What Sets Us Apart</h2>
          </div>
          <div className="grid grid-4">
            {strengths.map((item) => (
              <div key={item.title} className="strength-card reveal">
                <CheckIcon />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CONTACT CTA                                                       */}
      {/* ---------------------------------------------------------------- */}
      <CTASection />
    </div>
  );
}
