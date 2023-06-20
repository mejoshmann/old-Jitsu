import React, { PureComponent } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
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
import "./Chart.scss";




function Chart() {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get("http://localhost:1080/");

            setChartData(response.data);

          } catch (error) {
            console.error("Error fetching chart data:", error);
          }
        };
    
        getData();
      }, []);




  return (
    <div className="barChart">
      <BarChart width={550} height={150} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Days" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default Chart;
