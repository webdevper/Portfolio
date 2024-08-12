var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.transform = "translateX(0)"; 
    navLinks.style.opacity = "1";  // Set opacity to 100%
    navLinks.style.transition = "transform 0.5s ease, opacity 0.5s ease"; // Add transition for both transform and opacity
}

function hideMenu() {
    navLinks.style.transform = "translateX(100%)"; 
    navLinks.style.opacity = "0";  // Set opacity to 0%
    navLinks.style.transition = "transform 0.5s ease, opacity 0.5s ease"; // Add transition for both transform and opacity
}

var menuLinks = document.querySelectorAll('.nav-links ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', hideMenu);
});

var typed = new Typed("#element", {
    strings: ["Mohan Jaiswal", "WebDevper"],
    typeSpeed: 150,
    backSpeed: 90,
    loop: true,
});
