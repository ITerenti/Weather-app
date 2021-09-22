import './App.css';
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
  return (
    <div className='App'>
      <h1>Hello, welcome to my Weater app!</h1>
      
      <div className='cardlist'>
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      </div>
    </div>
  );
}

export default App;
