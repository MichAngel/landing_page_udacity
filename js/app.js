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
        nav__li.innerHTML = `<a onclick="anch__scroll(${section.id})" href="#${section.id}">${section.id}</a>`;
        // add classnames to LI
        nav__li.className = "navbar__menu li";
        // append li to ul
        navbar.appendChild(nav__li);
    };
    build__mnUx();
};
build__nvUx();


function add__listeners() {
    for (section of sections) {
        const bounding = section.getBoundingClientRect();
        console.log(bounding);
        section.addEventListener("scroll", function () {
            if (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            ) {
                section.className("active__class");
            } else {
                section.className(" ");
            }
        });
    };
};

add__listeners();

// Scroll to anchor ID using scrollTO event

function build__mnUx() {
    navbar__head.firstChild.className = "navbar__menu ul";

}

    // Scroll to section on link click

// Set sections as active
