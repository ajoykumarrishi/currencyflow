import React, { useEffect, useRef, useState } from "react";
import { fetchHistoricalRates } from "../../Services/exchange-rate-service";
import { Chart as ChartJS } from "chart.js/auto";

const HistoricalRatesChart = ({ baseCurrency, targetCurrency }) => {
  const canvasRef = useRef(null);
  const chartInstance = useRef(null);
  const [historicalMap, setHistoricalMap] = useState({});
  const [isValidCurrency, setIsValidCurrency] = useState(true);

  useEffect(() => {
    const mapHistoricalRates = async () => {
      try {
        const result = await fetchHistoricalRates(baseCurrency, targetCurrency);
        if (!result) {
          setIsValidCurrency(false);
          return;
        }

        const mappedRates = Object.entries(result.rates).reduce(
          (acc, [month, rates]) => {
            acc[month] = rates[targetCurrency];
            return acc;
          },
          {}
        );

        setHistoricalMap(mappedRates);
        setIsValidCurrency(true);
      } catch {
        setIsValidCurrency(false);
      }
    };

    mapHistoricalRates();
  }, [baseCurrency, targetCurrency]);

  useEffect(() => {
    if (isValidCurrency && Object.keys(historicalMap).length > 0) {
      const ctx = canvasRef.current.getContext("2d");

      if (chartInstance.current) {
        // Update the chart
        chartInstance.current.data.labels = Object.keys(historicalMap);
        chartInstance.current.data.datasets[0].data =
          Object.values(historicalMap);
        chartInstance.current.update();
      } else {
        // Create the chart
        chartInstance.current = new ChartJS(ctx, {
          type: "line",
          data: {
            labels: Object.keys(historicalMap),
            datasets: [
              {
                label: `${baseCurrency} to ${targetCurrency}`,
                data: Object.values(historicalMap),
                borderColor: "#6b46c1",
                tension: 0.1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [historicalMap, baseCurrency, targetCurrency, isValidCurrency]);

  return (
    <div className="w-full h-full">
      {isValidCurrency && Object.keys(historicalMap).length > 0 ? (
        <canvas ref={canvasRef} className="w-full h-full" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-50">
          <p className="text-red-500 text-lg font-semibold">
            Chart data not available for selected currencies
          </p>
        </div>
      )}
    </div>
  );
};

export default HistoricalRatesChart;
