import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { useDocumentHead } from '../hooks/useDocumentHead';
import './NotFound.css';

export function NotFound() {
  useDocumentHead({
    title: `Page Not Found | ${siteConfig.firmName}`,
    description: 'The page you are looking for could not be found.',
  });

  return (
    <div className="not-found section">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page Not Found</h1>
        <p className="section-lead">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
