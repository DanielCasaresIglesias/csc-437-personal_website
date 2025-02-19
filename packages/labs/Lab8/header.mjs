import { toHtmlElement } from './toHtmlElement.mjs';

console.log("Hello");

function createHeader() {
    const headerHtml = (
        `<div class="header">
            <!-- Left Section: Name and Job Title -->
            <div class="header-left">
                <img src="../profile_picture.jpg" alt="Daniel Casares-Iglesias" class="profile-picture">
                <div class="text">
                    <strong><h1>Daniel Casares-Iglesias</h1></strong>
                    <p>Photographer / Software Engineer</p>
                </div>
            </div>

            <!-- Navigation Bar -->
            <div class="navbar">
                <a href="index.html">Home</a>
                <a href="gallery.html">Gallery</a>
                <a href="experience.html">Experience</a>
                <a href="about.html">About</a>
            </div>
        </div>`);
    
    const headerElement = toHtmlElement(headerHtml);

    // Add 'active' class to the nav link that matches the current URL.
    const currentPath = window.location.pathname;
    const navLinks = headerElement.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith(href)) {
        link.classList.add('active');
        }
    });
    
    return headerElement;
}

window.addEventListener("load", () => {
    const header = createHeader();
    // Insert the header as the first child of the body.
    document.body.prepend(header);
});