import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcons(props) {
  let iconsMapping = {
    "01d": "sunny",
    "01n": "clear-night",
    "02d": "partlycloudy",
    "02n": "partlycloudy",
    "03d": "partlycloudy",
    "03n": "partlycloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rainy",
    "09n": "rainy",
    "10d": "pouring",
    "10n": "pouring",
    "11d": "lightning-rainy",
    "11n": "lightning-rainy",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "fog",
    "50n": "fog",
  };
  if (props.iconId === "02n" || props.iconId === "03n") {
    return (
      <WeatherSvg
        state={iconsMapping[props.iconId]}
        night={true}
        width={100}
        height={100}
      />
    );
  } else {
    return (
      <div className="WeatherIcons">
        <WeatherSvg
          state={iconsMapping[props.iconId]}
          width={100}
          height={100}
        />
      </div>
    );
  }
}
