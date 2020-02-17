import { render } from '@testing-library/react';
import React from 'react';
import CarouselSlide from '.';

describe('the carousel slide function', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CarouselSlide temp={898} pressure={9898} humidity={9998} />);
    expect(asFragment).toMatchSnapshot();
  });
});
