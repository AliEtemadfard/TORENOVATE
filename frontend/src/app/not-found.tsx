import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><div className="container"><p className="eyebrow">404</p><h1>Page not found</h1><p className="lead">The page or project you are looking for is not part of this prototype.</p><div className="button-row"><Link className="button" href="/">Return Home</Link><Link className="button button--secondary" href="/projects">View Projects</Link></div></div></main>;
}
