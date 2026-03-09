Why Did You Fail, Bestie?
An AI Failure Analyzer for ML Models

#### 1. Purpose of This System

Machine Learning models often fail silently.
Accuracy drops, confidence misleads, and stakeholders are left guessing.

This system is designed to perform offline, post-mortem analysis of tabular ML models and answer one core question:

Why did this model fail — and what kind of failure is it?

The system prioritizes:

clarity over automation

diagnosis over retraining

explanation over prediction

#### 2. High-Level Design Philosophy
###### Core Principles

Post-mortem, not production inference
The system analyzes past predictions, not live traffic.

Explainability-first
Every output must be interpretable by humans.

Separation of concerns
ML logic, backend orchestration, LLM explanation, and UI are cleanly separated.

Extendable by design
Architecture supports future NLP and CV expansion without refactoring.

#### 3. High-Level System Flow
User uploads CSV data
        ↓
Input validation & schema checks
        ↓
Statistical & ML failure analysis
        ↓
Failure type classification
        ↓
LLM-based explanation generation
        ↓
Frontend visualization & diagnosis

This pipeline is deterministic until the LLM layer.

#### 4. System Components Overview
4.1 Frontend (UI Layer)

- Responsibilities

Data upload (CSV files)

Display diagnosis summaries

Visualize error patterns and metrics

Toggle explanation tone (Playful 💅 / Serious 📊)

- What it does NOT do

No ML computation

No business logic

No statistical decisions

The frontend is a presentation layer only.

##### 4.2 Backend API (FastAPI)

- Responsibilities

Accept and validate inputs

Orchestrate analysis pipeline

Call ML analysis modules

Call LLM explanation layer

Serve structured results to frontend

- Key Characteristics

Stateless

Deterministic outputs (except LLM phrasing)

Strict input validation

The backend is the conductor, not the brain.

##### 4.3 ML Failure Analysis Engine

Located in:

backend/app/analysis/

- Responsibilities

Compute error distributions

Detect confidence mismatch

Identify feature instability

Measure data drift

Aggregate signals into failure categories

- Important

No model training in V1

No hyperparameter tuning

No retraining decisions

This layer answers:

What objectively went wrong?

##### 4.4 LLM Explanation Layer

Located in:

backend/app/llm/

- Responsibilities

Translate structured diagnostics into human language

Adjust tone (playful vs serious)

Preserve factual correctness

- Design Constraint

LLMs do not invent conclusions

They only explain precomputed results

LLMs are interpreters, not analysts.

##### 4.5 Data & Schema Validation

Located in:

backend/app/core/

- Responsibilities

Validate CSV schema

Ensure row alignment between:

features

predictions

ground truth

Detect missing values or invalid types

Bad inputs are rejected early and loudly.

#### 5. Input & Output Contracts
- Inputs (V1)

Feature data (CSV)

Ground truth labels (CSV)

Model predictions (CSV)

All inputs must:

align row-wise

match schema

be tabular

- Outputs

Structured JSON containing:

failure summary

detected failure types

metric values

LLM explanation text

visualization-ready data

Frontend decides how to display — backend decides what is true.

#### 6. Why Offline Analysis?

This system intentionally avoids:

real-time inference

live retraining

model serving

- Reasons

Debugging requires stability

Offline analysis allows deeper inspection

Most real ML failures are discovered after deployment

This mirrors real-world ML incident analysis.

#### 7. Failure Taxonomy Integration

The architecture assumes a failure taxonomy, not raw metrics.

Metrics → Signals → Failure Types → Explanation

Examples:

high confidence + low accuracy → calibration failure

shifted feature distribution → data drift

clustered errors → subgroup failure

(Defined in detail in failure-metrics.md)

#### 8. Extensibility (NLP & CV Ready)

The architecture supports future expansion by:

Adding new analysis modules:

analysis/nlp/
analysis/cv/

- Reusing:

backend orchestration

LLM explanation layer

frontend patterns

Only the analysis engine changes.

#### 9. Non-Goals (Explicit)

This system does NOT aim to:

Automatically fix models

Retrain models

Replace ML engineers

Act as an AutoML solution

It is a diagnostic assistant, not a silver bullet.

#### 10. Summary

Why Did You Fail, Bestie? is architected as:

a diagnostic system

a learning tool

a professional ML post-mortem framework

It treats failure as:

something to understand, not hide.