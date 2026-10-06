import { QuoteForm } from "@/components/quote-form";
import { PageHero, Section } from "@/components/ui";

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  return <main><PageHero title="Request a quote"><p className="lead">Share a few details about your renovation. This form is a local-only prototype.</p></PageHero><Section title="Start the conversation"><div className="contact-layout"><div><h3>Business contact information</h3><p>Contact details will be added during a later content and design phase.</p><p>For now, use the prototype form to test the request journey.</p>{service && <p className="context-note">Service context selected: <strong>{service}</strong></p>}</div><div><h3>Quote request form</h3><QuoteForm selectedService={service} /></div></div></Section></main>;
}
