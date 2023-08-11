import React from "react";
import { useSehir } from "../context/SehirContext";

function CityList() {
  const {sehir,setSehir}=useSehir(); 
  const sehirler = [
    {
      codu: "Ankara",
      adi: "Ankara",
    },
    {
      codu: "Istanbul",
      adi: "İstanbul",
    },
    {
      codu: "Izmir",
      adi: "İzmir",
    },
    {
      codu: "Adana",
      adi: "Adana",
    },
  ];
  const handleCity = (e) => {  
    setSehir(e.target.value)    
  }
  return (
    <div style={{padding:"10px",margin:"10px",backgroundColor:"#F6FAFD"}}>
  
      <select name="sehir" id="sehir" defaultValue={sehir} onChange={(e)=>handleCity(e)} >
        {
          sehirler.map((sehiri,index) => {
           return <option key={index} value={sehiri.codu} >{sehiri.adi}</option>
          })        
        }
      </select>
    </div>
  );
}

export default CityList;
