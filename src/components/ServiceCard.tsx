import { Link } from 'react-router-dom';
import type { Service } from '../types/content';
import { ServiceIcon } from './icons/ServiceIcons';
import { ArrowRightIcon } from './icons/Icons';
import './ServiceCard.css';

/** Service summary card — links to the service's own detail page (/services/:id). */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card card reveal">
      <div className="service-card__icon">
        <ServiceIcon name={service.icon} />
      </div>
      <h3>{service.title}</h3>
      <p className="service-card__desc">{service.shortDescription}</p>

      <Link to={`/services/${service.id}`} className="service-card__link">
        Read More <ArrowRightIcon />
      </Link>
    </article>
  );
}
