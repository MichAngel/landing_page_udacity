const body__sections = document.querySelectorAll("section");
const nav__bar = document.getElementById("navbar__list");

for (let i = 0; i < body__sections.length; i++) {
    const nav__li = document.createElement("li");
    const sections = document.getElementsByTagName("section");
    nav__li.innerHTML = `<a onClick="add__class" href="#${sections[i].id}">${sections[i].id}</a>`;
    navbar__list.appendChild(nav__li);

    function add__class(nav__li) {
        nav__li.classList.add("active__class");
        console.log(nav__li);
    };

    const section__title = document.getElementsByTagName("section");
    const section__titleArr = Array.from(section__title);
    const bounding = section__titleArr[i].getBoundingClientRect();
    function isInViewport() {
        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        ); false;

    };
    window.addEventListener("scroll", function () {
        if (isInViewport(section__titleArr[i])) {
            section__titleArr[i].classList.add("active__class");
        }
        console.log(section__titleArr[i].classList);
    });
};


// Script retrieved from https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link

// Grab all href elements
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        // Prevent default action . jump to section.
        e.preventDefault();
        // Select all elements (a tags) that require smooth scroll
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            // define scroll behavior
            behavior: "smooth"
        });
    });
});
