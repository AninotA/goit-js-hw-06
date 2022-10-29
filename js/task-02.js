const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");


// list.insertAdjacentHTML(
//   "beforeend",
//   ingredients.map((ingr) => `<li class='item'>${ingr}</li>`).join("")
// );

// console.log(list);

const arr = [];

ingredients.forEach((item) => {
  const ingredient = document.createElement("li");
  console.log(ingredient);
  ingredient.classList.add("item");
  ingredient.textContent = item;
  arr.push(ingredient);
});
console.log(arr);
list.append(...arr);

// for (let i = 0; i < ingredients.length; i += 1) {
//   // console.log(ingredients[i]);

//   const ingredient = document.createElement("li");
//   ingredient.textContent = ingredients[i];
//   console.log(ingredient);

//   ingredient.classList.add("item");
//   console.log(ingredient.classList);
//   arr.push(ingredient);
// }
// list.append(...arr);
