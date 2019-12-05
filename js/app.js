const navbar = document.getElementById("navbar__list");
const navbar__head = document.getElementById("navbar__menu");
const sections = document.querySelectorAll("section");
// BUild Nav

function build__nvUx() {
    // Loop over sections to determine lis to build
    for (section of sections) {
        // construct LI
        const nav__li = document.createElement("li");
        // Insert html into LI
        nav__li.innerHTML = `<a href="#${section.id}">${section.id}</a>`;
        // append li to ul
        navbar.appendChild(nav__li);
    };
};

build__nvUx();

// This code is far more optimized and functions as a smooth scroll for all link tags. Script retrieved from https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link


// Grab all href elements
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default action . jump to section.
        e.preventDefault();
        // Select all elements (a tags) that require smooth scroll
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            // define scroll behavior
            behavior: 'smooth'
        });
    });
});

// Original Smooth Scroll function I wrote. 

// function anch__scroll() {
//     document.getElementById(this.section.id).scrollIntoView({
//         behavior: "smooth"
//     });
// function needed to be assigned to each item when generating the section loop for this function to run for the smooth scroll.
//     event.preventDefault();
// };

window.addEventListener("scroll", addClass)

function addClass(event) {
    var isInViewport = function (section) {
        var bounding = section.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    if (isInViewport === true) {
        section.classList.add("active__class");
    } else {
        section.classList.remove("active__class");
    };
};


function build__mnUx() {
    navbar__head.className = "navbar__menu ul, .navbar__menu, .menu__link:hover";

}

build__mnUx();