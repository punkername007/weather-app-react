import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({
    ready: false,
    city: props.defaultCity,
  });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-info">
          <div className="search-engine">
            <form>
              <input
                type="search"
                placeholder="Enter a city ..."
                autoFocus="on"
                required
              ></input>
            </form>
            <div className="temperature-units">
              <a href="#">C° |</a>
              <a href="#"> F°</a>
            </div>
          </div>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
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
              <div>00:00 am</div>
              <div>Monday, Nov 16th</div>
            </div>
            <div className="temperature">
              {Math.round(weatherData.temperature)}°
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "53f3bc1f5d348c44be3e3754c7185573";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return <p>Loading ...</p>;
  }
}
