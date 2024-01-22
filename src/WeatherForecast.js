import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import BeatLoader from "react-spinners/BeatLoader";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

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
        {forecastData.map(function (day, index) {
          if (index < 7) {
            return <WeatherForecastDay key={index} data={day} />;
          }
        })}
      </div>
    );
  } else {
    search();
    return <BeatLoader color="#044f74" />;
  }
}
