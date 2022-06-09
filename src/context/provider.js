import React, { useState } from 'react';
import { fetchCocktailLists, fetchCocktails, fetchMealLists, fetchMeals, fetchRandomCocktail, fetchRandomMeal } from '../services/api';
import Context from './context';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [mealsIngredients, setMealsIngredients] = useState([]);
  const [mealsNacionalities, setMealsNacionalities] = useState([]);
  const [cocktails, setCocktails] = useState([]);
  const [cocktailsIngredients, setCocktailsIngredients] = useState([]);
  const [cocktailsGlasses, setCocktailsGlasses] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const object = {
    id: '',
    name: '',
    image: '',
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
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('favoriteRecipes', JSON.stringify([object]));
  }

  useState( async () => {
    const meals = await fetchMeals('');
    const mealsIngredients = await fetchMealLists('i');
    const mealsNacionalities = await fetchMealLists('a');
    const cocktails = await fetchCocktails('');
    const cocktailsIngredients = await fetchCocktailLists('i');
    const cocktailsGlasses = await fetchCocktailLists('g');
    setMeals(meals);
    setMealsIngredients(mealsIngredients);
    setMealsNacionalities(mealsNacionalities);
    setCocktails(cocktails);
    setCocktailsIngredients(cocktailsIngredients)
    setCocktailsGlasses(cocktailsGlasses);
    setStorage();
  }, [])

  const contextValue = {
    meals,
    mealsIngredients,
    mealsNacionalities,
    cocktails,
    cocktailsIngredients,
    cocktailsGlasses,
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
