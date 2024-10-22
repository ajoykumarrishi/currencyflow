import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CurrencyConverter from "./Components/Convert/currency-converter-component";
import Footer from "./Components/footer-component";
import Header from "./Components/header-component";
import LiveExchangeRates from "./Components/LiveExchangeRates/live-exchange-rates-component";

function MainContent() {
  const location = useLocation();

  const isConverterRoute = location.pathname === "/";

  return (
    <main
      className={`flex-grow mb-8 ${
        isConverterRoute ? "flex justify-center items-center" : ""
      }`}
    >
      <div className={isConverterRoute ? "w-5/6" : ""}>
        <Routes>
          <Route path="/" element={<CurrencyConverter />} />
          <Route path="/live-rates" element={<LiveExchangeRates />} />
        </Routes>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-r from-orange-100 to-orange-50 flex flex-col">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
