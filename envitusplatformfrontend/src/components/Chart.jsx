

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 
function Chart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
 
  const [chartOptions, setChartOptions] = useState({});
 
  useEffect(() => {
    setChartData({
      labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
      datasets: [
        {
          label: "device data",
          data: [20, 55, 34, 120, 720],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "device data",
        },
      },
    });
  }, []);
 
  return (
    <div className="chart" >
      <Bar style={{backgroundColor:"rgb(16 18 36)",top:"80px",position:"relative"}} options={chartOptions} data={chartData} />
    </div>
  );
}
 
export default Chart