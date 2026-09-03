import { siteConfig } from '../data/siteConfig';
import { sortedKnowledgeResources } from '../data/knowledge';
import { PageHero } from '../components/PageHero';
import { KnowledgeCard } from '../components/KnowledgeCard';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Knowledge() {
  useDocumentHead({
    title: `Knowledge Center | ${siteConfig.firmName}`,
    description: `Articles, webinars, presentations, and guides from ${siteConfig.firmName} on tax, compliance, and business finance.`,
  });
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div>
      <PageHero
        eyebrow="Resources"
        title="Knowledge Center"
        lead="Articles, webinars, presentations, and guides to help you stay informed on tax, compliance, and business finance."
      />

      <div className="section" ref={revealRef}>
        <div className="container">
          {sortedKnowledgeResources.length > 0 ? (
            <div className="grid grid-3">
              {sortedKnowledgeResources.map((resource) => (
                <KnowledgeCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <p className="section-lead" style={{ textAlign: 'center', margin: '0 auto' }}>
              No resources published yet — check back soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
