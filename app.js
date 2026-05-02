document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Icon change (optional: bars to X)
        // const icon = menuToggle.querySelector('i');
        // if (navLinks.classList.contains('active')) {
        //     icon.classList.remove('fa-bars');
        //     icon.classList.add('fa-xmark');
        // } else {
        //     icon.classList.remove('fa-xmark');
        //     icon.classList.add('fa-bars');
        // }
    });
});

let searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function () {
    if (searchInput.style.display === "block") {
        searchInput.style.display = "none";
    } else {
        searchInput.style.display = "block";
    }
});