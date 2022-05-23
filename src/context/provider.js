import React, { useState } from 'react';
import { fetchDrinks, fetchMeals } from '../services/api';
import Context from './context';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const user = { username: '', email: '', password: '' };
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
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('inProgressRecipes', []);
    localStorage.setItem('doneRecipes', JSON.stringify([recipes]));
    localStorage.setItem('favoriteRecipes', JSON.stringify([recipes]));
  }

  useState( async () => {
    const mealsAPI = await fetchMeals('');
    const drinksAPI = await fetchDrinks('');
    setMeals(mealsAPI);
    setDrinks(drinksAPI);
    setStorage();
  }, [])

  const contextValue = {
    meals,
    drinks,
  }

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
