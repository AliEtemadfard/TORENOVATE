import Link from "next/link";
import type { ReactNode } from "react";

import type { Project, Service } from "@/types/content";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <ol>{items.map((item, index) => (
        <li key={index}>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>
      ))}</ol>
    </nav>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return <section className="page-hero"><div className="container"><p className="eyebrow">{eyebrow ?? "TORENOVATE"}</p><h1>{title}</h1>{children}</div></section>;
}

export function Section({ title, children, tone = "default" }: { title?: string; children: ReactNode; tone?: "default" | "muted" }) {
  return <section className={tone === "muted" ? "section section--muted" : "section"}><div className="container">{title && <h2>{title}</h2>}{children}</div></section>;
}

export function CTASection({ title, description, href = "/contact", label = "Request a Quote" }: { title: string; description: string; href?: string; label?: string }) {
  return <section className="section section--dark"><div className="container cta"><div><h2>{title}</h2><p>{description}</p></div><Link className="button button--light" href={href}>{label}</Link></div></section>;
}

export function PlaceholderImage({ label, tall = false }: { label: string; tall?: boolean }) {
  return <div className={tall ? "placeholder-image placeholder-image--tall" : "placeholder-image"} role="img" aria-label={`${label} placeholder`}>{label} placeholder</div>;
}

export function ServiceCard({ service }: { service: Service }) {
  return <article className="card"><p className="eyebrow">Service</p><h3><Link href={`/services/${service.slug}`}>{service.title} <span aria-hidden="true">→</span></Link></h3><p>{service.shortDescription}</p></article>;
}

export function ProjectCard({ project }: { project: Project }) {
  return <article className="card project-card"><PlaceholderImage label={project.category} /><p className="eyebrow">{project.category}</p><h3><Link href={`/projects/${project.slug}`}>{project.title} <span aria-hidden="true">→</span></Link></h3><p className="project-location">{project.location}</p><p>{project.summary}</p></article>;
}

export function ProcessSteps() {
  return <ol className="process-steps">{["Consultation", "Estimate", "Contract", "Construction", "Handover"].map((step, index) => <li key={step}><span>{index + 1}</span><strong>{step}</strong></li>)}</ol>;
}
