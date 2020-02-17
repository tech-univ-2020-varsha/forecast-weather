import React from 'react';
import './index.css';

const CarouselSlide = ({ temp, pressure, humidity }) => (
  <div className="carousel">
    <div className="carouselData">
      T:
      {' '}
      {temp}
    </div>
    <div className="carouselData">
      P:
      {' '}
      {pressure}
    </div>
    <div className="carouselData">
      H:
      {' '}
      {humidity}
    </div>

  </div>
);


export default CarouselSlide;
