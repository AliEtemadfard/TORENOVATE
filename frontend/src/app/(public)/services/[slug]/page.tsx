import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs, CTASection, PageHero, PlaceholderImage, ProjectCard, Section } from "@/components/ui";
import { getProjectsForService, getService } from "@/lib/content";
import { quoteHref } from "@/lib/navigation";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const relatedProjects = getProjectsForService(service.slug);
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} />
      <PageHero eyebrow="Service" title={service.title}>
        <p className="lead">{service.shortDescription}</p>
        <Link className="button" href={quoteHref({ service: service.slug })}>Request a Quote</Link>
        <PlaceholderImage label={service.title} tall />
      </PageHero>
      <Section title="Service overview"><p className="lead">{service.description}</p></Section>
      <Section title="What this service may include" tone="muted"><ul className="check-list">{service.includes.map((item) => <li key={item}>{item}</li>)}</ul></Section>
      <Section title="Capabilities / scope"><div className="feature-grid">{service.capabilities.map((item) => <div key={item}><h3>{item}</h3></div>)}</div></Section>
      <Section title="Related projects" tone="muted">
        {relatedProjects.length ? <div className="card-grid">{relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <p>Project examples for this service will be added here.</p>}
        <p className="section-link"><Link href={`/projects?category=${encodeURIComponent(service.slug)}`}>Browse projects for this service →</Link></p>
      </Section>
      <Section title="Understand the renovation process"><p>See the path from consultation to handover.</p><Link href="/process">Learn about our process →</Link></Section>
      <CTASection title="Discuss your project" description={`Request a quote for ${service.title.toLowerCase()}.`} href={quoteHref({ service: service.slug })} />
    </>
  );
}
