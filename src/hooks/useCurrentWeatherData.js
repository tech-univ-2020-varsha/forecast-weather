import { useState, useEffect } from 'react';
import axios from 'axios';

const useCurrentWeatherData = (url) => {
  const [temp, setTemp] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(url);
        const weatherReport = result.data.main;
        setTemp(weatherReport.temp);
        setPressure(weatherReport.pressure);
        setHumidity(weatherReport.humidity);
        setCompleted(true);
      } catch (err) {
        setCompleted(false);
      }
    };
    getData();
  }, []);
  console.log('temp:', temp, 'press', pressure, 'humidity:', humidity, completed);
  return [temp, pressure, humidity, completed];
};

export default useCurrentWeatherData;
