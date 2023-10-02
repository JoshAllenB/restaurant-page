// Import the necessary functions and modules
import { createHomeSection } from './pages/home';
import { createMenuSection } from './pages/menu';
import { createContactSection } from './pages/contact';

function initWebsite() {
  const content = document.querySelector('.content');

  // Function to create and render the header section
  function createHeader() {
    // Create the HTML structure for the header
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.className = 'navbar';

    const homeButton = createNavButton('Home', loadHomePage);
    const menuButton = createNavButton('Menu', loadMenuPage);
    const contactButton = createNavButton('Contact', loadContactPage);

    ul.appendChild(homeButton);
    ul.appendChild(menuButton);
    ul.appendChild(contactButton);
    nav.appendChild(ul);
    header.appendChild(nav);

    // Add the header to the body
    document.body.appendChild(header);
  }

  // Function to create and render the footer section
  function createFooter() {
    const footer = document.createElement('footer');
    const socMed = document.createElement('div');
    socMed.className = 'soc-med';

    // Create and append social media links
    const instagramLink = createFooterLink('<i class="fa-brands fa-instagram"></i> Instagram');
    const messengerLink = createFooterLink('<i class="fa-brands fa-facebook-messenger"></i> Messenger');
    const tiktokLink = createFooterLink('<i class="fa-brands fa-tiktok"></i> Tiktok');

    socMed.appendChild(instagramLink);
    socMed.appendChild(messengerLink);
    socMed.appendChild(tiktokLink);

    // Create and append copyright information
    const copyright = createFooterLink('<i class="fa-regular fa-copyright"></i> Coffee Shop');

    footer.appendChild(socMed);
    socMed.appendChild(copyright);

    // Add the footer to the body
    document.body.appendChild(footer);
  }

  // Helper function to create a navigation button
  function createNavButton(text, clickHandler) {
    const button = document.createElement('button');
    button.className = 'nav-button';
    button.innerHTML = `<li>${text}</li>`;
    button.addEventListener('click', () => {
      content.innerHTML = ''; // Clear existing content
      clickHandler();
    });
    return button;
  }

  // Helper function to create a footer link
  function createFooterLink(text) {
    const link = document.createElement('h1');
    link.innerHTML = text;
    return link;
  }

  // Function to create and render the home section
  function loadHomePage() {
    content.innerHTML = ''; // Clear existing content
    createHomeSection();
  }

  // Function to create and render the menu section
  function loadMenuPage() {
    content.innerHTML = ''; // Clear existing content
    createMenuSection(); // Use the imported function
  }

  // Function to create and render the contact section
  function loadContactPage() {
    content.innerHTML = ''; // Clear existing content
    createContactSection(); // Use the imported function
  }

  // Call the createHeader function to generate and append the header
  createHeader();

  // Call the createFooter function to generate and append the footer
  createFooter();

  // Initially load the Home page (set as the default page)
  loadHomePage();
}

function loadHomePage() {
  content.innerHTML = '';
  createHomeSection();
}

function loadMenuPage() {
  content.innerHTML = ''; 
  createMenuSection();
}

function loadContactPage() {
  content.innerHTML = '';
  createContactSection();
}


// Initialize the website
export {initWebsite};
