import { recipes } from "./recipes.mjs";

function random(num) {
  return Math.floor(Math.random() * num);
}
function getRandomListEntry(list) {
  return list[random(list.length)];
}
function tagsTemplate(tags) {
  return tags.map(tag => `<span class="tag">${tag}</span>`).join("");
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

  for (let i = 1; i <= 5; i++) {
    html += i <= rating
      ? `<span aria-hidden="true" class="icon-star">⭐</span>`
      : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }

  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <article class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-info">
        <div class="tags">
          ${tagsTemplate(recipe.tags)}
        </div>
        <h2>${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="description">${recipe.description}</p>
      </div>
    </article>
  `;
}

function renderRecipes(recipeList) {
  const container = document.getElementById("recipes");
  container.innerHTML = recipeList.map(recipeTemplate).join("");
}

function filterRecipes(query) {
  const q = query.toLowerCase();

  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(q) ||
    recipe.description.toLowerCase().includes(q) ||
    recipe.tags.find(t => t.toLowerCase().includes(q)) ||
    recipe.recipeIngredient.find(i => i.toLowerCase().includes(q))
  );

  return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
  event.preventDefault();
  const query = document.getElementById("search").value.toLowerCase();

  const results = filterRecipes(query);
  renderRecipes(results);
}

document.getElementById("searchForm").addEventListener("submit", searchHandler);


function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

init();