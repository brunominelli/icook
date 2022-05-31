import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppHeader from '../../components/AppHeader';
import Context from '../../context/context';
import { fetchMealsDetails } from '../../services/api';
import { Container, Recipe, Wrapper } from '../../styles';

function MealsDetails() {
  const { id } = useParams();
  const { recipe, setRecipe, formatIngredients, object } = useContext(Context);
  const [ingredients, setIngredients] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      const recipeDetails = await fetchMealsDetails(id);
      setRecipe(recipeDetails);
    };
    getDetails();
    const recipeIngredients = formatIngredients();
    setIngredients(recipeIngredients);
  }, []);

  console.log(recipe);
  console.log(object);
  console.log(ingredients);
  return (
    <>
      <AppHeader />
      <Container>
        <Wrapper>
          <Recipe>
            <h1>{recipe.strMeal}</h1>
            <h1>Ingredients</h1>
            <h1>Instructions</h1>
            <p>{recipe.strInstructions}</p>
          </Recipe>
        </Wrapper>
      </Container>
    </>
  );
};

export default MealsDetails;
