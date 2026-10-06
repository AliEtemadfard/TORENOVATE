"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Our Process", "/process"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>TORENOVATE</Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          Menu
        </button>
        <nav className={open ? "site-nav site-nav--open" : "site-nav"} id="main-navigation" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="button button--small" href="/contact" onClick={() => setOpen(false)}>Request a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
