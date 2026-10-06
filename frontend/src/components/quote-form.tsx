"use client";

import { FormEvent, useState } from "react";

import { services } from "@/data/services";

export function QuoteForm({ selectedService }: { selectedService?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };
  if (submitted) return <div className="success-message" role="status"><h2>Thanks for sharing your project.</h2><p>This prototype does not send or store form information. In the final site, this is where a confirmation and follow-up workflow will appear.</p></div>;
  return <form className="quote-form" onSubmit={submit}><label>Name<input name="name" required autoComplete="name" /></label><label>Email<input name="email" type="email" required autoComplete="email" /></label><label>Phone<input name="phone" type="tel" autoComplete="tel" /></label><label>Project Location<input name="location" /></label><label>Project Type<select name="service" defaultValue={selectedService && services.some((service) => service.slug === selectedService) ? selectedService : ""}><option value="">Select a service</option>{services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}</select></label><label>Expected Timing<select name="timing" defaultValue=""><option value="">Select timing</option><option>Planning / exploring</option><option>Within 3 months</option><option>Within 6 months</option><option>More than 6 months</option></select></label><label className="form-field--full">Project Description<textarea name="description" rows={5} /></label><label className="form-field--full">Budget / Budget Range<input name="budget" placeholder="For example: $50,000–$75,000" /></label><div className="form-field--full"><button className="button" type="submit">Send Prototype Request</button></div></form>;
}
