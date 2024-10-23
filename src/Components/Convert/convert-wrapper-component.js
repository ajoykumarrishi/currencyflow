import React, { useState } from "react";
import CurrencyConverter from "./currency-converter-component";
import HistoricalRatesChart from "./historical-rates-chart-component";

function ConvertWrapper() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");

  return (
    <div className="w-full flex flex-col gap-6">
      <CurrencyConverter
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
        targetCurrency={targetCurrency}
        setTargetCurrency={setTargetCurrency}
      />
      <HistoricalRatesChart
        baseCurrency={baseCurrency}
        targetCurrency={targetCurrency}
      />
    </div>
  );
}

export default ConvertWrapper;
