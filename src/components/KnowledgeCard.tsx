import type { KnowledgeResource } from '../types/content';
import { ArrowRightIcon } from './icons/Icons';
import { formatDate } from '../lib/formatDate';
import './KnowledgeCard.css';

export function KnowledgeCard({ resource }: { resource: KnowledgeResource }) {
  return (
    <article className="knowledge-card card reveal">
      <div className="knowledge-card__meta">
        <span className="badge">{resource.type}</span>
        <time dateTime={resource.date}>{formatDate(resource.date)}</time>
      </div>
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      {resource.url && (
        <a href={resource.url} className="knowledge-card__link" target="_blank" rel="noopener noreferrer">
          View {resource.type} <ArrowRightIcon />
        </a>
      )}
    </article>
  );
}
