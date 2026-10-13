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

### Backend environment

The root `environment.yml` is the canonical backend development environment. It
installs the backend in editable mode and disables Python's per-user package
directory so packages under `%APPDATA%\Python` cannot override the Conda
environment.

Create the environment once from the repository root:

```powershell
Set-Location 'F:\ali\work\torenovate\codebase'
conda env create --file environment.yml
conda activate torenovate
Set-Location .\backend
Copy-Item .env.example .env
```

Update an existing environment after dependency changes:

```powershell
Set-Location 'F:\ali\work\torenovate\codebase'
conda env update --file environment.yml
conda env config vars set --name torenovate PYTHONNOUSERSITE=1
conda deactivate
conda activate torenovate
```

The explicit `conda env config vars` command repairs pre-existing environments
created before `environment.yml` was added. The deactivate/activate cycle then
applies the environment variable to the current terminal.

For normal development after the one-time setup:

```powershell
conda activate torenovate
Set-Location 'F:\ali\work\torenovate\codebase\backend'
python -m uvicorn app.main:app --reload
```

Always use `python -m pip` and `python -m uvicorn` instead of bare `pip` or
`uvicorn` commands. This guarantees that the command uses the active Conda
environment's Python interpreter. The health endpoint is available at
`http://localhost:8000/api/v1/health`.

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

