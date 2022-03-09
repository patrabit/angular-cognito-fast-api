from sqlmodel import SQLModel, create_engine, Session
from . import models


from functools import lru_cache
from config import Settings


@lru_cache()
def get_settings():
    return Settings()


engine = create_engine(get_settings().DATABASE_URI, echo=True)


async def get_session():
    with Session(engine) as session:
        yield session
