import type { Industry } from '../types/content';
import { ServiceIcon } from './icons/ServiceIcons';
import './IndustryCard.css';

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className="industry-card card reveal">
      <div className="industry-card__icon">
        <ServiceIcon name={industry.icon} />
      </div>
      <h3>{industry.name}</h3>
      {industry.description && <p>{industry.description}</p>}
    </article>
  );
}
