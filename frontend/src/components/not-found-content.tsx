import Link from "next/link";

export function NotFoundContent() {
  return (
    <div className="not-found container">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="lead">The page or project you are looking for could not be found.</p>
      <div className="button-row">
        <Link className="button" href="/">Return Home</Link>
        <Link className="button button--secondary" href="/projects">View Projects</Link>
      </div>
    </div>
  );
}
