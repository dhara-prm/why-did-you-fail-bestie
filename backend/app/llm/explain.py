def generate_explanation(result):

    primary = result["primary_failure"]
    accuracy = result["accuracy"]
    gap = result["confidence_gap"]

    explanation = f"""
💅 Bestie, here's what I found about your model:

Primary Issue: {primary}

The model's accuracy is {accuracy:.2f}.
However, the confidence calibration gap is {gap:.2f}.

This suggests the model may be overconfident —
it often predicts with higher certainty than the results justify.

You may want to consider:

• Calibrating probabilities (Platt scaling / isotonic regression)
• Improving training data diversity
• Investigating potential feature drift

Don't worry bestie — models fail all the time. That's how we make them better.
"""

    return explanation