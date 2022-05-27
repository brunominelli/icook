import React from 'react';
import { Header } from '../styles';
import images from '../helpers/images';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <Header>
      <img
        src={ images.logo.horizontal.src }
        alt={ images.logo.horizontal.alt }
      />
      <div>
        <Link to='/recipes'>
          <img src={images.loupe.src} alt={images.loupe.alt} />
        </Link>
        <Link to='/recipes'>
          <img src={images.menu.src} alt={images.menu.alt} />
        </Link>
      </div>
    </Header>
  );
};

export default AppHeader;
