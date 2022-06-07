import React, { useEffect, useState } from 'react';
import { Block, Container, Input, SearchBar, Wrapper } from '../styles';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { fetchCocktails, fetchMeals } from '../services/api';
import AppCard from './AppCard';

function AppSearch() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const getSearch = async () => {
      const meals = await fetchMeals(query);
      const cocktails = await fetchCocktails(query);
      setSearch([...meals, ...cocktails]);
    }
    getSearch();
  }, [query]);

  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <Block>
            <SearchBar>
              <Input
                type='text'
                placeholder="Search by recipe"
                value={ query }
                onChange={ (e) => setQuery(e.target.value)}
              />
            </SearchBar>
            <Block>
              {query && search.map((item) =>
                <AppCard
                  id={ item.idMeal || item.idDrink }
                  title={ item.strMeal || item.strDrink}
                  thumb={ item.strMealThumb || item.strDrinkThumb }
                  type={ (item.idMeal && 'meals') || (item.idDrink && 'cocktails') }
                />
              )}
            </Block>
          </Block>
        </Wrapper>
      </Container>
      <AppFooter />
    </>
  );
};

export default AppSearch;
