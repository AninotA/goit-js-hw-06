const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");

const arr = [];

for (let i = 0; i < ingredients.length; i += 1) {
  // console.log(ingredients[i]);

  const ingredient = document.createElement("li");
  ingredient.textContent = ingredients[i];
  console.log(ingredient);

  ingredient.classList.add("item");
  console.log(ingredient.classList);
  arr.push(ingredient);
}
list.append(...arr);
