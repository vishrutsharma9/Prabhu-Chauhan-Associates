import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { MenuIcon, CloseIcon } from './icons/Icons';
import './Header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu automatically if the viewport grows past mobile width.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1180) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* The mobile nav panel below is deliberately a SIBLING of <header>,
          not nested inside it. <header> has `backdrop-filter` for its
          frosted-glass effect, and backdrop-filter (like `filter`/
          `transform`) makes an element the containing block for any
          `position: fixed` descendant — which broke the mobile panel's
          full-viewport sizing (collapsed height, then off-screen-transform
          overflow) when it lived inside <header>. Keep it out here. */}
      <header className="site-header">
        <div className="container site-header__bar">
          <NavLink to="/" className="site-header__brand" onClick={() => setMenuOpen(false)}>
            {/* TODO: replace with the firm's own logo once available — see
                public/images/ca-india-logo.png */}
            <img src="/images/ca-india-logo.png" alt="CA India" className="site-header__logo" />
            <span className="site-header__brand-text">
              <span className="site-header__brand-name">{siteConfig.firmName}</span>
              <span className="site-header__brand-divider" aria-hidden="true" />
              <span className="site-header__brand-tag">Chartered Accountants</span>
            </span>
          </NavLink>

          <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
            <ul>
              {siteConfig.nav.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'is-active' : '')}
                    end={item.path === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <a href={siteConfig.phoneHref} className="btn btn-primary site-header__cta">
            Call Now
          </a>

          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <nav
        id="mobile-nav"
        className={`site-header__nav--mobile ${menuOpen ? 'is-open' : ''}`}
        aria-label="Primary mobile"
      >
        <ul>
          {siteConfig.nav.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'is-active' : '')}
                end={item.path === '/'}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href={siteConfig.phoneHref} className="btn btn-primary btn-block" onClick={() => setMenuOpen(false)}>
              Call Now
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
