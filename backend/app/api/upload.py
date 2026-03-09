from fastapi import APIRouter

router = APIRouter()

@router.post("/")
def upload_files():
    return {
        "message": "Files received successfully",
        "next_step": "Run analysis"
    }