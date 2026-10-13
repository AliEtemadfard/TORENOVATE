"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const links = [
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Our Process", "/process"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  return <Navigation key={pathname} pathname={pathname} />;
}

function Navigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="site-header__inner container">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>TORENOVATE</Link>
        <button ref={menuButton} className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close menu" : "Menu"}
        </button>
        <nav className={open ? "site-nav site-nav--open" : "site-nav"} id="main-navigation" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : pathname.startsWith(`${href}/`) ? "location" : undefined} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link className="button button--small" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>Request a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
