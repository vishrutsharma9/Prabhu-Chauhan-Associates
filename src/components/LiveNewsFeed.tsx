import liveNewsData from '../data/liveNews.json';
import type { LiveNewsFeedData } from '../types/content';
import { formatDate } from '../lib/formatDate';
import { ArrowRightIcon } from './icons/Icons';
import './LiveNewsFeed.css';

const data = liveNewsData as LiveNewsFeedData;

/**
 * Shows the official GST circulars synced from cbic-gst.gov.in (see
 * scripts/fetch-live-news.mjs and .github/workflows/fetch-news.yml).
 *
 * Renders nothing until the first scheduled sync has populated
 * src/data/liveNews.json — this is expected right after the site is first
 * deployed, before the workflow's first scheduled run.
 */
export function LiveNewsFeed() {
  if (data.items.length === 0) return null;

  return (
    <div className="live-news-feed card reveal">
      <div className="live-news-feed__header">
        <div>
          <span className="live-dot" aria-hidden="true" />
          <h3>Live GST Circulars</h3>
        </div>
        {data.updatedAt && <span className="live-news-feed__synced">Synced {formatDate(data.updatedAt)}</span>}
      </div>

      <ul className="live-news-feed__list">
        {data.items.map((item) => (
          <li key={item.link}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <span>{item.title}</span>
              <ArrowRightIcon />
            </a>
          </li>
        ))}
      </ul>

      <p className="live-news-feed__attribution">
        Official notifications from{' '}
        <a href={data.sourceUrl} target="_blank" rel="noopener noreferrer">
          {data.source}
        </a>
        . No publish date is provided by the source — "Synced" reflects when this site last checked for updates.
      </p>
    </div>
  );
}
