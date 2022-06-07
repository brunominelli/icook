import React, { useContext, useEffect, useState } from 'react';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import AppCard from '../components/AppCard';
import { Block, Container, Title, Wrapper } from '../styles';
import { fetchMeals, fetchCocktails} from '../services/api';
import Context from '../context/context';

function Recipes() {
  const { meals, cocktails } = useContext(Context);

  return (
    <>
      <AppHeader />
        <Container>
          <Wrapper>
            <Title>Recommended Meals</Title>
            <Block>
              {meals.map((meal, index) =>
                index < 4 && <AppCard
                key={ meal.idMeal }
                id={ meal.idMeal }
                title={ meal.strMeal }
                thumb={ meal.strMealThumb }
                type='meals'
                />
              )}
            </Block>
            <Title>Recommended Cocktails</Title>
            <Block>
              {cocktails.map((cocktail, index) =>
                index < 4 && <AppCard
                key={ cocktail.idDrink }
                id={ cocktail.idDrink }
                title={ cocktail.strDrink }
                thumb={ cocktail.strDrinkThumb }
                type='cocktails'
                />
              )}
            </Block>
          </Wrapper>
        </Container>
      <AppFooter />
    </>
  );
};

export default Recipes;
