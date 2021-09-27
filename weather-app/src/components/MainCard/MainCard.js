import React from 'react';
import './MainCard.css'

const MainCard = ({info, dayName}) => {

    return(
        <div className="maincard">
            <div className='maincardheader'>
                <p className='mccityname'>Iasi</p>
                <p className='mcdayname'>{dayName}</p>
                <p className='mcweather'>{info.weather[0].main}</p>
            </div>
            <div className="cardcontent">
                <div className='mcinfo'>
                    <p>Day: {Math.round(info.temp.day)}°C</p>
                    <p>Night: {Math.round(info.temp.night)}°C</p>
                    <p>Humidity: {info.humidity}%</p>
                    <p>Wind: {Math.round(info.wind_speed)} km/h</p>
                </div>
            <img className="mcimg" src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
            alt="weather icon"/>
            </div>
        </div>
    );
}

export default MainCard;