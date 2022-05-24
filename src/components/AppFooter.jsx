import React from 'react';
import images from '../helpers/images';
import { Footer } from '../styles';

function AppFooter() {
  return (
    <Footer>
      <img src={images.home.src} alt={images.home.alt} />
      <img src={images.meal.src} alt={images.meal.alt} />
      <img src={images.explore.src} alt={images.explore.alt} />
      <img src={images.drink.src} alt={images.drink.alt} />
      <img src={images.heart.src} alt={images.heart.alt} />
    </Footer>
  );
};

export default AppFooter;
