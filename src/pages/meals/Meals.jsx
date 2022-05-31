import React, { useEffect, useState } from 'react';
import AppCard from '../../components/AppCard';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import { fetchMealCategories, fetchMeals } from '../../services/api';
import { Container, Wrapper } from '../../styles';

function Meals() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getMeals = async () => {
      const recommendedMeals = await fetchMeals('');
      setMeals(recommendedMeals);
    };

    const getCategories = async () => {
      const mealsCategories = await fetchMealCategories();
      setCategories(mealsCategories);
    };
    getMeals();
    getCategories();
    
  }, []);
  
  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <section>
            {meals.map((meal, index) =>
              index < 24 && <AppCard
                key={ meal.idMeal }
                recipeId={ meal.idMeal }
                recipeTitle={ meal.strMeal }
                recipeThumb={ meal.strMealThumb }
                recipeType='meals'
              />
            )}
            </section>
        </Wrapper>
      </Container>
      <AppFooter />
    </>
  );
};

export default Meals;
