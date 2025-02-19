import { attachShadow } from "./utils.mjs";

const TEMPLATE = document.createElement("template");
TEMPLATE.innerHTML = `
  <style>
    @import url('tokens.css');

    /* Global styles */
    body {
        margin: 0;
        padding: 0;
        font-family: var(--font-secondary);
        background-color: var(--color-bg);
    }
    
    /* Layout container */
    .header {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: var(--color-primary);
        color: var(--color-text);
    }

    /* Name and job title container */
    .header-left {
        display: flex;
        align-items: flex-start;
    }

    /* Profile picture styling */
    .profile-picture {
        width: 100px;
        height: auto;
        border-radius: 50%;
        margin-right: 20px;
    }

    /* Text container (name and job title) */
    .header-left h1 {
        margin: 0;
        font-size: 48px;
        font-family: var(--font-primary);
    }

    .header-left p {
        margin: 0;
        font-size: 20px;
    }

    .header-left .text {
        display: flex;
        flex-direction: column;
    }

    /* Navigation bar styling */
    .navbar {
        display: flex;
        justify-content: center;
        flex-grow: 1;
        margin-left: 5rem;
        margin-right: 5rem;
        background-color: var(--color-secondary);
        overflow: hidden;
        text-align: center;
        font-size: 20px;
    }

    .navbar ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .navbar li {
        display: inline;
        margin-right: 20px;
    }

    .navbar a {
        text-decoration: none;
        color: var(--color-text);
        padding: 14px 20px;
        display: inline-block;
    }

    .navbar a:hover {
        background-color: var(--color-hover);
        color: var(--color-hover-text);
    }
  </style>

  <div class="header">
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
  </div>
`;

class MyCoolHeader extends HTMLElement {
  connectedCallback() {
    const shadowRoot = attachShadow(this, TEMPLATE);

    // Get elements inside shadow DOM
    const navLinks = shadowRoot.querySelectorAll('.navbar a, .mobile-menu a');

    // Highlight active page
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
      if (currentPath.endsWith(link.getAttribute('href'))) {
        link.classList.add('active');
      }
    });

    

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!this.contains(event.target) && mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
      }
    });
  }
}

customElements.define("my-cool-header", MyCoolHeader);
