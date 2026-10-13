import type { SearchParams } from "@/types/content";

// Ignore repeated/ambiguous query values instead of treating arrays as slugs.
export function getQueryValue(value: SearchParams[string]) {
  return typeof value === "string" ? value : undefined;
}

export function quoteHref(context: { service?: string; project?: string } = {}) {
  const params = new URLSearchParams();
  if (context.service) params.set("service", context.service);
  if (context.project) params.set("project", context.project);
  return params.size ? `/contact?${params.toString()}` : "/contact";
}
