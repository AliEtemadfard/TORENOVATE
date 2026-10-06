import Link from "next/link";

import { services } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><Link className="wordmark" href="/">TORENOVATE</Link><p>Public website information architecture prototype.</p></div>
        <div><h2>Company</h2><Link href="/about">About</Link><Link href="/process">Our Process</Link></div>
        <div><h2>Services</h2>{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}</div>
        <div><h2>Portfolio</h2><Link href="/projects">Projects</Link><h2>Contact</h2><Link href="/contact">Request a Quote</Link></div>
        <div><h2>Legal</h2><Link href="/privacy">Privacy Policy</Link></div>
      </div>
    </footer>
  );
}
