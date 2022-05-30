import React, { useEffect, useState } from 'react';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import AppCard from '../components/AppCard';
import { Container, Wrapper } from '../styles';
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
            <h1>Recommended Meals</h1>
            <section>
              {meals.map((meal, index) =>
                index < 4 && <AppCard
                  key={ meal.idMeal }
                  recipeTitle={ meal.strMeal }
                  recipeThumb={ meal.strMealThumb }
                />
              )}
            </section>
            <h1>Recommended Cocktails</h1>
            <section>
              {cocktails.map((drink, index) =>
                index < 4 && <AppCard
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
