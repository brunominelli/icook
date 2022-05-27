import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import Cocktails from '../pages/cocktails/Cocktails';
import Explore from '../pages/explore/Explore';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Meals from '../pages/meals/Meals';
import Recipes from '../pages/Recipes';
import Register from '../pages/Register';
import ExploreMeals from '../pages/explore/ExploreMeals';
import ExploreMealsIngredients from '../pages/explore/ExploreMealsIngredients';
import ExploreMealsNacionalities from '../pages/explore/ExploreMealsNacionalities';
import ExploreCocktails from '../pages/explore/ExploreCocktails';
import ExploreCocktailsIngredients from '../pages/explore/ExploreCocktailsIngredients';

function Main() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/cocktails' element={<Cocktails />} />
        <Route path='/explore/meals/nacionalities' element={<ExploreMealsNacionalities />} />
        <Route path='/explore/meals/ingredients' element={<ExploreMealsIngredients />} />
        <Route path='/explore/meals' element={<ExploreMeals />} />
        <Route path='/explore/cocktails/ingredients' element={<ExploreCocktailsIngredients />} />
        <Route path='/explore/cocktails' element={<ExploreCocktails />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/meals' element={<Meals />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default Main;
