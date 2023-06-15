import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const data = [
    {
        name: "Jan",
        uv: 10,
    },
    {
        name: "Feb",
        uv: 5,
    },
    {
        name: "Mar",
        uv: 6,
    },
    {
        name: "Apr",
        uv: 10,
    },
    {
        name: "May",
        uv: 10,
    },
    {
        name: "Jun",
        uv: 5,
    },
    {
        name: "Jul",
        uv: 6,
    },
    {
        name: "Aug",
        uv: 10,
    },
    {
        name: "Sep",
        uv: 10,
    },
    {
        name: "Oct",
        uv: 5,
    },
    {
        name: "Nov",
        uv: 6,
    },
    {
        name: "Dec",
        uv: 24,
    }
];

function Chart() {
  return (
    <>
      <BarChart width={550} height={150} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </>
  );
}

export default Chart;
