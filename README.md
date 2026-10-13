# TORENOVATE

TORENOVATE is a custom website for a Canadian general contracting and renovation
company. The repository contains a clickable public website prototype and the
FastAPI/PostgreSQL foundation. The public routes, service/project relationships,
and quote journey can be reviewed now. Project records and images are illustrative;
the quote form does not send or save information. Business APIs and the admin
dashboard will be implemented in explicitly scoped steps.

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

Dependencies are installed locally and are not committed to the repository.

### Backend environment

The root `environment.yml` is the canonical backend development environment. It
installs the backend in editable mode and disables Python's per-user package
directory so packages under `%APPDATA%\Python` cannot override the Conda
environment.

Create the environment once from the repository root:

```powershell
Set-Location 'F:\ali\work\torenovate\codebase'
conda env create --file environment.yml
conda env config vars set --name torenovate PYTHONNOUSERSITE=1
conda activate torenovate
Set-Location .\backend
Copy-Item .env.example .env
```

Update backend Python dependencies in an existing environment from the root:

```powershell
Set-Location 'F:\ali\work\torenovate\codebase'
conda env config vars set --name torenovate PYTHONNOUSERSITE=1
conda deactivate
conda activate torenovate
python -m pip install --upgrade -e "backend[dev]"
python -m pip check
```

The explicit `conda env config vars` command repairs pre-existing environments.
The deactivate/activate cycle applies it to the terminal before pip runs, so pip
cannot consider packages from User Site. Use `environment.yml` for creating the
environment; reinstall the editable package when `pyproject.toml` changes.

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
Set-Location 'F:\ali\work\torenovate\codebase\frontend'
Copy-Item .env.example .env.local
npm ci
npm run dev
```

The public prototype is available at `http://localhost:3000`. Node.js must satisfy
`frontend/package.json` (at least 20.9). `npm ci` uses the committed package lock.

### Focused checks

```powershell
conda activate torenovate
Set-Location 'F:\ali\work\torenovate\codebase\backend'
python -m pytest
python -m ruff check app tests alembic

Set-Location '..\frontend'
npm run lint
npm run build
npm run typecheck
npm run start
```

With the frontend running, use another terminal to check linked routes and query
edge cases:

```powershell
Set-Location 'F:\ali\work\torenovate\codebase\frontend'
npm run check:routes
```

See [docs/architecture.md](docs/architecture.md) for boundaries and decisions.
See [docs/foundation-review.md](docs/foundation-review.md) for this review's
findings, completed fixes, and decisions needed before production functionality.

