import { loadTemplate } from "./load-template.js";
import { initSearch } from "./search.js";
import { initThemeToggle } from "./theme-toggle.js";
import { initStoryPreviews, initFullStoryLinks } from "./story-preview.js";


(async () => {
    await loadTemplate("header", "templates/header.html");
    await loadTemplate("footer", "templates/footer.html");

    // Adjust header links to be absolute
    const rootPath = location.pathname.startsWith("/final_archive_3Z/") ? "/final_archive_3Z/" : "/";
    const headerLinks = document.querySelectorAll("#header a");
    headerLinks.forEach(a => {
        const href = a.getAttribute("href");
        if (href && !href.startsWith("http")) {
            a.href = rootPath + href;
        }
    });

    initSearch();
    initThemeToggle();
    initStoryPreviews();
    initFullStoryLinks();
})();