import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* basename tracks vite.config.ts's `base` automatically (import.meta.env.BASE_URL),
        so routing works whether this is served from the domain root or a
        subpath like /Prabhu-Chauhan-Associates/ — without it, every route
        (including home) fails to match once served from a subpath. */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
