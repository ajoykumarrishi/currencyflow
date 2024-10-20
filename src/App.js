import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import CurrencyConverter from "./Components/Convert/currency-converter-component";
import Footer from "./Components/footer-component";
import Header from "./Components/header-component";
import LiveExchangeRates from "./Components/LiveExchangeRates/live-exchange-rates-component";

function Navigation() {
  return (
    <nav className="flex justify-center gap-4 mb-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-6 py-3 rounded-lg transition-all duration-200 ${
            isActive
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-white text-purple-600 hover:bg-purple-100"
          }`
        }
      >
        Quick Convert
      </NavLink>
      <NavLink
        to="/live-rates"
        className={({ isActive }) =>
          `px-6 py-3 rounded-lg transition-all duration-200 ${
            isActive
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-white text-purple-600 hover:bg-purple-100"
          }`
        }
      >
        Live Rates
      </NavLink>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-r from-orange-100 to-orange-50">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<CurrencyConverter />} />
          <Route path="/live-rates" element={<LiveExchangeRates />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;