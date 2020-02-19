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
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <GeoConverted />
          </Route>
          <Route exact path="/getWeatherData">
            <WeatherData />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
