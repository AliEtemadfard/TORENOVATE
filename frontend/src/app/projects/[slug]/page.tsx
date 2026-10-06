import Link from "next/link";
import { notFound } from "next/navigation";

import { getProject, projects } from "@/data/projects";
import { getService } from "@/data/services";
import { CTASection, PageHero, PlaceholderImage, ProjectCard, Section } from "@/components/ui";

function ImageSection({ title, labels }: { title: string; labels: { label: string }[] }) {
  return <Section title={title} tone="muted"><div className="image-grid">{labels.map((image) => <PlaceholderImage key={image.label} label={image.label} />)}</div></Section>;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const service = getService(project.serviceSlug);
  const relatedProjects = projects.filter((item) => item.serviceSlug === project.serviceSlug && item.slug !== project.slug).slice(0, 3);
  return <main><PageHero eyebrow={project.category} title={project.title}><p className="lead">{project.location}</p><PlaceholderImage label={`${project.title} hero`} tall /></PageHero><Section title="Project overview"><p className="lead">{project.description}</p></Section><Section title="Scope of work" tone="muted"><ul className="check-list">{project.scope.map((item) => <li key={item}>{item}</li>)}</ul></Section><ImageSection title="Before" labels={project.beforeImages} /><ImageSection title="During construction" labels={project.duringImages} /><ImageSection title="After" labels={project.afterImages} /><Section title="Related service"><p className="lead">This project is connected to the {service?.title ?? "service"} prototype page.</p>{service && <Link className="button button--secondary" href={`/services/${service.slug}`}>Explore {service.title}</Link>}</Section><Section title="Related projects" tone="muted">{relatedProjects.length ? <div className="card-grid">{relatedProjects.map((item) => <ProjectCard key={item.slug} project={item} />)}</div> : <p>Explore the full portfolio for more mock project examples.</p>}</Section><CTASection title="Request a similar project" description="Use this prototype form to describe a renovation like this one." href={`/contact?project=${project.slug}`} label="Request a Similar Project" /></main>;
}
