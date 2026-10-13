from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.router import api_router
from app.core.config import Settings, get_settings


def create_app(settings: Settings | None = None) -> FastAPI:
    settings = settings or get_settings()
    application = FastAPI(
        title=settings.app_name,
        version="0.1.0",
    )
    origins = settings.cors_origins
    if not origins and settings.environment == "development":
        origins = ["http://localhost:3000", "http://127.0.0.1:3000"]
    application.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_methods=["GET"],
        allow_headers=["Content-Type"],
        allow_credentials=False,
    )
    application.include_router(api_router, prefix=settings.api_v1_prefix)
    return application


app = create_app()
