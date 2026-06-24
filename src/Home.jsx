import Navbar from "./Navbar";
import SearchBar from "./Search";
import WeatherCard from "./Card";
import WeatherDetails from "./Details";

import { useState } from "react";

export default function Home() {

  let [data, setData] = useState(null);
  let [error, setError] = useState("");

  async function getWeather(cityName) {
    try {
      setError("");


      let geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
      );

      let geoData = await geoRes.json();

      if (!geoData.results) {
        throw new Error("City not found");
      }

      let location = geoData.results[0];

      let weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true`
      );

      let weatherData = await weatherRes.json();


      setData({
        city: location.name,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        winddirection: weatherData.current_weather.winddirection,
        description: "Clear Sky"
      });

    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <Navbar />

      <div className="container">

        <SearchBar onSearch={getWeather} />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <WeatherCard data={data} />
        <WeatherDetails data={data} />

      </div>
    </div>
  );
}