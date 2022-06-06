import React, { useState } from 'react';
import { fetchCocktailLists, fetchCocktails, fetchMealLists, fetchMeals, fetchRandomCocktail, fetchRandomMeal } from '../services/api';
import Context from './context';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [mealsIngredients, setMealsIngredients] = useState([]);
  const [mealsNacionalities, setMealsNacionalities] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [drinksIngredients, setDrinksIngredients] = useState([]);
  const [drinksGlasses, setDrinksGlasses] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', password: '' });

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

  useState( async () => {
    const meals = await fetchMeals('');
    const mealsIngredients = await fetchMealLists('i');
    const mealsNacionalities = await fetchMealLists('a');
    const drinks = await fetchCocktails('');
    const drinksIngredients = await fetchCocktailLists('i');
    const drinksGlasses = await fetchCocktailLists('g');
    setMeals(meals);
    setMealsIngredients(mealsIngredients);
    setMealsNacionalities(mealsNacionalities);
    setDrinks(drinks);
    setDrinksIngredients(drinksIngredients)
    setDrinksGlasses(drinksGlasses);
    setStorage();
  }, [])

  const contextValue = {
    meals,
    mealsIngredients,
    mealsNacionalities,
    drinks,
    drinksIngredients,
    drinksGlasses,
    user,
    setUser,
    recipe,
    object,
    setRecipe,
    randomRecipe,
    ingredients,
    setIngredients,
    instructions,
    setInstructions,
  }

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
