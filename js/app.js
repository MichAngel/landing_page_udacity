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
const sections = document.querySelectorAll("section");
console.log(sections);
console.log(navbar);

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
    const nav__li = document.createElement("li");
    nav__li.innerHTML = `<a href="index.html">hello</a>`;
    nav__li.className = "navbar__menu li";
    navbar.appendChild(nav__li);
    console.log(nav__li);
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

}

// Scroll to section on link click

// Set sections as active

build__mnUx();
build__nvUx();