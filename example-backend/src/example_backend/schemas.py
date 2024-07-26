from pydantic import BaseModel


class Person(BaseModel):
    name: str
    age: float
    weight: float | None = None
