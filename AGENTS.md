# TORENOVATE Agent Guidance

Future implementation is incremental and must follow explicitly defined steps.

- Inspect existing code and documentation before modifying the repository.
- Keep frontend and backend concerns separated under their existing directories.
- Do not implement later-phase features unless the current request explicitly includes them.
- Prefer clear, maintainable code over clever abstractions.
- Avoid unnecessary dependencies and infrastructure.
- Reuse existing components, utilities, schemas, and services instead of duplicating them.
- Never commit secrets. Document required variables in the relevant `.env.example` file.
- Preserve API versioning; public backend endpoints belong under `/api/v1` unless an explicit architectural decision changes it.
- Keep public website logic separate from future admin functionality.
- Do not create business database models before their schema is explicitly defined.
- Update `README.md` and `docs/architecture.md` when architectural decisions or developer workflows change.
- Keep tests focused on behavior introduced by the current step.

