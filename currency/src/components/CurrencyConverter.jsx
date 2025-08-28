import { useState } from "react"
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid"

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")
  const [result, setResult] = useState(null)

  const currencies = ["USD", "EUR", "GBP", "KES", "INR", "JPY"]

  const convertcurrency = async () => {
    try {
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/8498a10a124248526123a7d3/pair/USD/EUR/25}`
      )
      const data = await res.json()
      setResult(data.result)
    } catch (err) {
      console.error("Conversion error:", err)
    }
  }

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setResult(null)
  }

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images.jpg')" }} // 👈 put money.jpg in /public
    >
      <div className="bg-white/80 p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Currency Converter</h1>

        <div className="flex flex-col gap-4">
          {/* Amount Input */}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter amount"
          />


          {/* From / To Selectors with Swap */}
          <div className="flex items-center justify-between gap-2">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>

            <button
              onClick={swapCurrencies}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              title="Swap currencies"
            >
              <ArrowsRightLeftIcon className="h-5 w-5" />
            </button>

            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>

          {/* Convert Button */}
          <button
            onClick={convertcurrency}
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Convert
          </button>

          {/* Result */}
          {result !== null && (
            <div className="mt-4 text-center text-lg font-bold">
              {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
