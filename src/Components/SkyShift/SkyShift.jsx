import React, { useState } from "react";
import "./SkyShift.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

const SkyShift = () => {
  const [searchValue, setSearchValue] = useState("");
  const [temp, setTemp] = useState(null);
  const [location, setLocation] = useState("");
  const [humidity, setHumidty] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(cloud_icon);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const params = {
    APIkey: "385f7e292d4355bc9c0fe2c1d06cd713",
    cityName: searchValue,
  };

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&units=imperial&APPID=${params.APIkey}`;

  const weatherIconMappings = {
    "01d": clear_icon, // clear sky (day)
    "01n": clear_icon, // clear sky (night)
    "02d": cloud_icon, // few clouds (day)
    "02n": cloud_icon, // few clouds (night)
    "03d": cloud_icon, // scattered clouds (day)
    "03n": cloud_icon, // scattered clouds (night)
    "04d": cloud_icon, // broken clouds (day)
    "04n": cloud_icon, // broken clouds (night)
    "09d": drizzle_icon, // shower rain (day)
    "09n": drizzle_icon, // shower rain (night)
    "10d": rain_icon, // rain (day)
    "10n": rain_icon, // rain (night)
    "13d": snow_icon, // snow (day)
    "13n": snow_icon, // snow (night)
  };

  const search = () => {
    if (searchValue === "") {
      alert("Please enter a city name.");
    } else {
      fetch(URL)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setTemp(data.main.temp);
          setLocation(data.name);
          setHumidty(data.main.humidity);
          setWindSpeed(Math.floor(data.wind.speed));

          //set state for appropriate weather icon.
          const defaultIcon = clear_icon;

          const conditionCode = data.weather[0].icon;
          const selectedIcon = weatherIconMappings[conditionCode] || defaultIcon;

          setWeatherIcon(selectedIcon);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input
            type="text"
            className="cityInput"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Search"
          />
          <div className="search-icon" onClick={search}>
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="weather-image">
          <img src={weatherIcon} alt="" />
        </div>
        <div className="weather-temp">{Math.round(temp)} °F</div>
        <div className="weather-location">{location}</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">{humidity}%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
              <div className="wind-speed">{windSpeed} km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkyShift;
