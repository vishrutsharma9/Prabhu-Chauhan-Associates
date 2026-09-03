import { useEffect } from 'react';

interface DocumentHeadOptions {
  title: string;
  description: string;
}

/**
 * Sets the page <title> and meta description per-route, and keeps the
 * Open Graph title/description tags in sync. No dependency (e.g. react-helmet)
 * needed for a small, static-content site like this one.
 */
export function useDocumentHead({ title, description }: DocumentHeadOptions) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, content: string) => {
      const el = document.head.querySelector<HTMLMetaElement>(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.origin + window.location.pathname);
    }
  }, [title, description]);
}
