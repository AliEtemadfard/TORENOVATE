import Link from "next/link";
import type { ReactNode } from "react";

import type { Project } from "@/data/projects";
import type { Service } from "@/data/services";

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
  return <article className="card"><p className="eyebrow">Service</p><h3>{service.title}</h3><p>{service.shortDescription}</p><Link href={`/services/${service.slug}`}>Explore service <span aria-hidden="true">→</span></Link></article>;
}

export function ProjectCard({ project }: { project: Project }) {
  return <article className="card project-card"><PlaceholderImage label={project.category} /><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.location}</p><Link href={`/projects/${project.slug}`}>View project <span aria-hidden="true">→</span></Link></article>;
}

export function ProcessSteps() {
  return <ol className="process-steps">{["Consultation", "Estimate", "Contract", "Construction", "Handover"].map((step, index) => <li key={step}><span>{index + 1}</span><strong>{step}</strong></li>)}</ol>;
}
