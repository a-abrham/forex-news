const exchangeService = require('./exchangeService');

async function getExchangeRate(req, res) {
  const fromCurrency = req.query.fromCurrency || 'USD';
  const toCurrency = req.query.toCurrency || 'JPY';

  const apiKey = process.env.ALPHAVANTAGE_API_KEY;
  if (!apiKey) {
    return res.status(500).send('NO API KEY.. set your Alpha Vantage API key in the .env file.');
  }

  const apiUrl = exchangeService.buildApiUrl(fromCurrency, toCurrency, apiKey);

  try {
    const exchangeRate = await exchangeService.fetchExchangeRate(apiUrl);
    res.json(exchangeRate);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching exchange rate', details: error.message });
  }
}

module.exports = { getExchangeRate };
