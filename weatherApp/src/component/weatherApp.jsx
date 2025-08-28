import { useState } from "react"

export default function WeatherApp() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState("")

  const API_KEY = "00c98da25dca34718a6a38fad0f3ebc7" 

  const fetchWeather = async () => {
    try {
      setError("")
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      if (!res.ok) throw new Error("City not found")
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setWeather(null)
      setError(err.message)
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4">
      <h1 className="text-4xl font-bold mb-6">Weather App</h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded-lg text-black focus:outline-none"
        />
        <button
          onClick={fetchWeather}
          className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Search
        </button>
      </div>

      {error && <p className="mt-4 text-red-200">{error}</p>}

      {weather && (
        <div className="mt-6 bg-white/20 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold">{weather.name}</h2>
          <p className="text-lg">{weather.weather[0].description}</p>
          <p className="text-5xl font-bold">{weather.main.temp}°C</p>
        </div>
      )}
    </div>
  )
}
