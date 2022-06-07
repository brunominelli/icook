import React, { useContext, useEffect, useState } from 'react';
import AppCard from '../../components/AppCard';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import Context from '../../context/context';
import { fetchMeals } from '../../services/api';
import { Block, Container, Form, Select, Wrapper } from '../../styles';

function ExploreMealsNacionalities() {
  const { meals, mealsNacionalities } = useContext(Context);

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const getSearch = async () => {
      const recipe = await fetchMeals(query, 'nacionality');
      setSearch(recipe);
    }
    getSearch();
  }, [query]);


  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <Form>
            <Select onChange={ (e) => setQuery(e.target.value) }>
              <option value=''>All</option>
              {mealsNacionalities.map((nacionaty, index) =>
                <option
                  key={index}
                  value={nacionaty.strArea}>
                    {nacionaty.strArea}
                </option>
              )}
            </Select>
          </Form>
          <Block>
            {(!query && meals)
              ? meals.map((meal, index) =>
                index < 24 && <AppCard
                  key={ meal.idMeal }
                  id={ meal.idMeal }
                  title={ meal.strMeal }
                  thumb={ meal.strMealThumb }
                  type='meals'
                />
              ): (query && search) && search.map((recipe) =>
                <AppCard
                  key={ recipe.idMeal }
                  id={ recipe.idMeal }
                  title={ recipe.strMeal }
                  thumb={ recipe.strMealThumb }
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

export default ExploreMealsNacionalities;
