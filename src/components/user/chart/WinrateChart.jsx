import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function WinrateChart({ wins = 0, loses = 0, disconnected = 0 }) {
  const chartRef = useRef(null);
  const chartConfig = {
    type: "doughnut",
    data: {
      labels: ["승리", "패배", "중단"],
      datasets: [
        {
          data: [wins, loses, disconnected],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: { display: false },
      },
    },
  };

  useEffect(() => {
    const context = chartRef.current.getContext("2d");
    new Chart(context, chartConfig);
  }, []);

  return (
    <div>
      <canvas
        role="img"
        aria-label="Winrate"
        width="100"
        height="100"
        ref={chartRef}
      />
    </div>
  );
}

export default WinrateChart;
