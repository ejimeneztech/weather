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
  // const params = {
  //   access_key: "",
  //   query: "91601",
  // };

  // const apiUrl = "http://api.weatherbit.io/v2.0/current";

  // //construct url with query params
  // const url = `${apiUrl}?postal_code=${params.query}&country=US&key=${params.access_key}`;

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // console.log(`Current Temperatture in ${data.location.name} is ${data.current.temperature}℃`)
  //     console.log(data);
  //   });

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const search = () => {
    if (searchValue === ""){
      alert("Please enter a city name.");
    } else {
      console.log("Search Value:", searchValue);
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
          <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24 C</div>
        <div className="weather-location">Los Angeles</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
              <div className="wind-speed">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkyShift;
