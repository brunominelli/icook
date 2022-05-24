const fetchMeals = async (query) => {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.meals) : Promise.reject(data);
};

const fetchRandomMeal = async () => {
  const endpoint = `www.themealdb.com/api/json/v1/1/random.php `;
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.meals) : Promise.reject(data);
};

const fetchDrinks = async (query) => {
  const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.drinks) : Promise.reject(data);
};

const fetchRandomDrink = async () => {
  const endpoint = `www.thecocktaildb.com/api/json/v1/1/random.php`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return response.ok ? Promise.resolve(data.drinks) : Promise.reject(data);
};

export {
  fetchMeals,
  fetchRandomMeal,
  fetchDrinks,
  fetchRandomDrink,
};
