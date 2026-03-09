from pydantic import BaseModel
from typing import List, Dict, Any

class AnalysisRequest(BaseModel):
    features_path: str
    predictions_path: str
    ground_truth_path: str


class FailureSummary(BaseModel):
    primary_failure: str
    secondary_failures: List[str]
    confidence: float


class AnalysisResponse(BaseModel):
    summary: FailureSummary
    metrics: Dict[str, Any]
    explanation: str