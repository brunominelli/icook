import React, { useContext } from 'react';
import AppCard from '../../components/AppCard';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import Context from '../../context/context';
import { Block, Container, Wrapper } from '../../styles';

function ExploreCocktailsIngredients() {
  const { drinksIngredients } = useContext(Context);

  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <Block>
          {drinksIngredients.map((ingredient, index) =>
            index < 24 && <AppCard
            key={index}
            id={index}
            title={ingredient.strIngredient1}
            thumb={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}.png`}
            type='ingredient'
            />
          )}
          </Block>
        </Wrapper>
      </Container>
      <AppFooter />
    </>
  );
};

export default ExploreCocktailsIngredients;
