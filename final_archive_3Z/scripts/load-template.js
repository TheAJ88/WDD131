// export function loadTemplate(targetId, filePath) {
//     fetch(filePath)
//         .then(response => response.text())
//         .then(html => {
//             document.getElementById(targetId).innerHTML = html;
//         })
//         .catch(err => console.error("Template load error:", err));
// }

export async function loadTemplate(targetId, filePath) {
    const target = document.getElementById(targetId);
    if (!target) return; // Skip if element doesn't exist

    const root = location.pathname.replace(/\/[^\/]*$/, "/");
    const fullPath = root + filePath;

    try {
        const response = await fetch(fullPath);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        const html = await response.text();
        target.innerHTML = html;
    } catch (err) {
        console.error("Template load error:", err);
    }
}