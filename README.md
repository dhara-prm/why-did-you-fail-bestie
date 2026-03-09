# 🎀 Why Did You Fail, Bestie?

**An AI-powered failure analysis dashboard for machine learning models.**

Why Did You Fail, Bestie? is a playful yet practical tool that performs **post-mortem diagnostics on machine learning predictions**. Instead of just giving metrics like accuracy, the system analyzes prediction data, detects possible failure patterns, and explains *what went wrong* in a human-friendly way.

The goal of this project is to make **ML debugging easier, clearer, and even a little fun**.


![System Design](<System Design.png>)

---

# ✨ What This Project Does

Most ML workflows end with a simple evaluation metric:

```
Accuracy: 0.78
```

But that doesn’t answer the real question:

**Why did the model fail?**

This tool analyzes prediction data and automatically detects issues such as:

* Calibration problems (overconfident models)
* Prediction errors distribution
* Feature drift signals
* Confidence gap between predictions and outcomes

It then generates a **human-readable explanation** of the model's behavior.

---

# 💡 Key Features

### 🩷 Interactive ML Diagnostics Dashboard

A visual dashboard built with **Next.js** that displays:

* Accuracy metrics
* Confidence gap
* Model health score
* Error distribution charts
* Calibration curves
* Feature drift analysis

---

### 🌷 Model Health Score

A computed score (0–100) representing the overall reliability of the model.

```
Model Health: 78 / 100
```

The score is based on:

* prediction accuracy
* calibration error
* error rate

---

### 🌻 AI-Style Failure Explanation

Instead of just numbers, the system generates a friendly explanation:

> “Bestie… your model appears slightly overconfident.
> It predicts with high confidence but makes more errors than expected.”

This helps quickly identify possible issues.

---

### 🌼 Calibration Analysis

The system checks whether the model’s **confidence matches reality**.

Example:

```
Model confidence = 90%
Actual accuracy = 70%
```

This indicates **overconfidence**, which can be dangerous in production models.

---

### ✨ Error Distribution Analysis

Shows where predictions fail by visualizing:

* correct predictions
* incorrect predictions

This helps understand model reliability.

---

### 🌵 Feature Drift Detection

Analyzes numerical feature distributions to identify potential **data drift signals**.

When production data shifts from training data patterns, models often degrade.

---

# 🪩 Dashboard Overview

The application provides a clean, interactive dashboard:

```
Model Health Gauge
Accuracy
Confidence Gap

Error Distribution Chart
Calibration Curve
Feature Drift Analysis

AI Explanation Panel
```

---

# 💕 Tech Stack

Frontend

* Next.js
* React
* Tailwind CSS
* Recharts
* React Gauge Component

Backend

* FastAPI
* Python
* Pandas
* NumPy

Machine Learning Diagnostics

* Calibration analysis
* Prediction correctness analysis
* Drift indicators
* Confidence gap evaluation

---

# 📂 Project Structure

```
why-did-you-fail-bestie/

backend/
  app/
    analysis/
      confidence.py
      errors.py
      drift.py
      diagnosis.py
    llm/
      explain.py
    main.py

frontend/
  src/
    app/
      page.tsx
      results/page.tsx
    components/
      ErrorChart.tsx
      CalibrationChart.tsx
      DriftChart.tsx
      HealthGauge.tsx

sample_data/
  demo_predictions.csv

docs/
  architecture.md
  failure-metrics.md
```

---

# 🫶 Expected CSV Format

The system analyzes prediction outputs in CSV form.

Example:

```
prediction,ground_truth,confidence
1,1,0.92
0,1,0.41
1,1,0.87
0,0,0.63
1,1,0.75
```

Minimum required columns:

```
prediction
ground_truth
```

Optional:

```
confidence
```

If confidence is missing, the system estimates a default value for diagnostics.

---

# 🩷 How to Run the Project

### 1️. Clone the repository

```
git clone https://github.com/yourusername/why-did-you-fail-bestie.git
```

---

### 2️. Start the backend

```
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs on:

```
http://localhost:8000
```

API documentation:

```
http://localhost:8000/docs
```

---

### 3️. Start the frontend

```
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

# 🫰 Example Workflow

1. Upload prediction CSV
2. Backend performs diagnostics
3. Results are analyzed
4. Dashboard visualizes failures
5. AI explanation summarizes findings

---

# 🫶 Design Philosophy

Most ML debugging tools are very technical.

This project experiments with something different:

**A playful, human-friendly diagnostic assistant.**

The interface is intentionally light, approachable, and slightly humorous — because debugging models doesn’t have to feel intimidating.

---

# 🥰 Future Improvements

Possible future enhancements:

* real LLM explanation generation
* multi-model comparison
* dataset drift monitoring
* automatic retraining suggestions
* advanced failure taxonomy
* experiment tracking integration

---

# 🤔 Why This Project Exists

In many real ML systems, teams struggle to understand **why models fail** after deployment.

This project explores the idea that:

> ML tools should explain failures, not just report metrics.

---

# ⭐ If You Like This Project

If you find the idea interesting:

*  Star the repository
*  Fork and experiment
*  Suggest improvements

---

# 💬 Final Thought

Machine learning models will fail.

Understanding *why* they fail is what makes them better.

So the next time your model behaves strangely, just ask:

**“Why did you fail, bestie?” 🎀**
