import React, { useEffect, useState } from 'react';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import AppCard from '../components/AppCard';
import { Container, Wrapper } from '../styles';
import { fetchMeals, fetchDrinks} from '../services/api';

function Recipes() {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const recommendedMeals = await fetchMeals('');
      setMeals(recommendedMeals);
    }

    const getDrinks = async () => {
      const recommendedDrinks = await fetchDrinks('');
      setDrinks(recommendedDrinks);
    }

    getMeals();
    getDrinks();

  }, []);

  return (
    <>
      <AppHeader />
        <Container>
          <Wrapper>
            <section>
              <h1>Recommended Meals</h1>
              {meals.map((meal) =>
                <AppCard
                  key={ meal.idMeal }
                  recipeTitle={ meal.strMeal }
                  recipeThumb={ meal.strMealThumb }
                />
              )}
            </section>
            <section>
              <h1>Recommended Coctails</h1>
              {drinks.map((drink) =>
                <AppCard
                  key={ drink.idDrink }
                  recipeTitle={ drink.strDrink }
                  recipeThumb={ drink.strDrinkThumb }
                />
              )}
            </section>
          </Wrapper>
        </Container>
      <AppFooter />
    </>
  );
};

export default Recipes;
