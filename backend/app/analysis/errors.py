import pandas as pd

def compute_error_distribution(df):

    if "correct" not in df.columns:
        return []

    errors = df[df["correct"] == 0]

    total_errors = len(errors)

    return [
        {"name": "Errors", "count": int(total_errors)},
        {"name": "Correct", "count": int(len(df) - total_errors)}
    ]