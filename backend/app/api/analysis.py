from fastapi import APIRouter, UploadFile, File
import pandas as pd
from io import BytesIO

from app.analysis.diagnosis import run_diagnosis

router = APIRouter()


@router.post("/")
async def analyze(file: UploadFile = File(...)):

    contents = await file.read()

    df = pd.read_csv(BytesIO(contents))

    result = run_diagnosis(df)

    return result