"use client";

import { useCallback, useEffect, useState } from "react";
import CurrencyInput from "@/components/CurrencyInput";
import ExchangeRateFetcher from "@/components/ExchangeRateFetcher";
import ExchangeCurrencyFetcher from "@/components/ExchangeCurrencyFetcher";
import { CurrencyExchange } from "@mui/icons-material";

export default function Home() {
  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState(0);

  const [baseCurrency, setBaseCurrency] = useState("PHP");
  const [targetCurrency, setTargetCurrency] = useState("USD");

  const [exchangeRates, setExchangeRates] = useState(null);
  const [exchangeCurrencies, setExchangeCurrencies] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    if (!exchangeRates) return;
    setAmountTo(
      exchangeRates?.[targetCurrency]
        ? (amountFrom * exchangeRates[targetCurrency]).toFixed(4)
        : ""
    );
  }, [exchangeRates, targetCurrency]);

  const convertFromAmount = useCallback(
    (value) => {
      setAmountFrom(value);
      setAmountTo(
        exchangeRates?.[targetCurrency]
          ? (value * exchangeRates[targetCurrency]).toFixed(4)
          : ""
      );
    },
    [exchangeRates, targetCurrency]
  );
  const convertToAmount = useCallback(
    (value) => {
      setAmountTo(value);
      setAmountFrom(
        exchangeRates?.[targetCurrency]
          ? (value / exchangeRates[targetCurrency]).toFixed(4)
          : ""
      );
    },
    [exchangeRates, targetCurrency]
  );

  return (
    <div className="flex h-screen items-center justify-center text-gray-900 bg-gradient-to-b from-sky-500 to-indigo-500">
      <div className="flex flex-col w-full lg:w-1/2 h-full items-center bg-white">
        <div className="w-full md:w-4/5 lg:w-2/3  h-full flex flex-col p-8 pt-[120px] md:justify-center">
          <h2 className="text-lg md:text-2xl xl:text-3xl  text-gray-900 mb-2">
            {amountFrom} {exchangeCurrencies?.[baseCurrency] || "N/A"} ={" "}
          </h2>
          <h1 className="text-2xl md:text-4xl xl:text-5xl mb-4 text-yellow-400">
            {amountTo} {exchangeCurrencies?.[targetCurrency] || "N/A"}
          </h1>
          <p className="text-xs md:text-sm xl:text-md text-gray-500  mb-4">
            Last updated · {lastUpdated || "N/A"}
          </p>

          <div className="flex gap-5 flex-col">
            <CurrencyInput
              amount={amountFrom}
              onAmountChange={(e) => convertFromAmount(e.target.value)}
              currency={baseCurrency}
              onCurrencyChange={(e) => setBaseCurrency(e.target.value)}
              currencies={Object.keys(exchangeRates || {})}
            />
            <CurrencyInput
              amount={amountTo}
              onAmountChange={(e) => convertToAmount(e.target.value)}
              currency={targetCurrency}
              onCurrencyChange={(e) => setTargetCurrency(e.target.value)}
              currencies={Object.keys(exchangeRates || {})}
            />
          </div>

          <ExchangeRateFetcher
            baseCurrency={baseCurrency}
            onRatesFetched={setExchangeRates}
            setLastUpdated={setLastUpdated}
          />
          {exchangeRates && !exchangeCurrencies && (
            <ExchangeCurrencyFetcher
              exchangeRates={exchangeRates}
              onCurrenciesFetched={setExchangeCurrencies}
            />
          )}
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 h-full">
        <div className=" h-full flex flex-col items-center justify-center relative gap-5 text-yellow-400">
          <div className="text-4xl text-center text-white">
            Currency Converter
          </div>
          <CurrencyExchange sx={{ fontSize: 300, color: "inherit" }} />
          <div className="text-2xl text-center text-white w-[300px]">
            Seamless Currency Conversion, Anytime, Anywhere.
          </div>
        </div>
      </div>
    </div>
  );
}
