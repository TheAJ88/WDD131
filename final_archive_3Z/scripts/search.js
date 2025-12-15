export function initSearch() {
    const searchContainer = document.getElementById("search-container");
    const searchInput = document.getElementById("search-input");

    if (!searchContainer || !searchInput) return;

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        const cards = document.querySelectorAll(".story-card");

        cards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            const preview = card.querySelector(".preview").textContent.toLowerCase();
            const matches = title.includes(query) || preview.includes(query);
            card.style.display = matches ? "block" : "none";
        });
    });
}