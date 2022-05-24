import React from 'react';
import { Header } from '../styles';
import images from '../helpers/images';

function AppHeader() {
  return (
    <Header>
      <img
        src={ images.logo.horizontal.src }
        alt={ images.logo.horizontal.alt }
      />
      <div>
        <img src={images.loupe.src} alt={images.loupe.alt} />
        <img src={images.menu.src} alt={images.menu.alt} />
      </div>
    </Header>
  );
};

export default AppHeader;
