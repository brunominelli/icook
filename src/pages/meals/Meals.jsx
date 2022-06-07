import React, { useContext } from 'react';
import AppCard from '../../components/AppCard';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import Context from '../../context/context';
import { Block, Container, Wrapper } from '../../styles';

function Meals() {
  const { meals } = useContext(Context);
 
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
