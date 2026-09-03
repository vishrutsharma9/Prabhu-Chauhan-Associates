import { siteConfig } from '../data/siteConfig';
import { careers } from '../data/careers';
import { PageHero } from '../components/PageHero';
import { JobCard } from '../components/JobCard';
import { CheckIcon } from '../components/icons/Icons';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Careers.css';

// Generic reasons to work at the firm. Replace with real specifics once available.
const reasons = [
  '[Replace with a real reason — e.g. structured learning and mentorship for articled assistants.]',
  '[Replace with a real reason — e.g. hands-on exposure across audit, tax, and advisory engagements.]',
  '[Replace with a real reason — e.g. a collaborative, supportive team culture.]',
  '[Replace with a real reason — e.g. clear growth path from article assistant to qualified CA and beyond.]',
];

export function Careers() {
  useDocumentHead({
    title: `Careers | ${siteConfig.firmName}`,
    description: `Explore current openings at ${siteConfig.firmName} and learn what it's like to work with our team.`,
  });
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div>
      <PageHero
        eyebrow="Join Our Team"
        title="Careers"
        lead="We're always looking to work with motivated people who care about doing good work for clients. Explore our current openings below."
      />

      <div className="section" ref={revealRef}>
        <div className="container careers-intro">
          <div className="reveal">
            <h2>Why Work With Us</h2>
            <p className="section-lead">
              {/* TODO: replace with a real paragraph about the firm's work culture */}
              [Replace this paragraph with a short, honest description of what it's like to work
              at {siteConfig.firmName} — the kind of work, the team, and the growth opportunities.]
            </p>
          </div>
          <ul className="careers-reasons reveal">
            {reasons.map((reason, i) => (
              <li key={i}>
                <CheckIcon />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section section--alt">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Open Positions</span>
            <h2>Current Openings</h2>
            <p className="section-lead">
              To add or remove a listing, edit <code>src/data/careers.ts</code>.
            </p>
          </div>

          {careers.length > 0 ? (
            <div className="grid grid-3">
              {careers.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="careers-empty reveal">
              <p>
                There are no open positions right now. We're always happy to hear from talented
                people — feel free to send your resume to{' '}
                <a href={siteConfig.careersEmailHref}>{siteConfig.careersEmailDisplay}</a>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
