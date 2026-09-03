import { useEffect, useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import './SplashScreen.css';

// How long the splash stays fully visible before it starts fading, and how
// long that fade takes. FADE_MS must match the transition duration in
// SplashScreen.css (.splash-screen.is-leaving).
const VISIBLE_MS = 1000;
const FADE_MS = 500;

// Only show once per browser tab session — a repeat splash on every internal
// navigation or refresh would get old fast. Uses sessionStorage rather than
// localStorage so it reappears on a genuinely new visit (new tab).
const SESSION_KEY = 'splash-shown';

/**
 * A brief, formal logo/name reveal shown once when the site first loads —
 * not on every internal route change (React Router doesn't reload the page
 * for those, so this component only mounts once per real page load anyway).
 * Respects prefers-reduced-motion by skipping straight to the site.
 */
export function SplashScreen() {
  const [mounted, setMounted] = useState(() => {
    try {
      return sessionStorage.getItem(SESSION_KEY) !== 'true';
    } catch {
      // sessionStorage can throw in some private-browsing modes — fail open
      // and just show the splash rather than crash.
      return true;
    }
  });
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const visibleMs = prefersReducedMotion ? 0 : VISIBLE_MS;
    const fadeMs = prefersReducedMotion ? 0 : FADE_MS;

    document.body.style.overflow = 'hidden';

    const leaveTimer = setTimeout(() => setLeaving(true), visibleMs);
    const removeTimer = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = '';
      try {
        sessionStorage.setItem(SESSION_KEY, 'true');
      } catch {
        // ignore — worst case the splash shows again next load
      }
    }, visibleMs + fadeMs);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className={`splash-screen ${leaving ? 'is-leaving' : ''}`} role="presentation" aria-hidden="true">
      <img src={`${import.meta.env.BASE_URL}images/ca-india-logo.png`} alt="" className="splash-screen__logo" />
      <div className="splash-screen__text">
        <span className="splash-screen__name">{siteConfig.firmName}</span>
        <span className="splash-screen__divider" />
        <span className="splash-screen__tag">Chartered Accountants</span>
      </div>
    </div>
  );
}
