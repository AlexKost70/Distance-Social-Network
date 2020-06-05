const menuBtn = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu-sidebar");

menuBtn.addEventListener('click', function(event) {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});