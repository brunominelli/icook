import React, { useContext } from 'react';
import AppCard from '../../components/AppCard';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import Context from '../../context/context';
import { Block, Container, Wrapper } from '../../styles';

function ExploreMealsIngredients() {
  const { mealsIngredients } = useContext(Context);
  
  return (
  <>
    <AppHeader />
    <Container>
      <Wrapper>
        <Block>
          {mealsIngredients.map((ingredient, index) =>
            index < 24 && <AppCard
            key={+ingredient.idIngredient}
            id={+ingredient.idIngredient}
            title={ingredient.strIngredient}
            thumb={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
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

export default ExploreMealsIngredients;
