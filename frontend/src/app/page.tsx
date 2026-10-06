import Link from "next/link";

import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { CTASection, PageHero, ProcessSteps, ProjectCard, Section, ServiceCard } from "@/components/ui";

export default function HomePage() {
  return (
    <main>
      <PageHero eyebrow="General contractor / renovation company" title="Plan your renovation with one coordinated team.">
        <p className="lead">A clear, clickable prototype for exploring TORENOVATE&apos;s services, project work, process, and quote journey.</p>
        <div className="button-row"><Link className="button" href="/contact">Request a Quote</Link><Link className="button button--secondary" href="/projects">View Projects</Link></div>
      </PageHero>
      <Section title="A general contractor for connected renovation projects"><p className="lead">TORENOVATE is positioned to coordinate renovation work across the scope of your home, rather than treating each trade as a separate service.</p><Link href="/about">Learn more about TORENOVATE →</Link></Section>
      <Section title="Main services" tone="muted"><div className="card-grid card-grid--three">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></Section>
      <Section title="Featured projects"><div className="card-grid">{projects.filter((project) => project.featured).slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}</div><p className="section-link"><Link href="/projects">View all projects →</Link></p></Section>
      <Section title="Why TORENOVATE"><div className="feature-grid"><div><h3>Organized project management</h3><p>One clear renovation path from the first conversation to handover.</p></div><div><h3>Quality workmanship</h3><p>Scopes are built around durable, well-sequenced work.</p></div><div><h3>Clear communication</h3><p>The prototype makes the intended client journey easy to review.</p></div><div><h3>Full renovation capability</h3><p>Projects and services are connected rather than fragmented.</p></div></div></Section>
      <Section title="Our process" tone="muted"><ProcessSteps /><Link href="/process">View our process →</Link></Section>
      <CTASection title="Ready to start the conversation?" description="Tell us about your renovation goals and the service that best fits your project." />
    </main>
  );
}

