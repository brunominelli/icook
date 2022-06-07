import React, { useContext, useEffect, useState } from 'react';
import AppCard from '../../components/AppCard';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import Context from '../../context/context';
import { fetchCocktails } from '../../services/api';
import { Block, Container, Form, Select, Wrapper } from '../../styles';

function ExploreCocktailsGlasses() {
  const { cocktails, cocktailsGlasses } = useContext(Context);
  
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const getSearch = async () => {
      const recipes = await fetchCocktails(query, 'glass');
      setSearch(recipes);
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
              {cocktailsGlasses.map((glass, index) =>
                <option
                  key={index}
                  value={glass.strGlass}>
                    {glass.strGlass}
                </option>
              )}
            </Select>
          </Form>
          <Block>
            {(!query && cocktails)
              ? cocktails.map((cocktail, index) =>
                index < 24 && <AppCard
                  key={ cocktail.idDrink }
                  id={ cocktail.idDrink }
                  title={ cocktail.strDrink }
                  thumb={ cocktail.strDrinkThumb }
                  type='cocktails'
                />
              ): (query && search) && search.map((recipe) =>
                <AppCard
                  key={ recipe.idDrink }
                  id={ recipe.idDrink }
                  title={ recipe.strDrink }
                  thumb={ recipe.strDrinkThumb }
                  type='cocktails'
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