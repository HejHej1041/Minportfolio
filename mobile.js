const elemMobileMenu = document.querySelector(".mobile-menu")



const elemPrimaryNavigation = document.querySelector(".subnav-content")
const iconHamburger = document - querySelector(".icon-hamburger")
const btnHamburger = document - querySelector(".btn-hamburger")

btnHamburger.addEventListener("click", () => {
    elemPrimaryNavigation.classList.toggle("open");
})
