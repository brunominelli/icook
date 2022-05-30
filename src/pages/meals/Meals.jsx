import React, { useEffect, useState } from 'react';
import AppCard from '../../components/AppCard';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import { fetchMeals } from '../../services/api';
import { Container, Wrapper } from '../../styles';

function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const recommendedMeals = await fetchMeals('');
      setMeals(recommendedMeals);
    }
    getMeals();

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
                recipeTitle={ meal.strMeal }
                recipeThumb={ meal.strMealThumb }
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
