// EXCHANGE RATE API
const EXCHANGE_RATE_API_KEY = process.env.REACT_APP_EXCHANGE_RATE_API_KEY;
const EXCHANGE_RATE_BASE_URL = `https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_KEY}`;

// FRANKFURTER API
const FRANKFURTER_BASE_URL = "https://api.frankfurter.app";

export async function fetchExchangeRates(baseCurrency) {
  return fetch(`${EXCHANGE_RATE_BASE_URL}/latest/${baseCurrency}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Unable to fetch conversion rates for ${baseCurrency}!\nStatus: ${response.status}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error("Error: ", error.message);
    });
}

export async function fetchConvertedResult(
  baseCurrency,
  targetCurrency,
  baseAmount
) {
  return fetch(
    `${EXCHANGE_RATE_BASE_URL}/pair/${baseCurrency}/${targetCurrency}/${baseAmount}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Unable to convert ${baseCurrency} to ${targetCurrency}!\nStatus: ${response.status}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error("Error: ", error.message);
    });
}

export async function availableHistoricalData() {
  const result = await fetch(`${FRANKFURTER_BASE_URL}/currencies`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Unable to find currencies supported by FRANKFURTER API`
        );
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error("Error: ", error);
    });
  return Object.keys(result);
}

export async function fetchHistoricalRates(baseCurrency, targetCurrency) {
  const availableCurrencies = await availableHistoricalData();

  if (
    availableCurrencies.includes(baseCurrency) &&
    availableCurrencies.includes(targetCurrency)
  ) {
    try {
      const endDate = new Date().toISOString().slice(0, 10);

      const startDate = new Date();
      startDate.setFullYear(startDate.getFullYear() - 1);
      const formattedStartDate = startDate.toISOString().slice(0, 10);

      return fetch(
        `${FRANKFURTER_BASE_URL}/${formattedStartDate}..${endDate}?from=${baseCurrency}&to${targetCurrency}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Unable to fetch historical data for ${baseCurrency} to ${targetCurrency} from ${startDate} to ${endDate}`
            );
          }
          return response.json();
        })
        .catch((error) => {
          throw new Error("Error: ", error.message);
        });
    } catch {
      return "";
    }
  }
  return "";
}
