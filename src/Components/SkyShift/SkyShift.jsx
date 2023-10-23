import React from "react";
import "./SkyShift.css";

const SkyShift = () => {
  const params = {
    access_key: "",
    query: "91601",
  };

  const apiUrl = "http://api.weatherbit.io/v2.0/current";

  //construct url with query params
  const url = `${apiUrl}?postal_code=${params.query}&country=US&key=${params.access_key}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(`Current Temperatture in ${data.location.name} is ${data.current.temperature}℃`)
      console.log(data);
    });

  return <div></div>;
};

export default SkyShift;
