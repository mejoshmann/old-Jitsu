import {  useState } from "react";
import { useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import axios from "axios";

const COLORS = ["#0088FE", "#00C49F"];
function GiNoGi() {

  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:1080/");
          const data = response.data;
          const { gi, nogi } = data[data.length - 1];

          setPieChartData([
            {name: "Gi", value: gi},
            {name: "No Gi", value: nogi},
          ]);
        } catch (error) {
          console.error("Error fetching chart data:", error);
        }
      };
  
      fetchData();
    }, []);


  return (
    <div className="pie">
    <PieChart width={300} height={300}>
      <Pie
        data={pieChartData}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
          const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

          return (
            <text
              x={x}
              y={y}
              fill="white"
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
            >
              {`${(percent * 100).toFixed(0)}%`}
            </text>
          );
        }}
      >
        {pieChartData.map((_entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </div>
  );
}


export default GiNoGi;