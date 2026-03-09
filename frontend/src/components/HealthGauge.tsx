"use client";

import GaugeComponent from "react-gauge-component";

export default function HealthGauge({ score }: any) {

  return (
    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md border border-pink-200">

      <h2 className="text-lg font-semibold mb-4 text-center">
        Model Health 🎀
      </h2>

      <GaugeComponent
        value={score}
        minValue={0}
        maxValue={100}

        arc={{
          subArcs: [
            { limit: 60, color: "#f87171" },
            { limit: 80, color: "#fbbf24" },
            { limit: 100, color: "#34d399" }
          ]
        }}

        labels={{
          valueLabel: {
            formatTextValue: (value) => `${value}/100`
          }
        }}

      />

    </div>
  );
}