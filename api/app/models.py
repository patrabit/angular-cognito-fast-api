from datetime import datetime
from email.policy import default
from sqlmodel import Field, SQLModel, Relationship
from typing import Optional, List
from sqlalchemy import (
    Column,
    ForeignKey,
)

class UserDevice(SQLModel, table=True):
    __table_name__ = 'user_device'
    recipe_right_id: int = Field(primary_key=True, nullable=None)
    user_id: int = Field(
        sa_column=Column(ForeignKey("user.user_id", ondelete="CASCADE"))
    )
    device_id: int = Field(
        sa_column=Column(ForeignKey("device.device_id", ondelete="CASCADE"))
    )

class Device(SQLModel, table=True):
    device_id: Optional[int] = Field(default=None, primary_key=True)
    device_name: str
    users: List["User"] = Relationship(
        back_populates="devices",
        link_model=UserDevice,
        sa_relationship_kwargs=dict(
            primaryjoin="device.device_id==user_device.device_id",
            secondaryjoin="user_device.user_id==user.user_id",
        ),
    )


class User(SQLModel, table=True):
    user_id: Optional[int] = Field(default=None, primary_key=True)
    cognito_id: str
    created_on: datetime = Field(default=datetime.now())

    devices: List["Device"] = Relationship(
        back_populates="users",
        link_model=UserDevice,
        sa_relationship_kwargs=dict(
            primaryjoin="device.device_id == user_device.device_id",
            secondaryjoin="user_device.user_id == user_device.user_id",
        )
    )