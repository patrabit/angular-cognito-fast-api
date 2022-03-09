from sqlmodel import SQLModel, create_engine, Session
from app.db import get_settings

engine = create_engine(get_settings().DATABASE_URI, echo=True)

SQLModel.metadata.drop_all(engine)
SQLModel.metadata.create_all(engine)

with Session(engine) as session:
    session.commit()
