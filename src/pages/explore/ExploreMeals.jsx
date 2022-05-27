import React from 'react';
import { Link } from 'react-router-dom';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import images from '../../helpers/images';
import { Container, Wrapper } from '../../styles';

function ExploreMeals() {
  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <Link to='/explore/meals/ingredients'>
            <img src={ images.ingredients.src } alt={ images.ingredients.alt }/>
            <p>Ingredients</p>
          </Link>
          <Link to='/explore/meals/nacionalities'>
            <img src={ images.flag.src } alt={ images.flag.alt }/>
            <p>Nacionalities</p>
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

export default ExploreMeals;
