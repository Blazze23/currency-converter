import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedValue, setConvertedValue] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const convert = async () => {
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await response.json();

      setConvertedValue(data.rates[toCurrency]);
      setDate(data.date);
    };

    if (fromCurrency === toCurrency) return setConvertedValue(amount);
    convert();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <>
      <header>
        <div className="logo">
          <h1>
            <span>💵</span> Currency Converter <span>💷</span>
          </h1>
        </div>
      </header>
      <main>
        <div className="converter">
          <p className="date">Conversion rate is for the date: {date}</p>
          <div className="input-section">
            <input
              type="text"
              value={amount}
              placeholder="Enter amount"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="AUD">Australian Dollar</option>
              <option value="BGN">Bulgarian Lev</option>
              <option value="BRL">Brazilian Real</option>
              <option value="CAD">Canadian Dollar</option>
              <option value="CHF">Swiss Franc</option>
              <option value="CNY">Chinese Yuan</option>
              <option value="CZK">Czech Koruna</option>
              <option value="DKK">Danish Krone</option>
              <option value="EUR">Euro</option>
              <option value="GBP">British Pound</option>
              <option value="HKD">Hong Kong Dollar</option>
              <option value="HUF">Hungarian Forint</option>
              <option value="IDR">Indonesian Rupiah</option>
              <option value="ILS">Israeli New Sheqel</option>
              <option value="INR">Indian Rupee</option>
              <option value="ISK">Icelandic Króna</option>
              <option value="JPY">Japanese Yen</option>
              <option value="KRW">South Korean Won</option>
              <option value="MXN">Mexican Peso</option>
              <option value="MYR">Malaysian Ringgit</option>
              <option value="NOK">Norwegian Krone</option>
              <option value="NZD">New Zealand Dollar</option>
              <option value="PHP">Philippine Peso</option>
              <option value="PLN">Polish Złoty</option>
              <option value="RON">Romanian Leu</option>
              <option value="SEK">Swedish Krona</option>
              <option value="SGD">Singapore Dollar</option>
              <option value="THB">Thai Baht</option>
              <option value="TRY">Turkish Lira</option>
              <option value="USD">United States Dollar</option>
              <option value="ZAR">South African Rand</option>
            </select>
            <span>to</span>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="AUD">Australian Dollar</option>
              <option value="BGN">Bulgarian Lev</option>
              <option value="BRL">Brazilian Real</option>
              <option value="CAD">Canadian Dollar</option>
              <option value="CHF">Swiss Franc</option>
              <option value="CNY">Chinese Yuan</option>
              <option value="CZK">Czech Koruna</option>
              <option value="DKK">Danish Krone</option>
              <option value="EUR">Euro</option>
              <option value="GBP">British Pound</option>
              <option value="HKD">Hong Kong Dollar</option>
              <option value="HUF">Hungarian Forint</option>
              <option value="IDR">Indonesian Rupiah</option>
              <option value="ILS">Israeli New Sheqel</option>
              <option value="INR">Indian Rupee</option>
              <option value="ISK">Icelandic Króna</option>
              <option value="JPY">Japanese Yen</option>
              <option value="KRW">South Korean Won</option>
              <option value="MXN">Mexican Peso</option>
              <option value="MYR">Malaysian Ringgit</option>
              <option value="NOK">Norwegian Krone</option>
              <option value="NZD">New Zealand Dollar</option>
              <option value="PHP">Philippine Peso</option>
              <option value="PLN">Polish Złoty</option>
              <option value="RON">Romanian Leu</option>
              <option value="SEK">Swedish Krona</option>
              <option value="SGD">Singapore Dollar</option>
              <option value="THB">Thai Baht</option>
              <option value="TRY">Turkish Lira</option>
              <option value="USD">United States Dollar</option>
              <option value="ZAR">South African Rand</option>
            </select>
          </div>
          <div className="result">
            <p>
              <span>💱</span>
              Converted Amount:{" "}
              <span>
                {Number(convertedValue).toFixed(2)} {toCurrency}
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
