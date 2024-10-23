import React, { useState } from "react";
import CurrencyConverter from "./currency-converter-component";
import HistoricalRatesChart from "./historical-rates-chart-component";

function ConvertWrapper() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");
  const [baseAmount, setBaseAmount] = useState(1);
  const [convertedValue, setConvertedValue] = useState("");

  const handleBaseAmountChange = (e) => {
    setBaseAmount(e.target.value);
  };

  const handleSwapCurrencies = () => {
    const newBaseCurrency = targetCurrency;
    const newTargetCurrency = baseCurrency;
    setBaseCurrency(newBaseCurrency);
    setTargetCurrency(newTargetCurrency);
    setBaseAmount(Number(convertedValue).toFixed(2));
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <CurrencyConverter
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
        targetCurrency={targetCurrency}
        setTargetCurrency={setTargetCurrency}
        baseAmount={baseAmount}
        setBaseAmount={setBaseAmount}
        convertedValue={convertedValue}
        setConvertedValue={setConvertedValue}
        handleBaseAmountChange={handleBaseAmountChange}
        handleSwapCurrencies={handleSwapCurrencies}
      />
      <HistoricalRatesChart
        baseCurrency={baseCurrency}
        targetCurrency={targetCurrency}
      />
    </div>
  );
}

export default ConvertWrapper;
