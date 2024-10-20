import React from "react";
import LiveExchangeRates from "./Components/LiveExchangeRates/live-exchange-rates-component";
import FooterComponent from "./Components/footer-component";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-orange-50"> 
      <LiveExchangeRates />
      <FooterComponent />
    </div>
  );
}

export default App;