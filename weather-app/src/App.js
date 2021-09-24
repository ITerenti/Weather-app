import './App.css';
import WeatherCard from './components/WeatherCard/WeatherCard';
import MainCard from './components/MainCard/MainCard';

function App() {
  return (
    <div className='App'>
      <h1>Hello, welcome to my Weather app!</h1>
      <MainCard day={'Sunday'}/>
      <div className='cardlist'>
      <WeatherCard day={'Monday'}/>
      <WeatherCard day={'Tuesday'}/>
      <WeatherCard day={'Wednesday'}/>
      <WeatherCard day={'Thursday'}/>
      </div>
    </div>
  );
}

export default App;
