import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
} from "recharts";
import { convertData } from "../helper/convertData";

const Chart = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="mx-auto">
      <LineChart width={400} height={400} data={convertData(data, type)}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
