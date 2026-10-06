"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui";

const filters = [
  ["all", "All"],
  ["general-contracting", "Full Home / General Contracting"],
  ["basement-renovation", "Basement"],
  ["bathroom-renovation", "Bathroom"],
  ["kitchen-renovation", "Kitchen"],
  ["interior-renovation", "Interior"],
  ["exterior-decks", "Exterior / Decks"],
] as const;

export function ProjectBrowser() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const selected = searchParams.get("category") ?? "all";
  const shownProjects = selected === "all" ? projects : projects.filter((project) => project.categorySlug === selected);
  const select = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") params.delete("category"); else params.set("category", category);
    router.replace(params.size ? `${pathname}?${params.toString()}` : pathname, { scroll: false });
  };
  return <><div className="filter-bar" aria-label="Project categories">{filters.map(([value, label]) => <button type="button" className={selected === value ? "filter-button filter-button--active" : "filter-button"} onClick={() => select(value)} key={value}>{label}</button>)}</div><div className="card-grid">{shownProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></>;
}
