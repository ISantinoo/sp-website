document.addEventListener("DOMContentLoaded", () => {

  /* Footer year */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Hero images animation */
  const heroImages = document.querySelectorAll(".hero-image");

  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded.");
    return;
  }

  gsap.from(heroImages, {
    y: 80,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: "power2.out"
  });

});