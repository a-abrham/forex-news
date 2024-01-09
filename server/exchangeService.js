const axios = require('axios');

function buildApiUrl(fromCurrency, toCurrency, apiKey) {
  return `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${apiKey}`;
}

async function fetchExchangeRate(url) {
  try {
    const response = await axios.get(url, { headers: { 'User-Agent': 'axios' } });
    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { buildApiUrl, fetchExchangeRate };
