import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-info">
        <form>
          <input type="search" placeholder="Enter a city ..." required></input>
        </form>
        <div className="icon">☀️</div>
        <div className="weather-description">Sunny</div>
        <div className="weather-highlights">
          <div>
            <div>Precipitation</div>
            <div>0%</div>
          </div>
          <div>
            <div>Wind</div>
            <div>0 km/h</div>
          </div>
          <div>
            <div>Humidity</div>
            <div>0%</div>
          </div>
        </div>
      </div>
      <div className="weather-display">
        <div className="location">
          <h1>Paris</h1>
        </div>
        <div className="weather-display-footer">
          <div className="date-info">
            <div>00:00 am</div>
            <div>Monday, Nov 16th</div>
          </div>
          <div className="temperature">14°</div>
        </div>
      </div>
    </div>
  );
}
