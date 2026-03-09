import pandas as pd

def detect_feature_drift(df):

    numeric_cols = df.select_dtypes(include=["number"]).columns

    drift_results = []

    for col in numeric_cols:

        mean_val = df[col].mean()
        std_val = df[col].std()

        drift_results.append({
            "feature": col,
            "mean": float(mean_val),
            "std": float(std_val)
        })

    return drift_results