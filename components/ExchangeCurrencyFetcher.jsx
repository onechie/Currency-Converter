"use client";

import { useEffect } from "react";

export default function ExchangeCurrencyFetcher({
  exchangeRates,
  onCurrenciesFetched,
}) {
  useEffect(() => {
    fetchExchangeCurrency();
  }, []);

  const fetchExchangeCurrency = async () => {
    try {
      const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`);
      const data = await response.json();

      if (data) {
        let exchangeCurrencies = { exchangeRates };
        Object.keys(exchangeRates).forEach((currency) => {
          exchangeCurrencies[currency] = data[currency.toLowerCase()] || "N/A";
        });
        onCurrenciesFetched(exchangeCurrencies);
      } else {
        console.error("Failed to fetch exchange currencies");
      }
    } catch (err) {
      console.error("Error fetching exchange currencies");
    }
  };
}
