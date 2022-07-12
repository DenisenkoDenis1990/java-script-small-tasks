const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsEl = document.querySelector("#ingredients");

const addIngridients = () => {
  for (let i = 0; i < ingredients.length; i += 1) {
    let ingridientEl = document.createElement("li");
    ingridientEl.classList.add("item");
    ingridientEl.textContent = ingredients[i];
    ingridientsEl.appendChild(ingridientEl);
  }
};
addIngridients();
