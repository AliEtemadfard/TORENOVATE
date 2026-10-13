import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs, CTASection, PageHero, PlaceholderImage, ProjectCard, Section } from "@/components/ui";
import { getProject, getProjectsForService, getService } from "@/lib/content";
import { quoteHref } from "@/lib/navigation";
import type { ProjectImage } from "@/types/content";

function ImageSection({ title, labels }: { title: string; labels: ProjectImage[] }) {
  if (!labels.length) return null;
  return <Section title={title} tone="muted"><div className="image-grid">{labels.map((image) => <PlaceholderImage key={image.label} label={image.label} />)}</div></Section>;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const service = getService(project.serviceSlug);
  const relatedProjects = getProjectsForService(project.serviceSlug).filter((item) => item.slug !== project.slug).slice(0, 3);
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }, { label: project.title }]} />
      <PageHero eyebrow={project.category} title={project.title}>
        <p className="lead">{project.location}</p>
        <Link className="button" href={quoteHref({ project: project.slug })}>Request a Similar Project</Link>
        <PlaceholderImage label={`${project.title} hero`} tall />
      </PageHero>
      <Section title="Project overview"><p className="lead">{project.description}</p></Section>
      <Section title="Scope of work" tone="muted"><ul className="check-list">{project.scope.map((item) => <li key={item}>{item}</li>)}</ul></Section>
      <ImageSection title="Before" labels={project.beforeImages} />
      <ImageSection title="During construction" labels={project.duringImages} />
      <ImageSection title="After" labels={project.afterImages} />
      {service && <Section title="Related service"><p className="lead">Explore the renovation scope behind this project.</p><Link className="button button--secondary" href={`/services/${service.slug}`}>{service.title}</Link></Section>}
      <Section title="Related projects" tone="muted">
        {relatedProjects.length ? <div className="card-grid">{relatedProjects.map((item) => <ProjectCard key={item.slug} project={item} />)}</div> : <p>More project examples will be added to this collection.</p>}
        <p className="section-link"><Link href="/projects">View all projects →</Link></p>
      </Section>
      <CTASection title="Request a similar project" description="Tell us which elements you would like to explore for your home." href={quoteHref({ project: project.slug })} label="Request a Similar Project" />
    </>
  );
}
