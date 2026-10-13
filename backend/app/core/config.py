from functools import lru_cache
from pathlib import Path
from typing import Literal

from pydantic_settings import BaseSettings, SettingsConfigDict

BACKEND_DIR = Path(__file__).resolve().parents[2]


class Settings(BaseSettings):
    app_name: str = "TORENOVATE API"
    environment: Literal["development", "test", "staging", "production"] = "development"
    api_v1_prefix: Literal["/api/v1"] = "/api/v1"
    database_url: str | None = None
    cors_origins: list[str] = []

    model_config = SettingsConfigDict(
        env_file=BACKEND_DIR / ".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()
