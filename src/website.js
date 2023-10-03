// Import the necessary functions and modules
import { createHomeSection } from './pages/home';
import { createMenuSection } from './pages/menu';
import { createContactSection } from './pages/contact';

// Define a function to create and render the header
function createHeader() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.className = 'navbar';

  const sections = [
    { text: 'Home', handler: createHomeSection },
    { text: 'Menu', handler: createMenuSection },
    { text: 'Contact', handler: createContactSection },
  ];

  sections.forEach(({ text, handler }) => {
    const button = createNavButton(text, () => {
      clearContent();
      handler();
    });
    ul.appendChild(button);
  });

  nav.appendChild(ul);
  header.appendChild(nav);
  document.body.appendChild(header);
}

// Define a function to create and render the footer
function createFooter() {
  const footer = document.createElement('footer');
  const socMed = document.createElement('div');
  socMed.className = 'soc-med';

  const socialMediaLinks = [
    '<i class="fa-brands fa-instagram"></i> Instagram',
    '<i class="fa-brands fa-facebook-messenger"></i> Messenger',
    '<i class="fa-brands fa-tiktok"></i> Tiktok',
  ];

  socialMediaLinks.forEach(linkText => {
    const link = createFooterLink(linkText);
    socMed.appendChild(link);
  });

  const copyright = createFooterLink('<i class="fa-regular fa-copyright"></i> Coffee Shop');
  socMed.appendChild(copyright);

  footer.appendChild(socMed);
  document.body.appendChild(footer);
}

// Helper function to create a navigation button
function createNavButton(text, clickHandler) {
  const button = document.createElement('button');
  button.className = 'nav-button';
  button.innerHTML = `<li>${text}</li>`;
  button.addEventListener('click', clickHandler);
  return button;
}

// Helper function to create a footer link
function createFooterLink(text) {
  const link = document.createElement('h1');
  link.innerHTML = text;
  return link;
}

// Helper function to clear the content
function clearContent() {
  const content = document.querySelector('.content');
  content.innerHTML = '';
}

// Initialize the website
function initWebsite() {
  createHeader();
  createFooter();
  clearContent();
  createHomeSection(); // Initially load the Home page
}

// Export the initWebsite function
export { initWebsite };
