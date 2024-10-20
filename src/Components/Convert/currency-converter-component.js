import React, { useState, useEffect } from "react";
import {
  fetchConvertedResult,
  fetchExchangeRates,
} from "../../Services/exchange-rate-service";

function CurrencyConverter() {
  const [convertedValue, setConvertedValue] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");
  const [baseAmount, setBaseAmount] = useState(1);
  const [conversionRates, setConversionRates] = useState({});

  useEffect(() => {
    async function fetchConversionRates() {
      try {
        const data = await fetchExchangeRates(baseCurrency);
        setConversionRates(data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates", error.message);
      }
    }
    fetchConversionRates();
  }, [baseCurrency]);

  useEffect(() => {
    async function convertValues() {
      try {
        const data = await fetchConvertedResult(
          baseCurrency,
          targetCurrency,
          baseAmount
        );
        setConvertedValue(data.conversion_result);
      } catch (error) {
        console.error("Error fetching converted result", error.message);
      }
    }
    convertValues();
  }, [baseCurrency, targetCurrency, baseAmount]);

  const handleBaseAmountChange = (e) => {
    setBaseAmount(e.target.value);
  };

  const handleSwapCurrencies = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
  };

  const filteredRates = Object.keys(conversionRates).filter(
    (currency) => currency !== baseCurrency
  );

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-purple-900 mb-6">
        Currency Converter
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="bg-orange-50 rounded-lg p-4">
              <select
                value={baseCurrency}
                onChange={(e) => setBaseCurrency(e.target.value)}
                className="w-full mb-4 border border-purple-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-purple-400 focus:outline-none"
              >
                {Object.keys(conversionRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={baseAmount}
                onChange={handleBaseAmountChange}
                className="w-full border border-purple-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                placeholder="Enter amount"
              />
            </div>
          </div>

          <button
            onClick={handleSwapCurrencies}
            className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors duration-200 w-12 h-12 flex items-center justify-center font-bold text-purple-700"
            aria-label="Swap currencies"
          >
            ⇄
          </button>

          <div className="flex-1">
            <div className="bg-orange-50 rounded-lg p-4">
              <select
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
                className="w-full mb-4 border border-purple-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-purple-400 focus:outline-none"
              >
                {filteredRates.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <div className="w-full border border-purple-300 rounded-lg p-3 bg-gray-50 text-gray-700">
                {convertedValue ? convertedValue : "Calculating..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
