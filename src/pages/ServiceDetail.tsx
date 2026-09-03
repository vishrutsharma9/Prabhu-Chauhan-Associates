import { Link, useParams } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { services } from '../data/services';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { ServiceIcon } from '../components/icons/ServiceIcons';
import { useDocumentHead } from '../hooks/useDocumentHead';
import './ServiceDetail.css';

export function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((s) => s.id === serviceId);

  useDocumentHead({
    title: service ? `${service.title} | ${siteConfig.firmName}` : `Service Not Found | ${siteConfig.firmName}`,
    description: service ? service.shortDescription : 'This service could not be found.',
  });

  if (!service) {
    return (
      <div className="section">
        <div className="container service-detail__not-found">
          <h1>Service Not Found</h1>
          <p className="section-lead">This service listing doesn't exist or may have been renamed.</p>
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div>
      <PageHero eyebrow="Our Services" title={service.title} lead={service.shortDescription} />

      <div className="section">
        <div className="container service-detail">
          <div className="service-detail__main reveal">
            <Link to="/services" className="service-detail__back">
              ← All Services
            </Link>
            <div className="service-detail__icon">
              <ServiceIcon name={service.icon} />
            </div>
            <h2>Overview</h2>
            <p className="section-lead">{service.detailedDescription}</p>
          </div>

          {otherServices.length > 0 && (
            <aside className="service-detail__aside reveal">
              <h3>Other Services</h3>
              <ul>
                {otherServices.map((s) => (
                  <li key={s.id}>
                    <Link to={`/services/${s.id}`}>
                      <ServiceIcon name={s.icon} />
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>

      <CTASection
        title={`Have a question about ${service.title}?`}
        lead="Get in touch and we'll help you understand how this applies to your situation."
      />
    </div>
  );
}
