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

const navi__items = document.querySelectorAll(".landing__container");
for (const navi__item of navi__items) {

    console.log('nav__item:', navi__item);
}


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

function build__li() {
    const navi__ul = document.getElementById("navbar__list");
    const navi__li = document.createElement("li");
    const navi__li_text = document.innerHTML = "${navi__item}";
    // navi__li.appendChild(navi__li_text);
    navi__ul.appendChild(navi__li);

    console.log(navi__li);

};

build__li();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

