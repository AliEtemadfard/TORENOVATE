import { ProjectBrowser } from "@/components/project-browser";
import { CTASection, PageHero, Section } from "@/components/ui";

export default function ProjectsPage() {
  return <main><PageHero title="Project portfolio"><p className="lead">Mock renovation projects make the planned service-to-project relationships easy to review.</p></PageHero><Section title="Browse project categories" tone="muted"><Suspense fallback={<p>Loading project categories…</p>}><ProjectBrowser /></Suspense></Section><CTASection title="Planning something similar?" description="Request a quote to start discussing your renovation." /></main>;
}
import { Suspense } from "react";

