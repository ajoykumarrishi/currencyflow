import React, { useEffect, useRef, useState } from "react";
import { fetchHistoricalRates } from "../../Services/exchange-rate-service";
import { Chart as ChartJS } from "chart.js/auto";

function HistoricalRatesChart({ baseCurrency, targetCurrency }) {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [historicalMap, setHistoricalMap] = useState({});
  const [isValidCurrency, setIsValidCurrency] = useState(true);

  useEffect(() => {
    async function mapHistoricalRates() {
      const result = await fetchHistoricalRates(baseCurrency, targetCurrency);
      if (result === "") {
        setIsValidCurrency(false);
      } else {
        const mappedRates = {};
        for (let [month, rates] of Object.entries(result.rates)) {
          mappedRates[month] = rates[targetCurrency];
        }
        setHistoricalMap(mappedRates);
        setIsValidCurrency(true);
      }
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
      {isValidCurrency ? (
        <canvas
          ref={canvasRef}
          className="w-full h-full bg-transparent"
        ></canvas>
      ) : (
        <div className="text-center text-red-500 text-xl font-bold">
          **Chart not available**
        </div>
      )}
    </div>
  );
}

export default HistoricalRatesChart;
