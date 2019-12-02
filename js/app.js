/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const navbar = document.getElementById("navbar__list");
const navbar__head = document.getElementById("navbar__menu");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


function build__nvUx() {
    for (section of sections) {
        const nav__li = document.createElement("li");
        nav__li.innerHTML = `<a href="#${section.id}">${section.id}</a>`;
        nav__li.className = "navbar__menu li";
        navbar.appendChild(nav__li);
        console.log(nav__li);
        console.log(section);
    };

    build__mnUx();
};



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu 

function build__mnUx() {
    navbar__head.className = "navbar__menu ul";

}

// Scroll to section on link click

// Set sections as active

build__nvUx();