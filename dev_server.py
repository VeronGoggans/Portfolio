from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Setting up a FRONT-END page for the API
app.mount("/", StaticFiles(directory=".", html=True), name="static")