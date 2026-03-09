"use client";

import { useEffect, useState } from "react";

import ErrorChart from "../../components/ErrorChart";
import CalibrationChart from "../../components/CalibrationChart";
import DriftChart from "../../components/DriftChart";
import ResultCard from "../../components/ResultCard";

export default function ResultsPage() {

  const [result, setResult] = useState<any>(null);

  useEffect(() => {

    const stored = localStorage.getItem("analysis_result");

    if (stored) {
      setResult(JSON.parse(stored));
    }

  }, []);

  if (!result) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading results...</p>
      </main>
    );
  }

  function getSeverity(score: number) {

    if (score >= 80) {
      return { label: "Healthy 🟢", color: "text-green-500" };
    }

    if (score >= 60) {
      return { label: "Warning 🟡", color: "text-yellow-500" };
    }

    return { label: "High Risk 🔴", color: "text-red-500" };
  }

  const severity = getSeverity(result.health_score || 0);

  return (
    <main className="min-h-screen bg-[#f7f7fb] p-10">

      <div className="max-w-6xl mx-auto space-y-6">

        <h1 className="text-3xl font-semibold">
          Why Did You Fail, Bestie? 💅
        </h1>

        <p className="text-gray-500">
          AI Model Failure Analysis Dashboard
        </p>

        {/* Metrics Section */}

        <div className="grid grid-cols-4 gap-4">

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <p className="text-sm text-gray-500">Accuracy</p>
            <p className="text-2xl font-semibold">
              {result.accuracy?.toFixed(2)}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <p className="text-sm text-gray-500">Confidence Gap</p>
            <p className="text-2xl font-semibold">
              {result.confidence_gap?.toFixed(2)}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <p className="text-sm text-gray-500">Health Score</p>
            <p className="text-2xl font-semibold">
              {result.health_score}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <p className="text-sm text-gray-500">Model Status</p>
            <p className={`text-lg font-semibold ${severity.color}`}>
              {severity.label}
            </p>
          </div>

        </div>

        {/* Charts */}

        <div className="grid grid-cols-2 gap-6">

          <ResultCard title="Error Distribution">
            <ErrorChart data={result.error_distribution} />
          </ResultCard>

          <ResultCard title="Calibration Curve">
            <CalibrationChart data={result.calibration_curve} />
          </ResultCard>

        </div>

        {/* Drift Chart */}

        <ResultCard title="Feature Drift Analysis">
          <DriftChart data={result.feature_drift} />
        </ResultCard>

        {/* AI Explanation */}

        <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">

          <h2 className="text-lg font-semibold mb-2">
            💅 Bestie Diagnosis
          </h2>

          <p className="text-gray-700 whitespace-pre-line">
            {result.explanation}
          </p>

        </div>

      </div>

    </main>
  );
}