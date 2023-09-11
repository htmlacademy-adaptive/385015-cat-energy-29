// Мобильное представление. Инициализация работы навигации при включенной поддержке JS
let initializeNavigation = () => {
  let navPanel = document.querySelector(".main-navigation");

  navPanel.classList.remove("main-navigation--nojs");

  navPanel.addEventListener("click", () => {
    navPanel.classList.toggle("main-navigation--closed");
    navPanel.classList.toggle("main-navigation--opened");
  });
}

document.addEventListener("DOMContentLoaded", initializeNavigation);
