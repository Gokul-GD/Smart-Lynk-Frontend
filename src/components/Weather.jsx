import React from 'react';
import { useState , useEffect } from 'react';
import './Weather.css';
import API from '../utils/regCall';

import SearchIcon from "../assets/search.png";
import SunIcon from "../assets/sun.png";
import CloudIcon from "../assets/cloud.png";
import DrizzleIcon from "../assets/drizzle.png";
import RainIcon from "../assets/rain.png";
import WindIcon from "../assets/wind.png";
import SnowIcon from "../assets/snow.png";
import HumidityIcon from "../assets/humidity.png";
import nightIcon from "../assets/night.png";
import cloudnIcon from "../assets/cloudyn.png";
import showerIcon from "../assets/shower.png";
import sunrIcon from "../assets/srain.png";
import mistIcon from "../assets/mist.png";


function Weather() {
    const [temp, setTemp] = useState(0);
    const [city, setCity] = useState("Chennai");
    const [country, setCountry] = useState("");
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState(0);
    const [icon, setIcon] = useState(SunIcon);
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const iconMap = {
        "01d": SunIcon,
        "01n": nightIcon,
        "02d": CloudIcon,
        "02n": cloudnIcon,
        "03d": cloudnIcon,
        "03n": cloudnIcon,
        "04d": CloudIcon,
        "04n": nightIcon,
        "09d": showerIcon,
        "09n": DrizzleIcon,
        "10d": sunrIcon,
        "10n": RainIcon,
        "11n" : RainIcon,
        "11d" : RainIcon,
        "13d": SnowIcon,
        "13n": SnowIcon,
        "50d": mistIcon,
        "50n": mistIcon,
    };

    const fetchWeather = async (cityName) => {
        try {
          const response = await API.get(`/api/weather/${cityName}`);
          const data = response.data;
    
          if (data.cod === "404") {
            setError("City Not Found");
            return;
          }


          setTemp(Math.floor(data.temp)); 
          setHumidity(data.humidity);      
          setWind(data.wind);              
          setCity(data.city);              
          setCountry(data.country);        
          const iconCode = data.icon;     
          setIcon(iconMap[iconCode] || SunIcon);
          setError("");
        } catch (err) {
          console.error("Error fetching weather data:", err);
          setError("Error fetching weather data.");
        }
      };

      const search = () => {
        if (!text) {
          setError("Please enter a city name.");
          return;
        }
        fetchWeather(text);
      };
    
      useEffect(() => {
        fetchWeather("Chennai");
      }, []);

      return (
        // <div className='weather-container'>
        //   <div className="top-bar">
        //     <input
        //       type="text"
        //       className="cityInput"
        //       placeholder="Search city..."
        //       onChange={(e) => setText(e.target.value)}
        //     />
        //     <div className="search-icon" onClick={search}>
        //       <img src={SearchIcon} alt="Search" />
        //     </div>
        //   </div>
    
        //   {error && <p className="error">{error}</p>}
    
        //   <div className="weather-body">
        //     <img src={icon} className="weather-icon" alt="icon" />
        //     <h1>{temp}°C</h1>
        //     <h2>{city}, {country}</h2>
    
        //     <div className="data-container">
        //       <div className="element">
        //         <p className="label">Humidity</p>
        //         <p className="value">{humidity}%</p>
        //       </div>
        //       <div className="element">
        //         <p className="label">Wind Speed</p>
        //         <p className="value">{wind} km/h</p>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div className='weather-container'>

        {/* Top Center - Search Bar */}
        <div className="top-bar">
          <input
            type="text"
            className="cityInput"
            placeholder="Search city..."
            onChange={(e) => setText(e.target.value)}
          />
          <div className="search-icon" onClick={search}>
            <img src={SearchIcon} alt="Search" />
          </div>
        </div>
      
        {/* Below Search - Time & Date */}
        {/* <div className="date-time">
          {new Date().toLocaleString()}
        </div> */}
        <div className="date-time">
  {new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} | {new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }).toUpperCase()}
</div>
      
        {/* Error Message */}
        {error && <p className="error">{error}</p>}
      
        {/* Main Body */}
        <div className="weather-body">
      
          {/* Left Section */}
          <div className="left-section">
            <img src={icon} className="weather-icon" alt="icon" />
            <h1>{temp}°C</h1>
            <h2>{city} , {country}</h2>
          </div>
      
          {/* Right Section */}
          <div className="right-section">
            <div className="data-container">
              <div className="element">
              <img src={HumidityIcon} alt="Humidity" className="data-icon" />
                <p className="label">Humidity</p>
                <p className="value">{humidity} %</p>
              </div>
              <div className="element">
              <img src={WindIcon} alt="Wind Speed" className="data-icon" />
                <p className="label">Wind Speed</p>
                <p className="value">{wind} km/h</p>
              </div>
            </div>
          </div>
      
        </div>
      
      </div>
      
      

      );
    }
    
    export default Weather;