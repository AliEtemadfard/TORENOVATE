import { ProjectBrowser } from "@/components/project-browser";
import { CTASection, PageHero, Section } from "@/components/ui";
import { getProjects, getServices } from "@/lib/content";
import { getQueryValue } from "@/lib/navigation";
import type { SearchParams } from "@/types/content";

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  return (
    <>
      <PageHero title="Project portfolio"><p className="lead">Explore renovation scopes and the services behind each project.</p><p>These illustrative projects will be replaced with real TORENOVATE work before launch.</p></PageHero>
      <Section title="Browse project categories" tone="muted">
        <ProjectBrowser projects={getProjects()} services={getServices()} category={getQueryValue(params.category)} />
      </Section>
      <CTASection title="Planning something similar?" description="Request a quote to start discussing your renovation." />
    </>
  );
}
