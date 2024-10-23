import React, { useEffect, useRef, useState } from "react";
import { fetchHistoricalRates } from "../../Services/exchange-rate-service";
import { Chart as ChartJS } from "chart.js/auto";

function HistoricalRatesChart({ baseCurrency, targetCurrency }) {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null); // Keep track of the chart instance
  const [historicalMap, setHistoricalMap] = useState({});

  useEffect(() => {
    async function mapHistoricalRates() {
      const result = await fetchHistoricalRates(baseCurrency, targetCurrency);
      const mappedRates = {};
      for (let [month, rates] of Object.entries(result.rates)) {
        mappedRates[month] = rates[targetCurrency];
      }
      setHistoricalMap(mappedRates);
    }

    mapHistoricalRates();
  }, [baseCurrency, targetCurrency]);

  useEffect(() => {
    if (Object.keys(historicalMap).length && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new ChartJS(ctx, {
        type: "line",
        data: {
          labels: Object.keys(historicalMap),
          datasets: [
            {
              label: `Exchange Rate: ${baseCurrency} to ${targetCurrency} Over Time`,
              data: Object.values(historicalMap),
              fill: false,
              borderColor: "#6b46c1",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: "black",
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: "black",
              },
            },
            y: {
              ticks: {
                color: "black",
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [historicalMap, baseCurrency, targetCurrency]);

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full bg-transparent"></canvas>
    </div>
  );
}

export default HistoricalRatesChart;
