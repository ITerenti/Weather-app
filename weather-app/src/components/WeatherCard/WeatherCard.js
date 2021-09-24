import React from 'react'
import './WeatherCard.css'
const WeatherCard = ( {day} ) => {

    return(
        <div className='wcard'>
            <p className='dayname'>{day}</p>
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            width="100" height="100" alt="weather icon"/>
            <p className='weather'>Cloudy</p>
            <div className='info'>
                <p>Temp: 22°C</p>
                <p>Precipitation: 10%</p>
                <p>Humidity: 60%</p>
                <p>Wind: 18 km/h</p>
            </div>
        </div>
    );
}

export default WeatherCard;