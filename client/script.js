async function getExchangeRate() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').innerText = '';

    try {
        const response = await fetch(`http://localhost:3005/exchange-rate?fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`);
        const data = await response.json();

        if (response.ok) {
            document.getElementById('result').innerText = `Exchange Rate: ${data['Realtime Currency Exchange Rate']['5. Exchange Rate']}`;
        } else {
            document.getElementById('result').innerText = `Error: ${data.error}`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred while fetching the exchange rate.';
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}
