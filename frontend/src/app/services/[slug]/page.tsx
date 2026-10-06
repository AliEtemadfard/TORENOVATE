import { notFound } from "next/navigation";

import { getProjectsForService } from "@/data/projects";
import { getService } from "@/data/services";
import { CTASection, PageHero, PlaceholderImage, ProjectCard, Section } from "@/components/ui";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const relatedProjects = getProjectsForService(service.slug);
  return <main><PageHero eyebrow="Service" title={service.title}><p className="lead">{service.shortDescription}</p><PlaceholderImage label={service.title} /></PageHero><Section title="Service overview"><p className="lead">{service.description}</p></Section><Section title="What this service may include" tone="muted"><ul className="check-list">{service.includes.map((item) => <li key={item}>{item}</li>)}</ul></Section><Section title="Capabilities / scope"><div className="feature-grid">{service.capabilities.map((item) => <div key={item}><h3>{item}</h3><p>Placeholder scope detail for this prototype.</p></div>)}</div></Section><Section title="Related projects" tone="muted">{relatedProjects.length ? <div className="card-grid">{relatedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <p>Mock project examples for this service will appear here.</p>}</Section><CTASection title="Understand the renovation process" description="See the path from consultation to handover." href="/process" label="Learn About Our Process" /><CTASection title="Discuss your project" description={`Request a quote for ${service.title.toLowerCase()}.`} href={`/contact?service=${service.slug}`} label="Request a Quote" /></main>;
}
