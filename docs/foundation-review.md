# Public website and foundation review

The current stack is appropriate for the agreed public site, portfolio, quote
workflow, and later custom admin. No stack replacement or extra infrastructure
is required for that scope. This is a pre-design prototype, not a production
readiness certification.

## Implemented improvements

- Public route group separates the website shell from future admin layouts while
  preserving all public URLs and the shared service/project detail templates.
- Detail pages have breadcrumbs, an early quote action, and a usable route back
  to the collection, including when there are no related projects.
- Quote links preserve service and project context. A valid project selects its
  own service; unknown/repeated query values cannot leak into form context.
- Portfolio filtering uses server-rendered links, supports browser history and
  no-JavaScript navigation, and handles invalid/empty categories deliberately.
- Active navigation, skip link, keyboard focus, Escape/blur handling for the mobile
  menu, tablet grids, touch targets, and reduced-motion preferences are covered.
- Content reads and view types are separated from fixtures and client components.
- Preview form feedback explicitly states that nothing was sent/saved and keeps
  the entered form visible. Mock projects remain identified as illustrative.
- FastAPI has an environment-based CORS allowlist for the frontend and fixed v1
  routing. Tests cover allowed/disallowed origins and database-independent health.
- Alembic imports the future model registry and uses deterministic constraint names.
- README describes the current prototype, package-lock installation, and correct
  Conda dependency-update workflow; typecheck generates route types first and
  generated Next.js type files/caches are excluded from version control.

## Route contract

| Route | Responsibility |
| --- | --- |
| `/` | Positioning, services, featured work, process, quote action |
| `/services` | Main service hub; smaller trades remain scope items |
| `/services/[slug]` | One reusable service template with related projects |
| `/projects?category=<service-slug>` | Portfolio and shareable filters |
| `/projects/[slug]` | Work scope, staged galleries, related service, quote context |
| `/about`, `/process` | Trust and explanation, with links back to work and contact |
| `/contact?service=...` or `?project=...` | Quote entry with validated context |
| `/privacy` | Placeholder for approved privacy content |
| Unknown paths/slugs | HTTP 404 with recovery navigation |

The existing page set is sufficient for the agreed scope. No blog, extra trade
pages, or customer portal is needed at this stage.

## Decisions for subsequent steps

1. Confirm real services, service area, company claims, contact details, and usable
   project photography before final copy and visual design. Never publish mock
   portfolio projects as completed work.
2. Agree business schemas separately. Use stable IDs for stored relationships;
   slugs serve public URLs. Decide whether projects need one or multiple services,
   how slug changes redirect, and how drafts/publishing work before migrations.
3. Define image records, ordering, alt text, before/during/after grouping, and
   object-storage ownership with the media feature. Do not store image bytes in
   PostgreSQL or rely on deployment-local uploads.
4. Define the quote workflow (storage, notification, retries/deduplication,
   validation, spam controls, and retention) before making the form operational.
   API validation remains authoritative even with browser validation.
5. Define admin roles, authentication, session/CSRF strategy, and authorization on
   FastAPI before any protected CRUD. An isolated layout is not access control.
6. At API integration, choose server-side API reads and cache invalidation for
   published content. Keep secrets server-side; `NEXT_PUBLIC_` values are public.
   Add request-scoped database sessions and transaction cleanup with the first
   database endpoint, then verify migrations against disposable PostgreSQL.
7. Before launch, verify legal/privacy content, real submission delivery, image
   optimization, metadata/SEO, dependency versions, HTTPS, backups and restore,
   logging, and the production environment. These remain later milestones.

## Verification boundary

Frontend build/type/lint and a local HTTP route crawl cover rendered navigation,
query edge cases, and genuine not-found responses. Browser checks cover the
public interaction flow and responsive layout. Backend checks cover health and
CORS plus offline migration configuration. PostgreSQL connectivity, real
migrations, authentication, uploads, and email are not verified because those
features are not implemented in this step.

Verified in this review:

- `npm run build`, `npm run lint`, and `npm run typecheck` passed.
- `npm run check:routes` checked 37 linked URLs, category and quote edge cases,
  and three actual HTTP 404 responses.
- A local headless Edge test checked nine pages at 390, 768, and 1280px (27
  layouts), with no horizontal overflow or duplicate main/header/footer layouts.
  It also passed menu Escape/focus, client navigation, filter history,
  no-JavaScript filtering, project quote context, and local-only form feedback.
- Dynamic detail 404s were checked after browser hydration as well as by HTTP
  status; Next.js can deliver their fallback UI through its RSC payload.
- A real browser request from the frontend origin to `/api/v1/health` succeeded
  through CORS using a process-local test origin setting.
- Six backend tests, Ruff lint, changed-file formatting, `pip check`, backend
  wheel build, and Alembic offline SQL generation passed. No database was needed.
- `npm audit --omit=dev --audit-level=high` reported zero known runtime dependency
  vulnerabilities at review time; it is not a guarantee against unknown issues.
