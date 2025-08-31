import { useEffect, useState } from "react";

function useCurrencyInfo(currency) { 
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/8498a10a124248526123a7d3/latest/${currency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.conversion_rates); // ✅ get all currencies
      })
      .catch((err) => console.error("API error:", err));
  }, [currency]);

  return data; // returns { USD: 1, INR: 83.2, EUR: 0.92, ... }
}

export default useCurrencyInfo;
