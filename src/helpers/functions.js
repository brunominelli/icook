export const formatIngredients = (recipe) => {
  const entries = Object.entries(recipe);
  const items = [];
  const measures = [];
  const ingredients = [];

  entries.forEach((entry) => {
    if (entry[0].includes('strIngredient') && (entry[1] !== ""  && entry[1])) {
      items.push(entry[1]);
    }

    if (entry[0].includes('strMeasure') && (entry[1] !== " " && entry[1] !== "" && entry[1])) {
      measures.push(entry[1]);
    }
  });

  for (let index = 0; index < items.length; index += 1) {
    ingredients.push(`${measures[index]} ${items[index]}`);
  }

  return ingredients;
};

export const formatInstructions = (recipe) => {
  const instructions = recipe.strInstructions.split('\r\n');
  return instructions;
};
