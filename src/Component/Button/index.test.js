import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Button from './index';

describe('the Button component', () => {
  it('should render button correctly', () => {
    const { asFragment } = render(<Button testId="test-btn">Test text</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
