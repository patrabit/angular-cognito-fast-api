from fastapi import APIRouter

from .endpoints import devices

router = APIRouter()
router.include_router(devices.router, prefix="/devices", tags=["Devices"])
