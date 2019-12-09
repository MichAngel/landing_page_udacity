const body__sections = document.querySelectorAll("section");
const nav__bar = document.getElementById("navbar__list");

for (let i = 0; i < body__sections.length; i++) {
    const nav__li = document.createElement("li");
    const sections = document.getElementsByTagName("section");
    nav__li.innerHTML = `<a href="#${sections[i].id}">${sections[i].id}</a>`;
    navbar__list.appendChild(nav__li);

    const isInViewport = function (sections) {
        let bounding = sections.getBoundingClientRect();
        console.log(bounding);
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    function classAdd(sections) {
        if (isInViewport === true) {
            sections.classList.add("active__class");
        } else isInViewport === false;
        sections.classList.remove("active__class");
    };

};
window.addEventListener("scroll", classAdd);

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
