import numpy as np

def compute_calibration_error(predictions_df):

    if "confidence" not in predictions_df.columns:
        predictions_df["confidence"] = 0.7

    confidences = predictions_df["confidence"]
    correct = predictions_df["correct"]

    gap = abs(confidences.mean() - correct.mean())

    return gap

def calibration_curve_data(predictions_df, bins=10):

    if "confidence" not in predictions_df.columns:
        predictions_df["confidence"] = 0.7

    confidences = predictions_df["confidence"]
    correct = predictions_df["correct"]
    bin_edges = np.linspace(0, 1, bins + 1)
    results = []

    for i in range(bins):

        lower = bin_edges[i]
        upper = bin_edges[i + 1]

        mask = (confidences >= lower) & (confidences < upper)

        if mask.sum() > 0:

            accuracy = correct[mask].mean()
            avg_conf = confidences[mask].mean()

            results.append({
                "confidence": float(avg_conf),
                "accuracy": float(accuracy)
            })
    return results