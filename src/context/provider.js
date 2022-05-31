import React, { useState } from 'react';
import { fetchCocktails, fetchMeals, fetchRandomCocktail, fetchRandomMeal } from '../services/api';
import Context from './context';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [recipe, setRecipe] = useState({});

  const object = {
    id: '',
    type: '',
    nationality: '',
    category: '',
    alcoholicOrNot: '',
    name: '',
    image: '',
    doneDate: '',
    tags: '',
  };

  const randomRecipe = async (type) => {
    let recipe;
    const meal = await fetchRandomMeal();
    const cocktail = await fetchRandomCocktail();
    if (type === 'meal') recipe = meal[0].idMeal;
    if (type === 'cocktail') recipe = cocktail[0].idDrink;
    setRecipe(recipe);
  }

  const setStorage = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('drinksToken', 1);
    localStorage.setItem('inProgressRecipes', []);
    localStorage.setItem('doneRecipes', JSON.stringify([object]));
    localStorage.setItem('favoriteRecipes', JSON.stringify([object]));
  }

  const formatIngredients = () => {
    const entries = Object.entries(recipe);
    const items = [];
    const measures = [];

    entries.forEach((entry) => {
      if (entry[0].includes('strIngredient') && entry[1] !== "") {
        items.push(entry[1]);
      }
  
      if (entry[0].includes('strMeasure') && entry[1] !== " " && entry[1] !== "") {
        measures.push(entry[1]);
      }
    });

    const ingredients = { items, measures };
    return ingredients;
  }

  useState( async () => {
    const mealsAPI = await fetchMeals('');
    const drinksAPI = await fetchCocktails('');
    setMeals(mealsAPI);
    setDrinks(drinksAPI);
    setStorage();
  }, [])

  const contextValue = {
    meals,
    drinks,
    user,
    setUser,
    recipe,
    object,
    setRecipe,
    randomRecipe,
    formatIngredients,
  }

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
