# Application architecture

## Scope

The current implementation consists of the public information-architecture
prototype and the backend foundation. It has no persisted business data,
authentication, admin dashboard, uploads, or email delivery. The public route
specification remains in `TORENOVATE_INFORMATION_ARCHITECTURE.md`.

## Runtime relationship

```text
Browser
  -> Next.js frontend
  -> FastAPI API (/api/v1)
  -> PostgreSQL
```

The frontend and backend are separate applications and can be developed or
deployed independently. Browser-facing environment variables use Next.js's
`NEXT_PUBLIC_` convention. Backend configuration is loaded from environment
variables through Pydantic Settings.

The root `environment.yml` is the canonical backend development environment.
It installs `backend/` in editable mode and declares `PYTHONNOUSERSITE=1` to
exclude Python's per-user package directory. Existing environments must also set
that variable through `conda env config vars`. Use `python -m ...` commands to
bind tools to the environment's interpreter; see the verified update workflow in
the README. This does not isolate arbitrary `PYTHONPATH` overrides.

## Frontend

`frontend/` uses Next.js, React, TypeScript, and the App Router. `src/app/layout.tsx`
owns only the document and shared styles. Routes under `src/app/(public)` share
the public header, footer, and main landmark; the group does not change URLs.
Future `/admin` routes can have an independent layout outside this group.

Reusable UI belongs in `src/components`; feature-oriented code belongs in
`src/features`; non-UI helpers and public view types belong in `src/lib` and
`src/types`. `src/lib/content.ts` is the current content access boundary. Only
this module imports the mock service/project collections; interactive components
receive the minimal props they need. Replace its source with FastAPI reads when
the API contract is agreed. The TypeScript view types are not database schemas.

`/projects?category=<service-slug>` filters on the server with normal navigable
links. Invalid or repeated query values fall back to all projects. Quote URLs
support both `service` and `project`; a valid project takes precedence and supplies
its service. Invalid values are ignored. Unknown detail slugs return HTTP 404.
Public route errors offer retry/home navigation without exposing exception text.

## Backend

`backend/app/main.py` creates the FastAPI application. Routers are composed under
`app/api`, with the current contract rooted at `/api/v1`. Configuration belongs
in `app/core`; database infrastructure belongs in `app/db`; future ORM models,
request/response schemas, and business operations have dedicated packages.

The health endpoint has no database dependency so it can report application
availability independently of PostgreSQL.

CORS permits GET requests from `localhost:3000` and `127.0.0.1:3000` by default
only in development. Other environments must set the JSON array `CORS_ORIGINS`
explicitly. Credentials are disabled; future write/auth endpoints must define
their methods, origins, and credential/CSRF policy when implemented. The
`/api/v1` prefix is fixed in settings.

## Data layer

PostgreSQL is the planned system of record. SQLAlchemy supplies the ORM foundation,
and Alembic owns schema migrations. `app/db/base.py` defines the shared modern
declarative base, but no business tables exist in this step. A database URL is
required only when database or migration operations are invoked.

Future schema work must be introduced through Alembic revisions rather than
runtime table creation.

SQLAlchemy uses a synchronous, lazily created engine with `pool_pre_ping`.
Future synchronous DB work should run in synchronous FastAPI routes/dependencies
or otherwise off the event loop. A request-scoped session and transaction policy
must be added alongside the first database feature; no shared global Session.

`app/models/__init__.py` is the model registration point imported by Alembic.
Import future mapped classes there so autogenerate sees them. Shared metadata
defines deterministic constraint names; explicitly name check constraints.
Alembic can locate the backend from its config path, independent of the shell's
working directory. No revision or table exists yet.

## Boundaries

- Do not put business logic in API route functions when services are introduced.
- Do not import backend-only secrets into frontend code.
- Do not expose non-public values through `NEXT_PUBLIC_` variables.
- Do not couple health checks to optional external services.
- Add infrastructure only when a defined feature requires it.

