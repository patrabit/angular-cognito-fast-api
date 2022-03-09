from sqlmodel import select, Session
from app.models import User

async def find_user_by_cognito_id(session: Session, cognito_id: str):
    return session.exec(select(User).where(User.cognito_id == cognito_id)).first()
