var navLinks = document.getElementById( "navLinks");
function showMenu(){
    navLinks.style.transform = "translateX(0)"; // Move into view
}
function hideMenu(){
    navLinks.style.transform = "translateX(100%)"; // Move out of view
}

var typed = new Typed("#element", {
    strings: ["Mohan Jaiswal","WebDevper"],
    typeSpeed: 150,
    backSpeed: 90,
    loop: true,
    
});
