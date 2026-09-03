import { siteConfig } from '../data/siteConfig';
import { industries } from '../data/industries';
import { PageHero } from '../components/PageHero';
import { IndustryCard } from '../components/IndustryCard';
import { CTASection } from '../components/CTASection';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Industries() {
  useDocumentHead({
    title: `Industries We Serve | ${siteConfig.firmName}`,
    description: `Industries and sectors ${siteConfig.firmName} has experience working with, from manufacturing to financial services.`,
  });
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div>
      <PageHero
        eyebrow="Sectors We Work With"
        title="Industries We Serve"
        lead="Every industry has its own accounting nuances and compliance requirements. Here are the sectors we have experience working with."
      />

      <div className="section" ref={revealRef}>
        <div className="container">
          <div className="grid grid-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </div>

      <CTASection
        title="Don't see your industry listed?"
        lead="Reach out anyway — we're happy to discuss whether we're a good fit for your business."
      />
    </div>
  );
}
