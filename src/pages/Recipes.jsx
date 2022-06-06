import React, { useEffect, useState } from 'react';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import AppCard from '../components/AppCard';
import { Block, Container, Title, Wrapper } from '../styles';
import { fetchMeals, fetchCocktails} from '../services/api';

function Recipes() {
  const [meals, setMeals] = useState([]);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const recommendedMeals = await fetchMeals('');
      setMeals(recommendedMeals);
    }

    const getCocktails = async () => {
      const recommendedCocktails = await fetchCocktails('');
      setCocktails(recommendedCocktails);
    }

    getMeals();
    getCocktails();

  }, []);

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
