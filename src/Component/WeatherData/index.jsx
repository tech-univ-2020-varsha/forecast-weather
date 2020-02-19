import React from 'react';
import Slider from 'react-slick';
import useCurrentWeatherData from '../../hooks/useCurrentWeatherData';
import CurrentData from './CurrentData';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselSlide from './CarouselSlide';


const WeatherData = () => {
  const latitude = localStorage.getItem('lat') || 0;
  const longitude = localStorage.getItem('long') || 0;
  console.log(latitude, longitude);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const apiURL = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=fad7fd3a00475da64538a80de84be99d`;

  const [temp, pressure, humidity, completed] = useCurrentWeatherData(apiURL);
  console.log('completed', completed);
  if (completed) {
    const weatherDataList = JSON.parse(localStorage.getItem('weatherData') || '[]');

    weatherDataList.push({ temp, pressure, humidity });
    // localStorage.setItem('weatherData', JSON.stringify([]));
    localStorage.setItem('weatherData', JSON.stringify(weatherDataList));
    return (
      <div>
        <div className="weatherData">
          <CurrentData temp={temp} pressure={pressure} humidity={humidity} />
        </div>
        <div className="slider">
          <Slider {...settings}>
            { weatherDataList.map((data) => (
              <CarouselSlide temp={data.temp} pressure={data.pressure} humidity={data.humidity} />

            ))}
          </Slider>
        </div>

      </div>

    );
  }

  { return <div>Loading ...</div>; }
};


export default WeatherData;
