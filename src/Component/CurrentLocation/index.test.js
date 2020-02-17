/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import React from 'react';
import { render, renderer, fireEvent } from '@testing-library/react';
import { geolocated } from 'react-geolocated';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { GeoConverted, CurrentLocation } from './index';

describe('the Current Location component', () => {
  const mockCurrentLocationProps = {
    isGeolocationAvailable: true,
    isGeolocationEnabled: true,
    coords: {
      accuracy: 130,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: 10,
      longitude: 10,
      speed: null,
    },
  };
  // jest.mock('react-geolocated', () => ({
  //   geolocated(hocConf) {
  //     return (component) => {
  //       component.defaultProps = {
  //         ...component.defaultProps,
  //         isGeolocationAvailable: true,
  //         isGeolocationEnabled: true,
  //         coords: {
  //           accuracy: 130,
  //           altitude: null,
  //           altitudeAccuracy: null,
  //           heading: null,
  //           latitude: 10,
  //           longitude: 10,
  //           speed: null,
  //         },
  //       };
  //       return component;
  //     };
  //   },
  // }));


  it('should render component correctly', () => {
    const mockSetLatitude = jest.fn();
    const mockSetLongitude = jest.fn();
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router history={history}>
        <CurrentLocation
          isGeolocationAvailable={mockCurrentLocationProps.isGeolocationAvailable}
          isGeolocationEnabled={mockCurrentLocationProps.isGeolocationEnabled}
          coords={mockCurrentLocationProps.coords}
          setLongitude={mockSetLongitude}
          setLatitude={mockSetLatitude}
        />
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call the setLongitude function with correct latitude', () => {
    const history = createMemoryHistory();
    const mockSetLatitude = jest.fn();
    const mockSetLongitude = jest.fn();
    const { asFragment } = render(
      <Router history={history}>
        <CurrentLocation
          isGeolocationAvailable={mockCurrentLocationProps.isGeolocationAvailable}
          isGeolocationEnabled={mockCurrentLocationProps.isGeolocationEnabled}
          coords={mockCurrentLocationProps.coords}
          setLongitude={mockSetLongitude}
          setLatitude={mockSetLatitude}
        />
      </Router>,
    );
    expect(mockSetLatitude).toHaveBeenCalledWith(10);
    expect(mockSetLongitude).toHaveBeenCalledWith(10);
  });


  it('should link to other page on', () => {
    const history = createMemoryHistory();
    const mockSetLatitude = jest.fn();
    const mockSetLongitude = jest.fn();
    const { getByTestId } = render(
      <Router history={history}>
        <CurrentLocation
          isGeolocationAvailable={mockCurrentLocationProps.isGeolocationAvailable}
          isGeolocationEnabled={mockCurrentLocationProps.isGeolocationEnabled}
          coords={mockCurrentLocationProps.coords}
          setLongitude={mockSetLongitude}
          setLatitude={mockSetLatitude}
        />
      </Router>,
    );
    expect(document.querySelector('a').getAttribute('href')).toBe('/getWeatherData');
  });

  // it('should  ');
});
