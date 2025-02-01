from fastapi import FastAPI
from api import courses

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Welcome to the LMS Backend"}

# Include API routes
app.include_router(courses.router, prefix="/api")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
