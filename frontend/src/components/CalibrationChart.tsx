"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function CalibrationChart({ data }: any) {

  return (
    <div className="w-full h-64">

      <ResponsiveContainer>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="confidence" />

          <YAxis domain={[0,1]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="accuracy"
            stroke="#f472b6"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}