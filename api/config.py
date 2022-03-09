from pydantic import BaseSettings


class Settings(BaseSettings):
    DATABASE_URI: str
    AWS_REGION: str
    USER_POOL_ID: str
    CLIENT_ID: str

    class Config:
        env_file = "../src/environments/.env"
