import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSehir } from "../context/SehirContext";

function WeatherList() {
  const [weather, setWeather] = useState([]);
  const [weatherDays, setWeatherDays] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const { sehir } = useSehir();
  const gunAdi = (tarih) => {
    const dt = new Date(tarih);
    return dt.toLocaleDateString("tr-TR", { weekday: "long" });
  };
  useEffect(() => {
    const mapApi = process.env.REACT_APP_VCAPIKEY;

    //console.log(mapApi);
    axios(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${sehir}?unitGroup=metric&key=${mapApi}&contentType=json`
    )
      .then((res) => {
        setWeather(res.data);         
        setWeatherDays(res.data.days);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, [sehir]);

  return (
    <>
      <div>WeatherList for {sehir}</div>
      <br />
      {isLoading && <div>Loading</div>}
      <div>
        <div>Adress : {weather.address}</div>
        <br />
        <div style={{display: "flex",flexFlow:"row",justifyContent: "space-around"}}>
        {weatherDays.map((item, index) => {
          while (index < 8) {
            return <div className={index===0?'cerceve kutu':'kutu'} key={index}>{gunAdi(item.datetime)}<br /><img src={`./icons/${item.icon}.png`} alt={item.icon} /><br /><span style={{color:"#000000"}}>{item.tempmax}&#176;</span>&nbsp; {item.tempmin}&#176;</div>;
          }
        })}
        </div>
      </div>
      {/*JSON.stringify(weather.days)*/}
      {/*JSON.stringify(weather)*/}

      <br />
    </>
  );
}

export default WeatherList;
