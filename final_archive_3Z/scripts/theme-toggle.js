// ===============================
// THEME TOGGLE MODULE
// ===============================

export function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");

    // If page doesn't have the toggle button, exit safely
    if (!toggleBtn) return;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    // Toggle theme on click
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // Save preference
        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}