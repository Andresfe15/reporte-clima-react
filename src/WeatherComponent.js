import React, { useState } from 'react';
import axios from 'axios';
import './WeatherComponent.css';

const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'd197d462041f00867a5fd95169ff3102'; 

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${apiKey}&units=metric`);
      setWeather(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const clearFields = () => {
    setCity('');
    setWeather(null);
    setError(null);
  };

  return (
    <div className="weather-container">
      <h1>Consulta del Clima</h1>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Ingresa una ciudad" 
        className="weather-input"
      />
      <div className='botones'>
        <button onClick={fetchWeather} className="weather-button">Consultar</button>
        <button onClick={clearFields} className="weather-button clear-button">Borrar</button>
      </div>
      {loading && <p>Cargando...</p>}
      {error && <p>Error al obtener los datos: {error.message}</p>}
      {weather && (
        <div className="weather-info">
          <h2>Clima en {weather.name}, {weather.sys.country}</h2>
          <p>Temperatura: {weather.main.temp} °C</p>
          <p>Humedad: {weather.main.humidity}%</p>
          <p>Condiciones: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
