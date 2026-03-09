import pandas as pd

from app.analysis.confidence import (
    compute_calibration_error,
    calibration_curve_data
)

from app.analysis.errors import compute_error_distribution
from app.analysis.drift import detect_feature_drift
from app.llm.explain import generate_explanation
def run_diagnosis(predictions_df):

    # --- Validate required columns ---
    required_cols = ["prediction", "ground_truth"]
    for col in required_cols:
        if col not in predictions_df.columns:
            raise ValueError(f"CSV must contain column: {col}")

    # --- Create correct column ---
    predictions_df["correct"] = (
        predictions_df["prediction"] == predictions_df["ground_truth"]
    ).astype(int)

    # --- Calibration error ---
    ece = compute_calibration_error(predictions_df)

    # --- Calibration curve ---
    curve = calibration_curve_data(predictions_df)

    # --- Drift detection ---
    drift_data = detect_feature_drift(predictions_df)

    # --- Error distribution ---
    error_data = compute_error_distribution(predictions_df)

    # --- Model health score ---
    health_score = int(
        (predictions_df["correct"].mean() * 100) - (ece * 50)
    )

    # --- Primary failure ---
    if ece > 0.1:
        primary_failure = "Calibration Failure"
    else:
        primary_failure = "No major calibration issue"

    # --- AI explanation ---
    explanation = generate_explanation({
        "primary_failure": primary_failure,
        "accuracy": float(predictions_df["correct"].mean()),
        "confidence_gap": float(ece)
    })

    # --- Final result ---
    return {
        "primary_failure": primary_failure,
        "secondary": [],
        "accuracy": float(predictions_df["correct"].mean()),
        "confidence_gap": float(ece),
        "error_distribution": error_data,
        "calibration_curve": curve,
        "feature_drift": drift_data,
        "explanation": explanation,
        "health_score": health_score
    }