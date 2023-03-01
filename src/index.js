const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav-wrapper");

burger.addEventListener("click", (e) => {
  mobileNav.classList.toggle("mobile-nav--active");
});
