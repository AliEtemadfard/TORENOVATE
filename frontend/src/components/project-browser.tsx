import Link from "next/link";

import { ProjectCard } from "@/components/ui";
import type { Project, Service } from "@/types/content";

export function ProjectBrowser({ projects, services, category }: {
  projects: Project[];
  services: Service[];
  category?: string;
}) {
  const validCategory = services.some((service) => service.slug === category);
  const selected = validCategory ? category : undefined;
  const shownProjects = selected ? projects.filter((project) => project.serviceSlug === selected) : projects;
  const filters = [{ slug: "", title: "All projects" }, ...services];

  return (
    <>
      <nav className="filter-bar" aria-label="Project categories">
        {filters.map(({ slug, title }) => (
          <Link
            key={slug}
            className={!selected && !slug || selected === slug ? "filter-button filter-button--active" : "filter-button"}
            aria-current={!selected && !slug || selected === slug ? "true" : undefined}
            href={slug ? `/projects?category=${encodeURIComponent(slug)}` : "/projects"}
            scroll={false}
          >{title}</Link>
        ))}
      </nav>
      {category && !validCategory && category !== "all" && <p className="context-note">Category not found. Showing all projects.</p>}
      <p className="results-count">{shownProjects.length} {shownProjects.length === 1 ? "project" : "projects"}</p>
      {shownProjects.length ? (
        <div className="card-grid">{shownProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      ) : (
        <div className="context-note"><p>Project examples for this service will be added here.</p><Link href="/projects">Browse all projects</Link></div>
      )}
    </>
  );
}
