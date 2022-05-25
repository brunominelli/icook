import React, { useEffect, useState } from 'react';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import AppCard from '../components/AppCard';
import { Wrapper } from '../styles';
import * as api from '../services/api';

function Recipes() {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const recommendedMeals = await api.fetchMeals('');
      setMeals(recommendedMeals);
    }

    const getDrinks = async () => {
      const recommendedDrinks = await api.fetchDrinks('');
      setDrinks(recommendedDrinks);
    }

    getMeals();
    getDrinks();

  }, []);

  return (
    <>
      <AppHeader />
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
      <AppFooter />
    </>
  );
};

export default Recipes;
