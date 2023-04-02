const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const icon = document.querySelector('.fa-solid');

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility == "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute('aria-expanded', true);
    icon.setAttribute("class", 'fa-solid fa-xmark');
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute('aria-expanded', false);
    icon.setAttribute("class", 'fa-solid fa-bars');
  }

});
