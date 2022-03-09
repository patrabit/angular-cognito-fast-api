from typing import Optional
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from app.db import get_session
from app.core.auth import get_current_user, CognitoClaims
from sqlmodel import select, Session
from app.models import User, Device

router = APIRouter()

async def find_user_by_cognito_id(session, cognito_id):
    return session.exec(select(User).where(User.cognito_id == cognito_id)).first()



@router.get("", response_model=list[Device])
async def get_user_devices(session = Depends(get_session), current_user = Depends(get_current_user)):
    user = find_user_by_cognito_id(session, current_user.sub)
    return user.devices
