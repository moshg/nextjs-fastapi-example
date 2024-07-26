from example_backend.schemas import Person
from fastapi import FastAPI

app = FastAPI()

db: Person | None = None


@app.get("/me")
def get_person() -> Person | None:
    return db


@app.post("/me")
def upsert_person(person: Person) -> Person:
    # we need `global db` to modify the global variable `db`
    global db
    db = person
    return db
