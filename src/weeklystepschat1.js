import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import stepData from "./stepdata2";

const WeeklyStepsChart = () => {
  return (
    <div className="chart-container">
      <BarChart
        width={700}
        height={400}
        data={stepData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="calories" fill="#2daa8d" />
      </BarChart>
    </div>
  );
};
export default WeeklyStepsChart;