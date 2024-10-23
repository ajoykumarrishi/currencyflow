import React, { useState, useEffect } from "react";
import { fetchExchangeRates } from "../../Services/exchange-rate-service.js";

function LiveExchangeRates() {
  const [baseAmount, setBaseAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("USD");
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

  const handleBaseAmountChange = (e) => {
    setBaseAmount(e.target.value);
  };

  const filteredRates = Object.keys(conversionRates).filter(
    (currency) => currency !== baseCurrency
  );

  return (
    <div className="p-3 flex flex-col items-center"> 
      <h1 className="text-4xl font-bold text-purple-900 mb-6 text-center">
        Live Exchange Rates
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mb-8">
        <div className="mb-6">
          <label className="block text-purple-700 font-semibold mb-2" htmlFor="base-amount">
            Base Amount:
          </label>
          <input
            type="number"
            id="base-amount"
            value={baseAmount}
            onChange={handleBaseAmountChange}
            className="border border-purple-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-purple-700 font-semibold mb-2" htmlFor="base-currency">
            Base Currency:
          </label>
          <select
            id="base-currency"
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
            className="border border-purple-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-400 focus:outline-none"
          >
            {Object.keys(conversionRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="w-full max-w-3xl mb-0">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-orange-200">
            <tr>
              <th className="px-6 py-3 border-b border-orange-300 text-purple-900 text-left">
                Currency
              </th>
              <th className="px-6 py-3 border-b border-orange-300 text-purple-900 text-left">
                Converted Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRates.map((currency) => (
              <tr
                key={currency}
                className="hover:bg-orange-100 transition-all duration-200"
              >
                <td className="px-6 py-4 border-b border-orange-300 text-purple-700">
                  {currency}
                </td>
                <td className="px-6 py-4 border-b border-orange-300 text-purple-700">
                  {(conversionRates[currency] * baseAmount).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LiveExchangeRates;