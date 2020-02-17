import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GeoConverted } from './Component/CurrentLocation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import WeatherData from './Component/WeatherData';

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <GeoConverted setLatitude={setLatitude} setLongitude={setLongitude} />
          </Route>
          <Route exact path="/getWeatherData">
            <WeatherData latitude={latitude} longitude={longitude} />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
