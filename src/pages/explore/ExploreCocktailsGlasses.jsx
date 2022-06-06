import React, { useContext } from 'react';
import AppCard from '../../components/AppCard';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import Context from '../../context/context';
import { Block, Container, Form, Select, Wrapper } from '../../styles';

function ExploreCocktailsGlasses() {
  const { drinks, drinksGlasses } = useContext(Context);
  console.log(drinksGlasses);
  return (
      <>
      <AppHeader />
      <Container>
        <Wrapper>
        <Form>
            <Select>
              <option value=''>All</option>
              {drinksGlasses.map((glass, index) =>
                <option
                  key={index}
                  value={glass.strGlass}>
                    {glass.strGlass}
                </option>
              )}
            </Select>
          </Form>
          <Block>
            {drinks.map((drink, index) =>
              index < 24 && <AppCard
                key={ drink.idDrink }
                id={ drink.idDrink }
                title={ drink.strDrink }
                thumb={ drink.strDrinkThumb }
                type='drinks'
              />
            )}
          </Block>
        </Wrapper>
      </Container>
      <AppFooter />
    </>
  );
};

export default ExploreCocktailsGlasses;