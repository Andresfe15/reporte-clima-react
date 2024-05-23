import React from 'react';
import WeatherComponent from './WeatherComponent';

const App = () => {
  return (
    <div className="App">
      <h1>Mi aplicación del clima:</h1>
      <header className="App-header">
        <WeatherComponent />
      </header>
    </div>
  );
};

export default App;
