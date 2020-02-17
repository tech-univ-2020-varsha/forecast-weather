import React from 'react';
import './index.css';

const CurrentData = ({ temp, pressure, humidity }) => (
  <div className="currentData">
    <div className="dataItems">
      TEMPERATURE:
      {' '}
      {temp}
    </div>
    <div className="dataItems">
      PRESSURE:
      {' '}
      {pressure}
    </div>
    <div className="dataItems">
      HUMIDITY:
      {' '}
      {humidity}
    </div>
  </div>
);


export default CurrentData;
