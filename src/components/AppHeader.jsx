import React from 'react';
import { Header } from '../styles';
import images from '../helpers/images';
import { useNavigate } from 'react-router-dom';

function AppHeader() {
  const navigate = useNavigate();

  return (
    <Header>
      <section>
        <img
          src={ images.logo.horizontal.src }
          alt={ images.logo.horizontal.alt }
          onClick={ () => navigate('/') }
        />
        <div>
          <img
            src={images.loupe.src}
            alt={images.loupe.alt}
            onClick={ () => navigate('/search')}
          />
        </div>
      </section>
    </Header>
  );
};

export default AppHeader;
