require('dotenv').config();
const express = require('express');
const cors = require('cors');
const exchangeController = require('./exchangeController');

const app = express();
app.use(cors());

const port = process.env.PORT || 3005;

app.get('/exchange-rate', exchangeController.getExchangeRate);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
