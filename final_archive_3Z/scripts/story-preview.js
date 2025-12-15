export function initStoryPreviews() {
    const storyCards = document.querySelectorAll(".story-card");

    if (!storyCards.length) return;

    storyCards.forEach(card => {
        const preview = card.querySelector(".preview");
        const button = card.querySelector(".expand-btn");

        if (!preview || !button) return;

        let expanded = false;

        button.addEventListener("click", () => {
            expanded = !expanded;

            if (expanded) {
                preview.style.maxHeight = "500px";
                preview.style.opacity = "1";
                button.textContent = "Hide Preview";
            } else {
                preview.style.maxHeight = "0";
                preview.style.opacity = "0.6";
                button.textContent = "Read Preview";
            }
        });

        preview.style.maxHeight = "0";
        preview.style.overflow = "hidden";
        preview.style.transition = "max-height 0.4s ease, opacity 0.3s ease";
        preview.style.opacity = "0.6";
    });
}

export function initFullStoryLinks() {
    const buttons = document.querySelectorAll(".full-story-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const story = btn.dataset.story;
            window.location.href = `stories/${story}.html`;
        });
    });
}