import React from "react";
import CityList from "./CityList";
import WeatherList from "./WeatherList";

function Container() {
  return (
    <div className="App">
      <CityList />
      <WeatherList />
    </div>
  );
}

export default Container;
