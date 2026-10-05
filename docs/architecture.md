# Initial architecture

## Scope

This document describes the Phase 1, Step 1 foundation. It deliberately excludes
site content, business schemas, authentication, administration, uploads, email,
deployment infrastructure, and other later-step features.

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

## Frontend

`frontend/` uses Next.js with React, TypeScript, and the App Router. Route files
remain in `src/app`; reusable UI belongs in `src/components`; domain-oriented
frontend code belongs in `src/features`; shared non-UI code and shared types
belong in `src/lib` and `src/types` respectively. Global styles live in
`src/styles`.

No public-site or admin component hierarchy is defined yet. Those areas should
remain separate when introduced.

## Backend

`backend/app/main.py` creates the FastAPI application. Routers are composed under
`app/api`, with the current contract rooted at `/api/v1`. Configuration belongs
in `app/core`; database infrastructure belongs in `app/db`; future ORM models,
request/response schemas, and business operations have dedicated packages.

The health endpoint has no database dependency so it can report application
availability independently of PostgreSQL.

## Data layer

PostgreSQL is the planned system of record. SQLAlchemy supplies the ORM foundation,
and Alembic owns schema migrations. `app/db/base.py` defines the shared modern
declarative base, but no business tables exist in this step. A database URL is
required only when database or migration operations are invoked.

Future schema work must be introduced through Alembic revisions rather than
runtime table creation.

## Boundaries

- Do not put business logic in API route functions when services are introduced.
- Do not import backend-only secrets into frontend code.
- Do not expose non-public values through `NEXT_PUBLIC_` variables.
- Do not couple health checks to optional external services.
- Add infrastructure only when a defined feature requires it.

