// Run against a locally running production build. No browser dependency needed.
import assert from "node:assert/strict";

const base = new URL(process.argv[2] ?? "http://127.0.0.1:3000");
assert(["localhost", "127.0.0.1", "[::1]"].includes(base.hostname), "Use a local test server");

async function read(path, expectedStatus = 200) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(15000) });
  assert.equal(response.status, expectedStatus, `${path}: HTTP status`);
  // Strip the RSC payload so checks concern the rendered HTML, not serialized data.
  const source = await response.text();
  // Next.js can deliver a dynamic not-found fallback in its RSC payload for
  // hydration. Assert status/content here; browser QA checks the resulting DOM.
  if (expectedStatus === 404) {
    assert(source.includes("Page not found"), `${path}: not-found recovery content`);
    return source;
  }
  const html = source.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  assert.equal((html.match(/<main\b/g) ?? []).length, 1, `${path}: one main landmark`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${path}: one page heading`);
  return html;
}

const pending = ["/", "/about", "/process", "/services", "/projects", "/contact", "/privacy"];
const visited = new Set();
while (pending.length) {
  const path = pending.shift();
  if (visited.has(path)) continue;
  assert(visited.size < 100, "Unexpected navigation loop or excessive routes");
  visited.add(path);
  const html = await read(path);
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (href.startsWith("/") && !href.startsWith("//")) {
      const url = new URL(href, base);
      pending.push(url.pathname + url.search);
    }
  }
}
const cards = (html) => (html.match(/<article\b[^>]*class="card project-card"/g) ?? []).length;
assert.equal(cards(await read("/projects?category=basement-renovation")), 1);
assert.equal(cards(await read("/projects?category=unknown")), cards(await read("/projects")));
assert.equal(cards(await read("/projects?category=kitchen-renovation&category=basement-renovation")), cards(await read("/projects")));

const contact = await read("/contact?project=modern-basement-richmond-hill&service=kitchen-renovation");
assert(contact.includes("Inspired by:"), "Project context reaches contact");
assert.match(contact, /<option\b(?=[^>]*value="basement-renovation")(?=[^>]*selected)[^>]*>/, "Project determines selected service");
assert.match(contact, /<input\b(?=[^>]*name="project")(?=[^>]*value="modern-basement-richmond-hill")[^>]*>/);
const invalid = await read("/contact?service=unknown&project=unknown");
assert(!invalid.includes("Inspired by:"), "Unknown project ignored");
assert(!invalid.includes("Selected service:"), "Unknown service ignored");
const repeated = await read("/contact?service=basement-renovation&service=kitchen-renovation");
assert(!repeated.includes("Selected service:"), "Ambiguous values ignored");

for (const path of ["/missing-page", "/services/missing-service", "/projects/missing-project"]) {
  const html = await read(path, 404);
  assert(html.includes("Page not found"), `${path}: not-found content`);
}
console.log(`Checked ${visited.size} linked URLs, category/quote edge cases, and 3 true HTTP 404s.`);
