import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import Context from '../../context/context';
import images from '../../helpers/images';
import { Block, Container, Wrapper } from '../../styles';

function ExploreCocktails() {
  const { recipe, randomRecipe } = useContext(Context);

  useEffect(() => { randomRecipe('cocktail') }, []);

  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <Block>
            <Link to='/explore/cocktails/ingredients'>
              <img src={ images.ingredients.src } alt={ images.ingredients.alt }/>
              <p>Ingredients</p>
            </Link>
            <Link to={`/cocktails/${recipe}`}>
              <img src={ images.surprise.src } alt={ images.surprise.alt }/>
              <p>Surprise-me!</p>
            </Link>
          </Block>
        </Wrapper>
      </Container>
      <AppFooter />
    </>
  );
};

export default ExploreCocktails;
