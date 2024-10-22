# CurrencyFlow - Currency Converter & Live Exchange Rates

CurrencyFlow is a React-based web app that allows users to quickly convert currencies using live exchange rates. It features a currency converter and a live exchange rates table, styled with Tailwind CSS for a clean and responsive UI.

## Features

- **Quick Convert**: Convert between currencies with a specified input amount.
- **Live Exchange Rates**: View real-time exchange rates for multiple currencies.
- **Swap Currencies**: Easily swap base and target currencies in the converter.
- **Responsive Design**: Built to work seamlessly across devices.

## Technologies Used

- **React**: Frontend JavaScript library for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Navigation between components (Quick Convert and Live Rates).
- **Exchange Rate API**: Fetches live exchange rates.

## Getting Started

### Prerequisites

- **Node.js**: Install from [Node.js](https://nodejs.org/).
- **NPM** or **Yarn**: For managing dependencies.

### Installation

1. **Clone the repository**:
   
   ```git clone https://github.com/ajoykumarrishi/currencyflow.git```

2.	**Navigate into the project directory**:

    ```cd currencyflow```


3.	**Install dependencies**:

    ```npm install```

4.	**Set up your API key: Create a .env file and add your API key**:
    
    ```REACT_APP_EXCHANGE_RATE_API_KEY=your_api_key_here```

5.	**Run the development server**:

    ```npm start```

### Build for Production

To build the project for production:

    ```npm run build```

### API Endpoints

	•	fetchExchangeRates(baseCurrency): Retrieves exchange rates for the base currency.
	•	fetchConvertedResult(baseCurrency, targetCurrency, baseAmount): Converts the base amount into the target currency.