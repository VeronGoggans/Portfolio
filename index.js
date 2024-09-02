import { templates } from "./javascript/templates.js";

const header = document.querySelector('header')
const navbar = document.querySelector('nav');
const logo = header.querySelector('.logo');
const navLinks = navbar.querySelectorAll('a');
const homeLink  =navbar.querySelector('a');
const main = document.querySelector('main');



function scrollToProject(projectTitle) {
    projectTitle.scrollIntoView({ behavior: 'smooth', block: 'center' });
}



function prepView(viewId) {
    if (viewId === 'portfolio') {
        const readMoreButtons = document.querySelectorAll('.project .read-more-btn');
        const projectTitles = document.querySelectorAll('.project-container .project-title');

        for (let i = 0; i < readMoreButtons.length; i++) {
            readMoreButtons[i].addEventListener('click', () => {
                scrollToProject(projectTitles[i])
            })    
        }
    }
}



// Adding eventlisteners
logo.addEventListener('click', () => {loadTemplate('home')});
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const anchor = event.target.closest('a[data-view]')
        if (anchor) {
            // laoding the view template
            loadTemplate(anchor.getAttribute('data-view'), event.target);

            // initalizing any eventlisteners
            prepView(anchor.getAttribute('data-view'))
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