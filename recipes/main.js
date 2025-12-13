import { recipes } from "./recipes.mjs";

function renderRecipes(list) {
  const container = document.getElementById("recipes");
  container.innerHTML = "";

  list.forEach(recipe => {
    const card = document.createElement("article");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-info">
        <div class="tags">
          ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <h2>${recipe.name}</h2>
        <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
          ${"⭐".repeat(recipe.rating)}
          ${"☆".repeat(5 - recipe.rating)}
        </span>
        <p class="description">${recipe.description}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

const featured = recipes.find(r => r.name === "Apple Crisp");
renderRecipes([featured]);


document.getElementById("searchForm").addEventListener("submit", e => {
  e.preventDefault();
  const query = document.getElementById("search").value.toLowerCase();

  const results = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(query))
  );

  renderRecipes(results.length ? results : [featured]);
});