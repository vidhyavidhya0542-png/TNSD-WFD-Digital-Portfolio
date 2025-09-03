/* script.js */

/* Smooth scrolling for navigation links */

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);

        const targetSection = document.getElementById(targetID);

        targetSection.scrollIntoView({ behavior: 'smooth' });

    });

});

/* Highlight active section in nav while scrolling */

window.addEventListener('scroll', () => {

    const sections = document.querySelectorAll('section');

    const scrollPos = window.scrollY + 100; // Adjust for header height

    sections.forEach(section => {
