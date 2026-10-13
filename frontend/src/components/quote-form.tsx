"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import type { Service } from "@/types/content";

export function QuoteForm({ services, selectedService, selectedProject }: {
  services: Pick<Service, "slug" | "title">[];
  selectedService?: string;
  selectedProject?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <p id="quote-preview-note">Preview only. No request will be sent and no information is saved.</p>
      {submitted && <p className="success-message" role="status">Preview complete. Your request has not been sent. You can continue editing below.</p>}
      <form className="quote-form" onSubmit={submit} aria-describedby="quote-preview-note">
        {selectedProject && <input type="hidden" name="project" value={selectedProject} />}
        <label>Name<input name="name" required autoComplete="name" maxLength={120} /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" maxLength={254} /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
        <label>Project Location<input name="location" maxLength={200} /></label>
        <label>Project Type
          <select name="service" defaultValue={selectedService ?? ""}>
            <option value="">Select a service</option>
            {services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
          </select>
        </label>
        <label>Expected Timing
          <select name="timing" defaultValue="">
            <option value="">Select timing</option>
            <option>Planning / exploring</option><option>Within 3 months</option>
            <option>Within 6 months</option><option>More than 6 months</option>
          </select>
        </label>
        <label className="form-field--full">Project Description<textarea name="description" rows={5} maxLength={5000} /></label>
        <label className="form-field--full">Budget / Budget Range<input name="budget" maxLength={120} placeholder="For example: $50,000–$75,000" /></label>
        <div className="form-field--full"><button className="button" type="submit">Preview request</button></div>
      </form>
    </>
  );
}
