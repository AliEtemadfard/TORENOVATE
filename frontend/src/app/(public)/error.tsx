"use client";

import Link from "next/link";

export default function PublicError({ reset }: { reset: () => void }) {
  return (
    <div className="not-found container" role="alert">
      <h1>We couldn&apos;t load this page.</h1>
      <p>Please try again, or return to the home page.</p>
      <div className="button-row">
        <button className="button" type="button" onClick={reset}>Try again</button>
        <Link className="button button--secondary" href="/">Return Home</Link>
      </div>
    </div>
  );
}
