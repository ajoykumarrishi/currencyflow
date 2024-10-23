import React, { useEffect, useRef, useState } from "react";
import { fetchHistoricalRates } from "../../Services/exchange-rate-service";
import Chart from 'chart.js/auto';

function HistoricalRatesChart() {
  const canvasRef = useRef(null);
  const [historicalMap, setHistoricalMap] = useState({});

  useEffect(() => {
    async function mapHistoricalRates(
      baseCurrency = "USD",
      targetCurrency = "INR"
    ) {
      const result = await fetchHistoricalRates(baseCurrency, targetCurrency);
      const mappedRates = {};
      for (let [month, rates] of Object.entries(result.rates)) {
        mappedRates[month] = rates[targetCurrency];
      }
      setHistoricalMap(mappedRates);
    }

    mapHistoricalRates();

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: Object.keys(historicalMap),
          datasets: [
            {
              label: `Exchange Rate Over Time`,
              data: Object.values(historicalMap),
              fill: false,
              borderColor: "#6b46c1",
              tension: 0.1,
            },
          ],
        },
        options: {
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
  }, [historicalMap]);

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full bg-transparent"></canvas>
    </div>
  );
}

export default HistoricalRatesChart;