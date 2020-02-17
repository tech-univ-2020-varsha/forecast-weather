import { render } from '@testing-library/react';
import React from 'react';
import WeatherData from './index';
import useCurrentWeatherData from '../../hooks/useCurrentWeatherData';


describe('the getWeather data fruntion', () => {
  useCurrentWeatherData = jest.fn(() => {});
  it('should render correctly', () => {
    const { asFragment } = render(<WeatherData latitude={99.86} longitude={98.5}>  </WeatherData>);
    expect(asFragment).toMatchSnapshot();
  });
});
