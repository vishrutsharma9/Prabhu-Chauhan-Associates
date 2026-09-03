import { siteConfig } from '../data/siteConfig';
import { services } from '../data/services';
import { PageHero } from '../components/PageHero';
import { ServiceCard } from '../components/ServiceCard';
import { CTASection } from '../components/CTASection';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Services() {
  useDocumentHead({
    title: `Services | ${siteConfig.firmName}`,
    description:
      'Audit & assurance, taxation, GST, accounting, corporate compliance, and advisory services offered by ' +
      siteConfig.firmName +
      '.',
  });
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        lead="A full range of accounting, tax, and advisory services — built around what your business actually needs. Click a service to see more detail."
      />

      <div className="section" ref={revealRef}>
        <div className="container">
          <div className="grid grid-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      <CTASection
        title="Don't see exactly what you need?"
        lead="Get in touch and we'll help you find the right service for your situation."
      />
    </div>
  );
}
