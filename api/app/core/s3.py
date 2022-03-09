
import boto3
from botocore.client import BaseClient
from botocore.exceptions import ClientError
from fastapi import Depends

from app.db import get_settings


async def s3_client(
    settings: get_settings = Depends(get_settings),
) -> BaseClient:
    return boto3.client(
        service_name='s3',
        aws_access_key_id='test',
        aws_secret_access_key='test',
        endpoint_url='http://localhost:4566/',
        config=boto3.session.Config(
            signature_version="s3v4",
            retries={"max_attempts": 0},
            s3={"adressing_style": "path"},
        )
    )  # Use LocalStack Endpoint