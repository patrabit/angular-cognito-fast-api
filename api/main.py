from fastapi import FastAPI
from mangum import Mangum

from app.api import router as api_router

app = FastAPI()

app.include_router(api_router, prefix="/api")
handler = Mangum(app)
