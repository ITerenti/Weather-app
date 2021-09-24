import React from 'react';
import './MainCard.css'

const MainCard = ({day}) => {

    return(
        <div className="maincard">
            <div className='maincardheader'>
                <p className='mccityname'>Iasi</p>
                <p className='mcdayname'>{day}</p>
                <p className='mcweather'>Cloudy</p>
            </div>
            <div className="cardcontent">
                <div className='mcinfo'>
                    <p>Temp: 22°C</p>
                    <p>Precipitation: 10%</p>
                    <p>Humidity: 60%</p>
                    <p>Wind: 18 km/h</p>
                </div>
            <img className="mcimg" src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            width="200" height="200" alt="weather icon"/>
            </div>
        </div>
    );
}

export default MainCard;