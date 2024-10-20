const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

export async function fetchExchangeRates(baseCurrency) {
  return fetch(`${BASE_URL}/latest/${baseCurrency}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Unable to fetch conversion rates for ${baseCurrency}!\nStatus: ${response.status}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error("Error:", error.message);
    });
}
