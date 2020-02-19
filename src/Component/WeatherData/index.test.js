import { render } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import WeatherData from './index';
import useCurrentWeatherData from '../../hooks/useCurrentWeatherData';

describe('the getWeather data fruntion', () => {
  const mockAxios = jest.spyOn(axios, 'get');
  // mockAxios.mockResolvedValue({
  //     data: {
  //       main: {
  //         temp: 294.08,
  //         feels_like: 292.6,
  //         temp_min: 293.15,
  //         temp_max: 295.15,
  //         pressure: 1020,
  //         humidity: 49,
  //       },
  //     },
  //   });
  // const mockLat = 99.86; const mockLong = 98.5;
  // const apiURL = `http://api.openweathermap.org/data/2.5/weather?lat=${mockLat}&lon=${mockLong}&appid=fad7fd3a00475da64538a80de84be99d`;
  // // const mockLocalStoreGet = jest.spyOn(localStorage, 'setItem');
  // useCurrentWeatherData = jest.fn().mockReturnValue([90, 90, 90, false]);


  it('should render correctly', () => {
    const { asFragment } = render(<WeatherData latitude={99.86} longitude={98.5}>  </WeatherData>);
    expect(asFragment).toMatchSnapshot();
  });

  it('should display Loading!... when the api call is not complete yet', () => {
    const { container, getByText } = render(<WeatherData latitude={99.86} longitude={98.5}>  </WeatherData>);
    mockAxios.mockRejectedValue();
    expect(container.innerHTML).toBe('<div>Loading ...</div>');
  });
});
