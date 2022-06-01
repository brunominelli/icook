import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import Context from '../../context/context';
import { formatIngredients, formatInstructions } from '../../helpers/functions';
import images from '../../helpers/images';
import { fetchMealsDetails } from '../../services/api';
import { Container, Recipe, Row, Thumbnail, Title, Wrapper } from '../../styles';

function MealsDetails() {
  const { id } = useParams();
  const {
    recipe,
    setRecipe,
    ingredients,
    setIngredients,
    instructions,
    setInstructions
  } = useContext(Context);

  useEffect(() => {
    const getDetails = async () => {
      const recipeDetails = await fetchMealsDetails(id);
      setRecipe(recipeDetails);
      
      if (recipeDetails) {
        const recipeIngredients = formatIngredients(recipeDetails);
        const recipeInstructions = formatInstructions(recipeDetails);
        setIngredients(recipeIngredients);
        setInstructions(recipeInstructions);
      }
    };
    getDetails();
  }, []);

  console.log(instructions);

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
              {ingredients
                .map((ingredient, index) =>
                  <li key={ index }>{ingredient}</li>
              )}
              <Title>Instructions</Title>
              {instructions
                .map((instruction, index) =>
                  <p key={ index }>{ instruction }</p>
              )}
            </Recipe>
          </Wrapper>
        </Container>
      <AppFooter />
    </>
  );
};

export default MealsDetails;
