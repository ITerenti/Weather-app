import './App.css';
import WeatherCard from './components/WeatherCard/WeatherCard';
import MainCard from './components/MainCard/MainCard';
import React from 'react';
import config from './config.js'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      today: new Date(),
    }
  }

  getWeatherData(){
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=47.15&lon=27.60&exclude=hourly,alerts,minutely,current&units=metric&appid=${config.APIKEY}`)
    .then(response => response.json())
    .then(data => { 
      this.setState({weatherInfo: data.daily}) })
    .catch(err => console.log('err name: ' + err));
  }

  componentDidMount(){
    this.getWeatherData();
  }

  render(){
    if(!this.state.weatherInfo){
      return(
        <p>Loading...</p>
      );
    }
    else{
      const { today, weatherInfo } = this.state;
      return (
    
        <div className='App'>
          <h1>Hello, welcome to my Weather app!</h1>
          <h3>Here is how the weather looks like in Iasi</h3>
          <MainCard info={weatherInfo[0]} dayName={days[today.getDay()]} />
          <div className='cardlist'>
          <WeatherCard info={this.state.weatherInfo[1]} dayName={days[this.state.today.getDay() + 1]}/>
          <WeatherCard info={this.state.weatherInfo[2]} dayName={days[this.state.today.getDay() + 2]}/>
          <WeatherCard info={this.state.weatherInfo[3]} dayName={days[this.state.today.getDay() + 3]}/>
          <WeatherCard info={this.state.weatherInfo[4]} dayName={days[this.state.today.getDay() + 4]}/>
          </div>
        </div>
        );
    }

  }
}

export default App;
