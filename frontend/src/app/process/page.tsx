import Link from "next/link";

import { projects } from "@/data/projects";
import { CTASection, PageHero, ProcessSteps, ProjectCard, Section } from "@/components/ui";

const details = [
  ["Consultation", "Discuss goals, current conditions, priorities, and the intended scope."],
  ["Estimate", "Review a clear preliminary project scope and budget direction."],
  ["Contract", "Confirm the agreed scope, schedule approach, and next steps."],
  ["Construction", "Coordinate the renovation work, trades, and site progress."],
  ["Handover", "Review the completed work and transition the space back to you."],
];

export default function ProcessPage() {
  return <main><PageHero title="Our process"><p className="lead">A simple path from the first conversation to a completed renovation.</p></PageHero><Section title="The renovation journey"><ProcessSteps /></Section><Section title="What each step means" tone="muted"><div className="feature-grid">{details.map(([title, description]) => <div key={title}><h3>{title}</h3><p>{description}</p></div>)}</div></Section><Section title="Project examples"><div className="card-grid">{projects.slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}</div><p className="section-link"><Link href="/projects">View all projects →</Link></p></Section><CTASection title="Start your project" description="Tell us what you are planning and we will use this prototype to map your first step." /></main>;
}
