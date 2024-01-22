import React from "react";
import "./WeatherForecast.css";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    return `${Math.round(props.data.temp.min)}°`;
  }

  function maxTemperature() {
    return `${Math.round(props.data.temp.max)}°`;
  }

  function forecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return `${days[day]}`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="dailyForecast">
        <div className="forecastDate">{forecastDay()}</div>
        <div className="forecastData">
          <WeatherIcons
            iconId={props.data.weather[0].icon}
            weight={25}
            height={25}
          />
          <div className="forecastMinTemp">{minTemperature()}</div>
          {" | "}
          <div className="forecastMaxTemp">{maxTemperature()}</div>
        </div>
      </div>
    </div>
  );
}
