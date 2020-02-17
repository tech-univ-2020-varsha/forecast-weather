import React from 'react';
import { geolocated } from 'react-geolocated';
import { Link } from 'react-router-dom';
import * as styles from './index.module.css';
import Button from '../Button/index';

const CurrentLocation = ({
  isGeolocationAvailable, isGeolocationEnabled, coords, setLongitude, setLatitude,
}) => {
  let enable = false;
  if (!(isGeolocationAvailable && isGeolocationEnabled)) {
    enable = false;
    return <div>CANNOT ACCESS THE CURRENT CORDS</div>;
  }
  if (coords) { enable = true; }
  if (enable) {
    setLongitude(coords.longitude);
    setLatitude(coords.latitude);
  }

  return (
    <div className={styles.weatherDataDiv}>
      <div className={styles.btnItem}>
        <Link to="/getWeatherData">
          <Button testId="getWeatherData">
            GET WEATHER DATA
            {' '}
          </Button>
        </Link>
      </div>

    </div>
  );
};

// export default CurrentLocation;

const GeoConverted = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(CurrentLocation);


export { GeoConverted, CurrentLocation };
