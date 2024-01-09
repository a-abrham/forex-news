require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.ALPHAVANTAGE_API_KEY;
if (!apiKey) {
  console.error('Please set your Alpha Vantage API key in the .env file.');
  process.exit(1);
}

const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=${apiKey}`;

axios.get(url, { headers: { 'User-Agent': 'axios' } })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Data:', error.response.data);
    } else if (error.request) {
      console.log('No response received');
    } else {
      console.log('Error:', error.message);
    }
  });
