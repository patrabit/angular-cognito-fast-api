from fastapi_cloudauth.cognito import Cognito, CognitoCurrentUser, CognitoClaims

from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from typing import Optional

from fastapi import Depends
from app.db import get_session
from app.models import User
from sqlmodel import select

from app.db import get_settings


async def auth(
    settings = get_settings()
) -> Cognito:
    cognito_auth = Cognito(
        region=settings.AWS_REGION,
        userPoolId=settings.USER_POOL_ID,
        client_id=settings.CLIENT_ID,
    )
    return cognito_auth

async def get_current_user(
    http_auth: Optional[HTTPAuthorizationCredentials] = Depends(
        HTTPBearer(auto_error=False)
    ),
    session=Depends(get_session),
    auth=Depends(auth),
) -> CognitoCurrentUser:
    auth_result = await auth(http_auth)
    return auth_result.current_user
