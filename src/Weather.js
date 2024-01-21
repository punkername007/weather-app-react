import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./formattedDate";
import WeatherIcons from "./WeatherIcons";

export default function Weather(props) {
  const [query, setQuery] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({
    ready: false,
    city: props.defaultCity,
  });

  function displayWeather(response) {
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "53f3bc1f5d348c44be3e3754c7185573";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setQuery(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-info">
          <div className="search-engine">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city ..."
                onChange={updateCity}
                autoFocus="on"
                required
              ></input>
            </form>
            <div className="temperature-units">
              <a href="#">C° |</a>
              <a href="#"> F°</a>
            </div>
          </div>
          <WeatherIcons iconId={weatherData.icon} />
          <div className="weather-description">{weatherData.description}</div>
          <div className="weather-highlights">
            <div>
              <div className="highlights-header">Precipitation</div>
              <div className="highlights-data">0 %</div>
            </div>
            <div>
              <div className="highlights-header">Wind</div>
              <div className="highlights-data">{weatherData.wind} km/h</div>
            </div>
            <div>
              <div className="highlights-header">Humidity</div>
              <div className="highlights-data">{weatherData.humidity} %</div>
            </div>
          </div>
        </div>
        <div className="weather-display">
          <div className="location">
            <h1>{weatherData.city}</h1>
          </div>
          <div className="weather-display-footer">
            <div className="date-info">
              <FormattedDate date={weatherData.date} />
            </div>
            <div className="temperature">
              {Math.round(weatherData.temperature)}°
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <p>Loading ...</p>;
  }
}
