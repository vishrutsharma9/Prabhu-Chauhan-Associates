import type { JobOpening } from '../types/content';
import { PinIcon } from './icons/Icons';
import './JobCard.css';

export function JobCard({ job }: { job: JobOpening }) {
  return (
    <article className="job-card card reveal">
      <div className="job-card__header">
        <h3>{job.position}</h3>
        <span className="badge">{job.employmentType}</span>
      </div>

      <ul className="job-card__meta">
        <li>
          <PinIcon />
          {job.location}
        </li>
        <li>{job.experience} experience</li>
      </ul>

      <p className="job-card__desc">{job.description}</p>

      <a href={job.applyUrl} className="btn btn-primary btn-block">
        Apply Now
      </a>
    </article>
  );
}
