import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-info">
        <div className="search-engine">
          <form>
            <input
              type="search"
              placeholder="Enter a city ..."
              required
            ></input>
          </form>
          <div className="temperature-units">
            <a href="#">C° |</a>
            <a href="#"> F°</a>
          </div>
        </div>
        <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" />
        <div className="weather-description">Sunny</div>
        <div className="weather-highlights">
          <div>
            <div className="highlights-header">Precipitation</div>
            <div className="highlights-data">0 %</div>
          </div>
          <div>
            <div className="highlights-header">Wind</div>
            <div className="highlights-data">0 km/h</div>
          </div>
          <div>
            <div className="highlights-header">Humidity</div>
            <div className="highlights-data">0 %</div>
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
