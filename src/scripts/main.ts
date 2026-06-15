/**
 * Portfolio — Application Entry
 * Initializes lightweight enhancements for the static page.
 */

function setFooterYear(): void {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

function initSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event: MouseEvent) => {
      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector<HTMLElement>(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function init(): void {
  setFooterYear();
  initSmoothScroll();
}

document.addEventListener("DOMContentLoaded", init);
