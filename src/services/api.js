const fetchMeals = async (query) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.meals) : Promise.reject(data);
};

const fetchMealCategories = async () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.categories) : Promise.reject(data);
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

const fetchCocktails = async (query) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
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
  fetchMealCategories,
  fetchMealDetails,
  fetchRandomMeal,
  fetchCocktails,
  fetchCocktailDetails,
  fetchRandomCocktail,
};
