import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { CTASection, PageHero, ProjectCard, Section, ServiceCard } from "@/components/ui";

export default function ServicesPage() {
  return <main><PageHero title="Renovation services designed around the whole project"><p className="lead">Explore the primary renovation scopes TORENOVATE can coordinate.</p></PageHero><Section title="General contractor approach"><p className="lead">Whether your project is a focused update or a broader renovation, the work is organized as a connected construction process.</p></Section><Section title="Main services" tone="muted"><div className="card-grid card-grid--three">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></Section><Section title="Recent project examples"><div className="card-grid">{projects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}</div></Section><CTASection title="Have a renovation in mind?" description="Request a quote to begin a project conversation." /></main>;
}
