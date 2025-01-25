import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import stepData from "./stepdata";

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
        <Bar dataKey="steps" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
export default WeeklyStepsChart;