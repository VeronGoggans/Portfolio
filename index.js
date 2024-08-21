import { templates } from "./javascript/templates.js";

const header = document.querySelector('header')
const navbar = document.querySelector('nav');
const logo = header.querySelector('.logo');
const navLinks = navbar.querySelectorAll('a');
const homeLink  =navbar.querySelector('a');
const main = document.querySelector('main');



// Adding eventlisteners
logo.addEventListener('click', () => {loadTemplate('home')});
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const anchor = event.target.closest('a[data-view]')
        if (anchor) {
            loadTemplate(
                anchor.getAttribute('data-view'),
                event.target
            );
        }
    }
)})



function loadTemplate(templateName, navLink = undefined) {
    // Setting the template
    main.innerHTML = templates[templateName];

    // Updating the active tab style
    navLinks.forEach(nav => nav.classList.remove('active'));

    // Add the active class to the clicked anchor tag
    if (navLink !== undefined) {
        navLink.classList.add('active')
    } else {
        homeLink.classList.add('active')
    }
}

main.innerHTML = templates['home']