import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../styles';
import images from '../helpers/images';

function AppFooter() {
  return (
    <Footer>
      <Link to='/meals'>
        <img src={images.meal.src} alt={images.meal.alt}/>
      </Link>
      <Link to='/cocktails'>
        <img src={images.cocktail.src} alt={images.cocktail.alt}/>
      </Link>
      <Link to='/explore'>
        <img src={images.explore.src} alt={images.explore.alt}/>
      </Link>
    </Footer>
  );
};

export default AppFooter;
