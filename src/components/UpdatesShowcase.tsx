import type { UpdateItem } from '../types/content';
import { formatDate } from '../lib/formatDate';
import { ArrowRightIcon } from './icons/Icons';
import { LiveNewsFeed } from './LiveNewsFeed';
import './UpdatesShowcase.css';

// Set this back to `true` to bring back the firm's own curated "Latest
// Updates" (a featured card + a short list, driven by src/data/updates.ts)
// above the live CBIC feed. Turned off for now so the Home page shows only
// the live feed.
const SHOW_FIRM_UPDATES = false;

const CATEGORY_CLASS: Record<UpdateItem['category'], string> = {
  Announcement: 'is-announcement',
  'Tax Update': 'is-tax',
  'GST Update': 'is-gst',
  'Firm News': 'is-news',
  'Regulatory Update': 'is-regulatory',
};

interface UpdatesShowcaseProps {
  /** Already sorted newest-first — see src/data/updates.ts (sortedUpdates). */
  updates: UpdateItem[];
}

/**
 * Home page "updates" section — the live CBIC GST circulars feed
 * (LiveNewsFeed), plus (when SHOW_FIRM_UPDATES is true) the firm's own
 * curated updates from src/data/updates.ts as a featured card + short list.
 */
export function UpdatesShowcase({ updates }: UpdatesShowcaseProps) {
  const [featured, ...rest] = updates;
  const listItems = rest.slice(0, 3);
  const showFirmUpdates = SHOW_FIRM_UPDATES && Boolean(featured);

  return (
    <section className="updates-showcase">
      <div className="container">
        <div className="updates-showcase__header reveal">
          <div>
            <span className="eyebrow">Stay Informed</span>
            <h2>{showFirmUpdates ? 'Latest Updates' : 'Live Updates'}</h2>
          </div>
          {showFirmUpdates && (
            <div className="updates-showcase__live">
              <span className="live-dot" aria-hidden="true" />
              Updated {formatDate(featured.date)}
            </div>
          )}
        </div>

        {showFirmUpdates && (
          <div className="updates-showcase__grid">
            <article className="updates-showcase__featured card reveal">
              <span className={`badge ${CATEGORY_CLASS[featured.category]}`}>{featured.category}</span>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <div className="updates-showcase__featured-footer">
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                {featured.readMoreUrl && (
                  <a href={featured.readMoreUrl} target="_blank" rel="noopener noreferrer">
                    Read More <ArrowRightIcon />
                  </a>
                )}
              </div>
            </article>

            {listItems.length > 0 && (
              <ul className="updates-showcase__list reveal">
                {listItems.map((update) => (
                  <li key={update.id}>
                    <span className={`badge ${CATEGORY_CLASS[update.category]}`}>{update.category}</span>
                    <div className="updates-showcase__list-body">
                      <h4>{update.title}</h4>
                      <time dateTime={update.date}>{formatDate(update.date)}</time>
                    </div>
                    {update.readMoreUrl && (
                      <a
                        href={update.readMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read more: ${update.title}`}
                        className="updates-showcase__list-arrow"
                      >
                        <ArrowRightIcon />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <LiveNewsFeed />
      </div>
    </section>
  );
}
