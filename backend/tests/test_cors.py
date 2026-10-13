import pytest
from fastapi.testclient import TestClient

from app.core.config import Settings
from app.main import create_app


@pytest.mark.parametrize(
    ("environment", "origins", "origin", "allowed"),
    [
        ("development", [], "http://localhost:3000", True),
        ("development", [], "http://127.0.0.1:3000", True),
        ("development", [], "https://untrusted.example", False),
        ("production", [], "http://localhost:3000", False),
        ("production", ["https://torenovate.example"], "https://torenovate.example", True),
    ],
)
def test_cors_allowlist(environment, origins, origin, allowed) -> None:
    settings = Settings(_env_file=None, environment=environment, cors_origins=origins)
    with TestClient(create_app(settings)) as client:
        response = client.get("/api/v1/health", headers={"Origin": origin})
        preflight = client.options(
            "/api/v1/health",
            headers={"Origin": origin, "Access-Control-Request-Method": "GET"},
        )

    assert response.status_code == 200
    assert response.headers.get("access-control-allow-origin") == (origin if allowed else None)
    assert preflight.status_code == (200 if allowed else 400)
    assert "access-control-allow-credentials" not in response.headers
