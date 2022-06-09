const fetchMeals = async (query, searchBy) => {
  let endpoint = '';
  switch (searchBy) {
    case 'ingredient': 
      endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;
      break;
    case 'category':
      endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`;
      break;
    case 'nacionality':
      endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`;
      break;
    default:
      endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
      break;
  }
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.meals) : Promise.reject(data);
};

const fetchMealLists = async (query) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/list.php?${query}=list`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.meals) : Promise.reject(data);
};

const fetchMealDetails = async (id) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.meals[0]) : Promise.reject(data);
};

const fetchRandomMeal = async () => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/random.php`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.meals) : Promise.reject(data);
};

const fetchCocktails = async (query, searchBy) => {
  let endpoint = '';
  switch (searchBy) {
    case 'ingredient': 
      endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`;
      break;
    case 'category':
      endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${query}`;
      break;
    case 'glass':
      endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${query}`;
      break;
    default:
      endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
      break;
  }
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.drinks) : Promise.reject(data);
};

const fetchCocktailLists = async (query) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/list.php?${query}=list`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.drinks) : Promise.reject(data);
}; 

const fetchCocktailDetails = async (id) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.drinks[0]) : Promise.reject(data);
};

const fetchRandomCocktail = async () => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.drinks) : Promise.reject(data);
};

export {
  fetchMeals,
  fetchMealLists,
  fetchMealDetails,
  fetchRandomMeal,
  fetchCocktails,
  fetchCocktailLists,
  fetchCocktailDetails,
  fetchRandomCocktail,
};
