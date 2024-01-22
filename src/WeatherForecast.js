import React from "react";
import "./WeatherForecast.css";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <h2>Weekly</h2>
      <div className="dailyForecast">
        <div className="forecastDate">Monday</div>
        <div className="forecastData">
          <WeatherIcons iconId={"09d"} weight={25} height={25} />
          <div className="forecastMinTemp">0°</div>
          {" | "}
          <div className="forecastMaxTemp">5°</div>
        </div>
      </div>
      <div className="dailyForecast">
        <div className="forecastDate">Tuesday</div>
        <div className="forecastData">
          <WeatherIcons iconId={"09d"} weight={25} height={25} />
          <div className="forecastMinTemp">0°</div>
          {" | "}
          <div className="forecastMaxTemp">5°</div>
        </div>
      </div>
      <div className="dailyForecast">
        <div className="forecastDate">Wednesday</div>
        <div className="forecastData">
          <WeatherIcons iconId={"09d"} weight={25} height={25} />
          <div className="forecastMinTemp">0°</div>
          {" | "}
          <div className="forecastMaxTemp">5°</div>
        </div>
      </div>
      <div className="dailyForecast">
        <div className="forecastDate">Thursday</div>
        <div className="forecastData">
          <WeatherIcons iconId={"09d"} weight={25} height={25} />
          <div className="forecastMinTemp">0°</div>
          {" | "}
          <div className="forecastMaxTemp">5°</div>
        </div>
      </div>
      <div className="dailyForecast">
        <div className="forecastDate">Friday</div>
        <div className="forecastData">
          <WeatherIcons iconId={"09d"} weight={25} height={25} />
          <div className="forecastMinTemp">0°</div>
          {" | "}
          <div className="forecastMaxTemp">5°</div>
        </div>
      </div>
      <div className="dailyForecast">
        <div className="forecastDate">Saturday</div>
        <div className="forecastData">
          <WeatherIcons iconId={"09d"} weight={25} height={25} />
          <div className="forecastMinTemp">0°</div>
          {" | "}
          <div className="forecastMaxTemp">5°</div>
        </div>
      </div>
    </div>
  );
}
