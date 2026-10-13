// Public view types. These are not the future database schema.
export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  includes: string[];
  capabilities: string[];
};

export type ProjectImage = { label: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  serviceSlug: string;
  location: string;
  summary: string;
  description: string;
  scope: string[];
  featured: boolean;
  beforeImages: ProjectImage[];
  duringImages: ProjectImage[];
  afterImages: ProjectImage[];
};

export type SearchParams = Record<string, string | string[] | undefined>;
