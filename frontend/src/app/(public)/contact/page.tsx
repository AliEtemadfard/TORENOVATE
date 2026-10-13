import Link from "next/link";

import { QuoteForm } from "@/components/quote-form";
import { PageHero, Section } from "@/components/ui";
import { getProject, getService, getServices } from "@/lib/content";
import { getQueryValue } from "@/lib/navigation";
import type { SearchParams } from "@/types/content";

export default async function ContactPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const project = getProject(getQueryValue(params.project) ?? "");
  // A selected project determines its own service if both query values exist.
  const service = getService(project?.serviceSlug ?? getQueryValue(params.service) ?? "");

  return (
    <>
      <PageHero title="Request a quote">
        <p className="lead">Share a few details about your renovation.</p>
        <p>This preview form does not send or save information.</p>
      </PageHero>
      <Section title="Start the conversation">
        <div className="contact-layout">
          <div>
            <h3>Your renovation plans</h3>
            <p>Tell us what you would like to change, where the project is located, and when you hope to get started.</p>
            {project && <p className="context-note">Inspired by: <Link href={`/projects/${project.slug}`}>{project.title}</Link></p>}
            {service && <p className="context-note">Selected service: <strong>{service.title}</strong></p>}
            <p><Link href="/services">Explore services</Link> · <Link href="/process">See our process</Link></p>
            <p>Verified business contact details will be added before launch.</p>
          </div>
          <div>
            <h3>Quote request form</h3>
            <QuoteForm
              key={`${service?.slug ?? ""}:${project?.slug ?? ""}`}
              services={getServices().map(({ slug, title }) => ({ slug, title }))}
              selectedService={service?.slug}
              selectedProject={project?.slug}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
