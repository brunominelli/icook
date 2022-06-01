import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppHeader from '../../components/AppHeader';
import Context from '../../context/context';
import { formatIngredients } from '../../helpers/functions';
import images from '../../helpers/images';
import { fetchMealsDetails } from '../../services/api';
import { Container, Recipe, Row, Thumbnail, Title, Wrapper } from '../../styles';

function MealsDetails() {
  const { id } = useParams();
  const { recipe, setRecipe, ingredients, setIngredients } = useContext(Context);

  useEffect(() => {
    const getDetails = async () => {
      const recipeDetails = await fetchMealsDetails(id);
      setRecipe(recipeDetails);

      if (recipeDetails) {
        const recipeIngredients = formatIngredients(recipeDetails);
        setIngredients(recipeIngredients);
      }
    };
    getDetails();
  }, []);

  console.log(recipe);
  console.log(ingredients);

  return (
    <>
      <AppHeader />
        <Container>
          <Wrapper>
            <Recipe>
              <Thumbnail>
                <img src={ recipe.strMealThumb } alt={ `${recipe.strMeal} Thumb` } />
                <figcaption>
                  <Title>{ recipe.strMeal }</Title>
                  <Row>
                    <img src={ images.heart.src } alt={ images.heart.alt } />
                    <img src={ images.share.src } alt={ images.share.alt } />
                  </Row>
                </figcaption>
              </Thumbnail>
              <Title>Ingredients</Title>
              {ingredients.map((ingredient) => <li>{ingredient}</li>)}
              <Title>Instructions</Title>
              <p>{recipe.strInstructions}</p>
            </Recipe>
          </Wrapper>
        </Container>
    </>
  );
};

export default MealsDetails;
