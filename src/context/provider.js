import React, { useState } from 'react';
import { fetchCocktails, fetchMeals, fetchRandomCocktail, fetchRandomMeal } from '../services/api';
import Context from './context';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [recipe, getRecipe] = useState('');

  const randomRecipe = async (type) => {
    let recipe;
    const meal = await fetchRandomMeal();
    const cocktail = await fetchRandomCocktail();
    if (type === 'meal') recipe = meal[0].idMeal;
    if (type === 'cocktail') recipe = cocktail[0].idDrink;
    getRecipe(recipe);
  }

  const recipes = {
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

  const setStorage = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('drinksToken', 1);
    localStorage.setItem('inProgressRecipes', []);
    localStorage.setItem('doneRecipes', JSON.stringify([recipes]));
    localStorage.setItem('favoriteRecipes', JSON.stringify([recipes]));
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
    randomRecipe,
  }

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
