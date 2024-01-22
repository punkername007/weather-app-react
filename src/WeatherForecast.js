import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  function search() {
    let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
    let forecastApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;
    axios.get(forecastApi).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <h2>Weekly</h2>
        <WeatherForecastDay data={forecastData[0]} />
      </div>
    );
  } else {
    search();
    return null;
  }
}
