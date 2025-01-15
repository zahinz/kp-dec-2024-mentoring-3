const hamburgerIcon = document.querySelector("#hamburger");
const mobileNav = document.querySelector("#mobile-nav");
let isOpen = false;
hamburgerIcon.addEventListener("click", function (e) {
  // change mobile nav styling
  if (isOpen) {
    mobileNav.style.display = "none";
    isOpen = false;
  } else {
    mobileNav.style.display = "flex";
    isOpen = true;
  }
});
