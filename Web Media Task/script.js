document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
  
    menuToggle.addEventListener("click", () => {
      navMenu.style.display =
        navMenu.style.display === "flex" || navMenu.style.display === "block"
          ? "none"
          : "flex";
    });
  });
  