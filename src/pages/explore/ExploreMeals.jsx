import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import Context from '../../context/context';
import images from '../../helpers/images';
import { Block, Container, Wrapper } from '../../styles';

function ExploreMeals() {
  const { recipe, randomRecipe } = useContext(Context);

  useEffect(() => { randomRecipe('meal') }, []);

  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <Block>
            <Link to='/explore/meals/ingredients'>
              <img src={ images.ingredients.src } alt={ images.ingredients.alt }/>
              <p>Ingredients</p>
            </Link>
            <Link to='/explore/meals/nacionalities'>
              <img src={ images.flag.src } alt={ images.flag.alt }/>
              <p>Nacionalities</p>
            </Link>
            <Link to={`/meals/${recipe}`}>
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

export default ExploreMeals;
