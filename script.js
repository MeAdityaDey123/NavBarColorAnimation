const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
    if (window.scrollX === 0 && window.scrollY >= 17.27272605895996) {
        navbar.classList.add("navbar-black")
    } else {
        navbar.classList.remove("navbar-black")
    }
})