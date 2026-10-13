// Server-side content access. Replace this source with FastAPI reads when the
// API contract is agreed; keep mock records out of interactive components.
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export function getServices() {
  return services;
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getProjects() {
  return projects;
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsForService(serviceSlug: string) {
  return projects.filter((project) => project.serviceSlug === serviceSlug);
}
