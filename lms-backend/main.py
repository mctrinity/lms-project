from fastapi import FastAPI
from api import courses

app = FastAPI(
    title="LMS API",
    description="Backend for the Learning Management System (LMS)",
    version="1.0.0",
    docs_url="/docs",  # Default Swagger UI path
    redoc_url="/redoc",  # Default ReDoc UI path
    openapi_url="/openapi.json",  # OpenAPI JSON schema
)

@app.get("/")
def home():
    return {"message": "Welcome to the LMS Backend"}

# Include API routes
app.include_router(courses.router, prefix="/api")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
