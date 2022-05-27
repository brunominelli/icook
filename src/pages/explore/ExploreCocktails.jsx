import React from 'react';
import { Link } from 'react-router-dom';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import images from '../../helpers/images';
import { Container, Wrapper } from '../../styles';

function ExploreCocktails() {
  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <Link to='/explore/cocktails/ingredients'>
            <img src={ images.ingredients.src } alt={ images.ingredients.alt }/>
            <p>Ingredients</p>
          </Link>
          <Link to=''>
            <img src={ images.surprise.src } alt={ images.surprise.alt }/>
            <p>Surprise-me!</p>
          </Link>
        </Wrapper>
      </Container>
      <AppFooter />
    </>
  );
};

export default ExploreCocktails;
