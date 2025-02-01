from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.config import get_db
from models.course import Course

router = APIRouter()

@router.get("/courses")
def get_courses(db: Session = Depends(get_db)):
    return db.query(Course).all()
