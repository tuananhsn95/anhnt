function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const resp = await fetch(file);
      const html = await resp.text();
      el.innerHTML = html;
    } catch (err) {
      el.innerHTML = "Page not found.";
    }
  });
}
window.addEventListener("DOMContentLoaded", includeHTML);
