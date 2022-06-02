import React from 'react';
import { Link } from 'react-router-dom';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import images from '../../helpers/images';
import { Block, Container, Wrapper } from '../../styles';

function Explore() {
  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <Block>
            <Link to='/explore/meals'>
              <img src={ images.meal.src } alt={ images.meal.alt } />
              <p>Meals</p>
            </Link>
            <Link to='/explore/cocktails'>
              <img src={ images.cocktail.src } alt={ images.cocktail.alt } />
              <p>Cocktails</p>
            </Link>
          </Block>
        </Wrapper>
      </Container>
      <AppFooter />
    </>
  );
};

export default Explore;
