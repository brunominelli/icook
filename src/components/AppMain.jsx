import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cocktails from '../pages/cocktails/Cocktails';
import CocktailsDetails from '../pages/cocktails/CocktailsDetails';
import Explore from '../pages/explore/Explore';
import Meals from '../pages/meals/Meals';
import MealsDetails from '../pages/meals/MealsDetails';
import Recipes from '../pages/Recipes';
import ExploreMeals from '../pages/explore/ExploreMeals';
import ExploreMealsNacionalities from '../pages/explore/ExploreMealsNacionalities';
import ExploreCocktails from '../pages/explore/ExploreCocktails';
import ExploreCocktailsGlasses from '../pages/explore/ExploreCocktailsGlasses';
import AppSearch from './AppSearch';

function AppMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/explore/meals/nacionalities' element={<ExploreMealsNacionalities />} />
        <Route path='/explore/meals' element={<ExploreMeals />} />
        <Route path='/explore/cocktails/glasses' element={<ExploreCocktailsGlasses />} />
        <Route path='/explore/cocktails' element={<ExploreCocktails />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/cocktails/:id' element={<CocktailsDetails />} />
        <Route path='/cocktails' element={<Cocktails />} />
        <Route path='/meals/:id' element={<MealsDetails />} />
        <Route path='/meals' element={<Meals />} />
        <Route path='/search' element={<AppSearch />} />
        <Route exact path='/' element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppMain;
