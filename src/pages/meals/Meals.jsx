import React, { useEffect, useState } from 'react';
import AppCard from '../../components/AppCard';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import { fetchMealLists, fetchMeals } from '../../services/api';
import { Block, Container, Wrapper } from '../../styles';

function Meals() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getMeals = async () => {
      const recommendedMeals = await fetchMeals('');
      setMeals(recommendedMeals);
    };

    const getCategories = async () => {
      const mealsCategories = await fetchMealLists('c');
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
          <Block>
            {meals.map((meal, index) =>
              index < 24 && <AppCard
                key={ meal.idMeal }
                id={ meal.idMeal }
                title={ meal.strMeal }
                thumb={ meal.strMealThumb }
                type='meals'
              />
            )}
          </Block>
        </Wrapper>
      </Container>
      <AppFooter />
    </>
  );
};

export default Meals;
