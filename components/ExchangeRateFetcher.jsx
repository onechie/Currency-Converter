"use client";

import { useEffect } from "react";

export default function ExchangeRateFetcher({
  baseCurrency,
  onRatesFetched,
  setLastUpdated,
}) {
  useEffect(() => {
    fetchExchangeRate();
  }, [baseCurrency]);
  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(`/api/exchange/rates/${baseCurrency}`);
      const data = await response.json();

      if (data.rates) {
        const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        setLastUpdated(formattedDate);
        onRatesFetched(data.rates);
      } else {
        console.error("Failed to fetch exchange rates");
      }
    } catch (err) {
      console.error("Error fetching exchange rates");
    }
  };
}
