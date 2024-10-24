# CurrencyFlow - Currency Converter & Live Exchange Rates

CurrencyFlow is a React-based web app that allows users to quickly convert currencies using live exchange rates. It features a currency converter, a live exchange rates table, and a trends chart, styled with Tailwind CSS for a clean and responsive UI.

## Features

- **Quick Convert**: Convert between currencies with a specified input amount.
- **Live Exchange Rates**: View real-time exchange rates for multiple currencies.
- **Swap Currencies**: Easily swap base and target currencies in the converter.
- **Historical Trends**: View currency trends using historical rates, powered by Chart.js.
- **Responsive Design**: Built to work seamlessly across devices.

## Technologies Used

- **React**: Frontend JavaScript library for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Navigation between components (Quick Convert and Live Rates).
- **Chart.js**: Visualize historical currency trends using charts.
- **Frankfurter API**: Fetch historical exchange rates for currency trends.
- **Exchange Rate API**: Fetches live exchange rates.

## Getting Started

### Prerequisites

- **Node.js**: Install from [Node.js](https://nodejs.org/).
- **NPM** or **Yarn**: For managing dependencies.

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/ajoykumarrishi/currencyflow.git
```

2. **Navigate into the project directory**:
```bash
cd currencyflow
```

3. **Install dependencies**:
```bash
npm install
```

4. **Set up your API key: Create a .env file and add your API key**:
```bash
REACT_APP_EXCHANGE_RATE_API_KEY=your_api_key_here
```

5. **Run the development server**:
```bash
npm start
```

### Build for Production

To build the project for production:
```bash
npm run build
```

### API Endpoints

| Endpoint | Description |
|----------|-------------|
| `fetchExchangeRates(baseCurrency)` | Retrieves exchange rates for the base currency. |
| `fetchConvertedResult(baseCurrency, targetCurrency, baseAmount)` | Converts an amount from base currency to target currency. |
| `fetchHistoricalRates(baseCurrency, targetCurrency)` | Returns the past year worth of exchange rates in JSON format. |
