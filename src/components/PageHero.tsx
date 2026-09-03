import './PageHero.css';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead: string;
}

/** Compact hero banner used at the top of inner pages (Services, Contact, Careers). */
export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow page-hero__eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="section-lead">{lead}</p>
      </div>
    </section>
  );
}
