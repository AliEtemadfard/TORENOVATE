# TORENOVATE

TORENOVATE is a custom website for a Canadian general contracting and renovation
company. This repository currently contains the Phase 1, Step 1 foundation only;
public pages, business data, and administration features will be added in later,
explicitly scoped steps.

## Repository structure

```text
frontend/  Next.js, React, TypeScript, and the App Router
backend/   FastAPI, settings, API versioning, and database infrastructure
docs/      Architecture and project decisions
```

The applications run independently during development. The browser loads the
Next.js frontend, which will call the versioned FastAPI API under `/api/v1`.
FastAPI will use PostgreSQL through SQLAlchemy and Alembic once business models
are defined in Step 2.

```text
Browser -> Next.js frontend -> FastAPI /api/v1 -> PostgreSQL
```

## Local development

No dependencies are vendored or installed by this foundation.

### Backend

From PowerShell:

```powershell
conda create -n torenovate python=3.12 -y
conda activate torenovate
Set-Location backend
python -m pip install -e ".[dev]"
Copy-Item .env.example .env
uvicorn app.main:app --reload
```

The health endpoint is available at `http://localhost:8000/api/v1/health`.

### Frontend

In a second PowerShell terminal:

```powershell
Set-Location frontend
Copy-Item .env.example .env.local
npm install
npm run dev
```

The placeholder application is available at `http://localhost:3000`.

See [docs/architecture.md](docs/architecture.md) for boundaries and decisions.

