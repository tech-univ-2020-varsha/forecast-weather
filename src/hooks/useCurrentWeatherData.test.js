import Axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';
import useCurrentWeatherData from './useCurrentWeatherData';

describe('the useCurrentWeatherData hook', () => {
  it('should have made an api call', async () => {
    const mockAxios = jest.spyOn(Axios, 'get');
    mockAxios.mockResolvedValue({
      data: {
        main: {
          temp: 294.08,
          feels_like: 292.6,
          temp_min: 293.15,
          temp_max: 295.15,
          pressure: 1020,
          humidity: 49,
        },
      },
    });

    const { result, waitForNextUpdate } = renderHook(() => useCurrentWeatherData());
    await waitForNextUpdate();
    expect(mockAxios).toHaveBeenCalled();
    mockAxios.mockRestore();
  });


  it('should get the temp, pressure and humidity', async () => {
    const mockAxios = jest.spyOn(Axios, 'get');
    mockAxios.mockResolvedValue({
      data: {
        main: {
          temp: 294.08,
          feels_like: 292.6,
          temp_min: 293.15,
          temp_max: 295.15,
          pressure: 1020,
          humidity: 49,
        },
      },
    });
    const { result, waitForNextUpdate } = renderHook(() => useCurrentWeatherData());
    await waitForNextUpdate();
    expect(result.current[0]).toBe(294.08);
    expect(result.current[1]).toBe(1020);
    expect(result.current[2]).toBe(49);
    mockAxios.mockRestore();
  });
});
