import { render } from '@testing-library/react';
import React from 'react';
import CurrentData from '.';

describe('the CurrentData function', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CurrentData temp={898} pressure={9898} humidity={9998} />);
    expect(asFragment).toMatchSnapshot();
  });
});
