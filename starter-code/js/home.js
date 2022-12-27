const toggleBtn = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".close-btn");
const contentLinks = document.querySelector(".contents");

toggleBtn.addEventListener("click", () => {
    // contentLinks.classList.toggle("show-links");
    contentLinks.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    // contentLinks.classList.remove("show-links");
    contentLinks.style.display = "none";
});