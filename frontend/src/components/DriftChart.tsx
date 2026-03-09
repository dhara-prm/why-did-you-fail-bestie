"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function DriftChart({ data }: any) {

  return (
    <div className="w-full h-64">

      <ResponsiveContainer>

        <BarChart data={data}>

          <XAxis dataKey="feature" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="mean"
            fill="#fb7185"
            radius={[6,6,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}