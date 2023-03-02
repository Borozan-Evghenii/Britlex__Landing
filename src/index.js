import Swiper from "swiper";
import "../node_modules/swiper/swiper.css";

const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav-wrapper");

burger.addEventListener("click", (e) => {
  mobileNav.classList.toggle("mobile-nav--active");
});

// testimonial Swiper
const swiper = new Swiper(".testimonial-slider", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

// testimonial Swiper

//dropdown

const dropdown = document.querySelectorAll(".dropdown-btn");
const dropdownMenu = document.querySelectorAll(".dropdown .dropdown-items");
const menuItems = document.querySelectorAll(".dropdown-items li");
const dropdoewnText = document.querySelector(".dropdown-tex");

console.log(menuItems);

dropdown.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.currentTarget.parentElement.lastElementChild.classList.add(
      "active-dropdown"
    );
  });
});

menuItems.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.currentTarget.parentElement.parentElement.parentElement.querySelector(
      ".dropdown-text"
    ).innerText = e.currentTarget.innerText;
    e.currentTarget.parentElement.parentElement.classList.remove(
      "active-dropdown"
    );
  });
});
//dropdown
