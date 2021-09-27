import React from 'react'
import './WeatherCard.css'
const WeatherCard = ( {info, dayName} ) => {

    return(
        <div className='wcard'>
            <p className='dayname'>{dayName}</p>
            <img src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
            width="100" height="100" alt="weather icon"/>
            <p className='weather'>{info.weather[0].main}</p>
            <div className='info'>
            <p>Day: {Math.round(info.temp.day)}°C</p>
            <p>Night: {Math.round(info.temp.night)}°C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Wind: {Math.round(info.wind_speed)} km/h</p>
            </div>
        </div>
    );
}

export default WeatherCard;