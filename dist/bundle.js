/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactSection: () => (/* binding */ createContactSection)
/* harmony export */ });
function createContactSection() {
  // Create the root element
  const root = document.createElement('div');
  root.classList.add('content');

  // Create the content-card element
  const contentCard = document.createElement('div');
  contentCard.classList.add('content-card');

  // Create the brand element
  const brand = document.createElement('div');
  brand.classList.add('brand');
  const brandTitle = document.createElement('h1');
  brandTitle.textContent = 'Coffee Shop';

  // Create the i element for the mug icon
  const mugIcon = document.createElement('i');
  mugIcon.classList.add('fa-solid', 'fa-mug-hot');

  // Append the title and icon to the brand element
  brandTitle.appendChild(mugIcon);
  brand.appendChild(brandTitle);

  // Create the contactInfo element
  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contactInfo');
  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Contact Us';

  // Create the store element
  const store = document.createElement('div');
  store.classList.add('store');
  store.innerHTML = '<p><i class="fa-solid fa-location-dot"></i> 365 Random St, TownsVille</p>';

  // Create the number element
  const number = document.createElement('div');
  number.classList.add('number');
  number.innerHTML = '<p><i class="fa-solid fa-phone" style="color: #ffffff;"></i> 123-456-78900</p>';

  // Create the email element
  const email = document.createElement('div');
  email.classList.add('email');
  email.innerHTML = '<p><i class="fa-solid fa-envelope" style="color: #ffffff;"></i> AbsolutelyRealEmail@real.com</p>';

  // Append all elements to their respective parent elements
  contactInfo.appendChild(contactTitle);
  contactInfo.appendChild(store);
  contactInfo.appendChild(number);
  contactInfo.appendChild(email);

  contentCard.appendChild(brand);
  contentCard.appendChild(contactInfo);

  root.appendChild(contentCard);

  // Append the root element to the body
  document.body.appendChild(root);

  return root;
}

// Export the createContactSection function as a module



/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomeSection: () => (/* binding */ createHomeSection)
/* harmony export */ });
// Function to create and render the home section along with the content
function createHomeSection() {
  // Create the HTML structure for the home section
  const content = document.createElement('div');
  content.className = 'content';
  const contentCard = document.createElement('div');
  contentCard.className = 'content-card';

  // Create and append the brand section
  const brand = document.createElement('div');
  brand.className = 'brand';
  const brandTitle = document.createElement('h1');
  brandTitle.innerHTML = 'Coffee Shop <i class="fa-solid fa-mug-hot"></i>';
  brand.appendChild(brandTitle);

  // Create and append the about section
  const about = document.createElement('div');
  about.className = 'about';
  const aboutTitle = document.createElement('h1');
  aboutTitle.innerHTML = 'About Us';
  const aboutSubtitle = document.createElement('h4');
  aboutSubtitle.innerHTML = 'Welcome to our Coffee Shop!';
  const aboutParagraph = document.createElement('p');
  aboutParagraph.innerHTML =
    "We're passionate about coffee and dedicated to delivering exceptional flavors in every cup. Our commitment to quality and sustainability drives everything we do.";
  const aboutSubtitle2 = document.createElement('h4');
  aboutSubtitle2.innerHTML = 'What we Offer:';
  const aboutList = document.createElement('ul');
  const aboutListItems = [
    'Handcrafted coffee beverages',
    'Fresh roasted coffee beans',
    'Cozy, welcoming space',
  ];
  aboutListItems.forEach((itemText) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = itemText;
    aboutList.appendChild(listItem);
  });

  about.appendChild(aboutTitle);
  about.appendChild(aboutSubtitle);
  about.appendChild(aboutParagraph);
  about.appendChild(aboutSubtitle2);
  about.appendChild(aboutList);

  // Create and append the store hours section
  const storeHours = document.createElement('div');
  storeHours.className = 'store-hours';
  const storeHoursTitle = document.createElement('h1');
  storeHoursTitle.innerHTML = 'Store Hours <i class="fa-solid fa-clock"></i>';
  const hoursList = document.createElement('ul');
  const hoursListItems = [
    'Sunday: 8am - 8pm',
    'Monday: 6am - 6pm',
    'Tuesday: 6am - 6pm',
    'Wednesday: 6am - 6pm',
    'Thursday: 6am - 10pm',
    'Friday: 6am - 10pm',
  ];
  hoursListItems.forEach((itemText) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = itemText;
    hoursList.appendChild(listItem);
  });

  storeHours.appendChild(storeHoursTitle);
  storeHours.appendChild(hoursList);

  // Create and append the location section
  const location = document.createElement('div');
  location.className = 'location';
  const locationTitle = document.createElement('h1');
  locationTitle.innerHTML = 'Store Location <i class="fa-solid fa-location-dot"></i>';
  const locationParagraph = document.createElement('p');
  locationParagraph.innerHTML = '365 Random St, TownsVille';

  location.appendChild(locationTitle);
  location.appendChild(locationParagraph);

  contentCard.appendChild(brand);
  contentCard.appendChild(about);
  contentCard.appendChild(storeHours);
  contentCard.appendChild(location);

  content.appendChild(contentCard);

  document.body.appendChild(content);
}
  // Export the createHomeSection function for use in website.js
  


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuSection: () => (/* binding */ createMenuSection)
/* harmony export */ });
function createMenuSection() {
  // Create the root element
  const root = document.createElement('div');
  root.classList.add('content');

  // Create the content-card element
  const contentCard = document.createElement('div');
  contentCard.classList.add('content-card');

  // Create the brand element
  const brand = document.createElement('div');
  brand.classList.add('brand');
  const brandTitle = document.createElement('h1');
  brandTitle.textContent = 'Coffee Shop';

  // Create the i element for the mug icon
  const mugIcon = document.createElement('i');
  mugIcon.classList.add('fa-solid', 'fa-mug-hot');

  // Append the title and icon to the brand element
  brandTitle.appendChild(mugIcon);
  brand.appendChild(brandTitle);

  // Create the menu title element
  const menuTitle = document.createElement('div');
  menuTitle.classList.add('menu-title');
  const menuTitleText = document.createElement('h1');
  menuTitleText.textContent = 'Menu';
  menuTitle.appendChild(menuTitleText);

  // Create the menu element
  const menu = document.createElement('div');
  menu.classList.add('menu');

  // Create Coffee section
  const coffeeSection = document.createElement('div');
  coffeeSection.classList.add('Coffee');
  const coffeeTitle = document.createElement('div');
  coffeeTitle.classList.add('coffee-title');
  const coffeeImage = document.createElement('img');
  coffeeImage.src = '/src/assets/Coffee.png';
  coffeeImage.alt = 'Coffee';
  const coffeeHeading = document.createElement('h3');
  coffeeHeading.textContent = 'Coffee';
  const coffeeList = document.createElement('ul');
  coffeeList.innerHTML = `
    <li>Espresso............ 170</li>
    <li>Americano......... 110</li>
    <li>Latte................... 160</li>
    <li>Flat White.......... 145</li>
  `;

  coffeeTitle.appendChild(coffeeImage);
  coffeeTitle.appendChild(coffeeHeading);
  coffeeSection.appendChild(coffeeTitle);
  coffeeSection.appendChild(coffeeList);

  // Create Tea section
  const teaSection = document.createElement('div');
  teaSection.classList.add('Tea');
  const teaTitle = document.createElement('div');
  teaTitle.classList.add('tea-title');
  const teaImage = document.createElement('img');
  teaImage.src = '/src/assets/Tea.png';
  teaImage.alt = 'Tea';
  const teaHeading = document.createElement('h3');
  teaHeading.textContent = 'Tea';
  const teaList = document.createElement('ul');
  teaList.innerHTML = `
    <li>Green Tea................ 110</li>
    <li>Matcha Tea............. 160</li>
    <li>Black Tea................. 130</li>
    <li>Oolong Tea............. 165</li>
  `;

  teaTitle.appendChild(teaImage);
  teaTitle.appendChild(teaHeading);
  teaSection.appendChild(teaTitle);
  teaSection.appendChild(teaList);

  // Create Beans section
  const beansSection = document.createElement('div');
  beansSection.classList.add('Beans');
  const beansTitle = document.createElement('div');
  beansTitle.classList.add('beans-title');
  const beansImage = document.createElement('img');
  beansImage.src = '/src/assets/Beans.png';
  beansImage.alt = 'Coffee Beans';
  const beansHeading = document.createElement('h3');
  beansHeading.textContent = 'Coffee Beans';
  const beansTable = document.createElement('table');
  beansTable.innerHTML = `
  <thead>
  <tr>
    <th>Coffee Variant</th>
    <th class="grams">250g</th>
    <th class="kilo">1kg</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Bukidnon (Natural/Washed)</td>
    <td class="price">P455.00</td>
    <td class="kilo">P1,770.00</td>
  </tr>
  <tr>
    <td>Itogon (Natural/Washed)</td>
    <td class="price">P370.00</td>
    <td class="kilo">P1,425.00</td>
  </tr>
  <tr>
    <td>Kapangan Washed</td>
    <td class="price">P370.00</td>
    <td class="kilo">P1,425.00</td>
  </tr>
  <tr>
    <td>Mt. Apo (Natural/Honey/Washed)</td>
    <td class="price">P435.00</td>
    <td class="kilo">P1,685.00</td>
  </tr>
  <tr>
    <td>Mr. Matutum (Washed)</td>
    <td class="price">P325.00</td>
  </tr>
  <tr>
    <td>Sagada Coffee</td>
    <td class="price">P370.00</td>
  </tr>
  <tr>
    <td>Tublay Natural/Washed</td>
    <td class="price">P370.00</td>
  </tr>
  <tr>
    <td>Tuding Coffee (Naturall)</td>
    <td class="price">P370.00</td>
  </tr>
</tbody>
  `;

  beansTitle.appendChild(beansImage);
  beansTitle.appendChild(beansHeading);
  beansSection.appendChild(beansTitle);
  beansSection.appendChild(beansTable);

  // Append all sections to the menu element
  menu.appendChild(coffeeSection);
  menu.appendChild(teaSection);
  menu.appendChild(beansSection);

  // Append all elements to their respective parent elements
  contentCard.appendChild(brand);
  contentCard.appendChild(menuTitle);
  contentCard.appendChild(menu);

  root.appendChild(contentCard);

  // Append the root element to the body
  document.body.appendChild(root);

  return root;
}

// Export the createMenuSection function as a module



/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initWebsite: () => (/* binding */ initWebsite)
/* harmony export */ });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
// Import the necessary functions and modules




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
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.createHomeSection)();
  }

  // Function to create and render the menu section
  function loadMenuPage() {
    content.innerHTML = ''; // Clear existing content
    (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuSection)(); // Use the imported function
  }

  // Function to create and render the contact section
  function loadContactPage() {
    content.innerHTML = ''; // Clear existing content
    (0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__.createContactSection)(); // Use the imported function
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
  (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.createHomeSection)();
}

function loadMenuPage() {
  content.innerHTML = ''; 
  (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuSection)();
}

function loadContactPage() {
  content.innerHTML = '';
  (0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__.createContactSection)();
}


// Initialize the website



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_0__.initWebsite)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTs7QUFFNUU7QUFDQTtBQUNBO0FBQ0EsOEVBQThFOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQzhCOzs7Ozs7Ozs7Ozs7Ozs7QUM5RDlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUErQjs7Ozs7Ozs7Ozs7Ozs7O0FDekYvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbks1QjtBQUNpRDtBQUNBO0FBQ007O0FBRXZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSztBQUNuQztBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLElBQUksOERBQWlCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsSUFBSSw4REFBaUIsSUFBSTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLElBQUksb0VBQW9CLElBQUk7QUFDNUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw4REFBaUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLEVBQUUsOERBQWlCO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxFQUFFLG9FQUFvQjtBQUN0Qjs7O0FBR0E7QUFDcUI7Ozs7Ozs7VUN2SHJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0M7O0FBRXhDLHFEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2VzLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlcy8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZXMvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2VzLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2VzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2VzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdFNlY3Rpb24oKSB7XG4gIC8vIENyZWF0ZSB0aGUgcm9vdCBlbGVtZW50XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcm9vdC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBjb250ZW50LWNhcmQgZWxlbWVudFxuICBjb25zdCBjb250ZW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQnKTtcblxuICAvLyBDcmVhdGUgdGhlIGJyYW5kIGVsZW1lbnRcbiAgY29uc3QgYnJhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnJhbmQuY2xhc3NMaXN0LmFkZCgnYnJhbmQnKTtcbiAgY29uc3QgYnJhbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGJyYW5kVGl0bGUudGV4dENvbnRlbnQgPSAnQ29mZmVlIFNob3AnO1xuXG4gIC8vIENyZWF0ZSB0aGUgaSBlbGVtZW50IGZvciB0aGUgbXVnIGljb25cbiAgY29uc3QgbXVnSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbXVnSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1tdWctaG90Jyk7XG5cbiAgLy8gQXBwZW5kIHRoZSB0aXRsZSBhbmQgaWNvbiB0byB0aGUgYnJhbmQgZWxlbWVudFxuICBicmFuZFRpdGxlLmFwcGVuZENoaWxkKG11Z0ljb24pO1xuICBicmFuZC5hcHBlbmRDaGlsZChicmFuZFRpdGxlKTtcblxuICAvLyBDcmVhdGUgdGhlIGNvbnRhY3RJbmZvIGVsZW1lbnRcbiAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdEluZm8nKTtcbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgZWxlbWVudFxuICBjb25zdCBzdG9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdG9yZS5jbGFzc0xpc3QuYWRkKCdzdG9yZScpO1xuICBzdG9yZS5pbm5lckhUTUwgPSAnPHA+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1sb2NhdGlvbi1kb3RcIj48L2k+IDM2NSBSYW5kb20gU3QsIFRvd25zVmlsbGU8L3A+JztcblxuICAvLyBDcmVhdGUgdGhlIG51bWJlciBlbGVtZW50XG4gIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBudW1iZXIuY2xhc3NMaXN0LmFkZCgnbnVtYmVyJyk7XG4gIG51bWJlci5pbm5lckhUTUwgPSAnPHA+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1waG9uZVwiIHN0eWxlPVwiY29sb3I6ICNmZmZmZmY7XCI+PC9pPiAxMjMtNDU2LTc4OTAwPC9wPic7XG5cbiAgLy8gQ3JlYXRlIHRoZSBlbWFpbCBlbGVtZW50XG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2VtYWlsJyk7XG4gIGVtYWlsLmlubmVySFRNTCA9ICc8cD48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWVudmVsb3BlXCIgc3R5bGU9XCJjb2xvcjogI2ZmZmZmZjtcIj48L2k+IEFic29sdXRlbHlSZWFsRW1haWxAcmVhbC5jb208L3A+JztcblxuICAvLyBBcHBlbmQgYWxsIGVsZW1lbnRzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcGFyZW50IGVsZW1lbnRzXG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHN0b3JlKTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQobnVtYmVyKTtcbiAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIGNvbnRlbnRDYXJkLmFwcGVuZENoaWxkKGJyYW5kKTtcbiAgY29udGVudENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuXG4gIHJvb3QuYXBwZW5kQ2hpbGQoY29udGVudENhcmQpO1xuXG4gIC8vIEFwcGVuZCB0aGUgcm9vdCBlbGVtZW50IHRvIHRoZSBib2R5XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG5cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8vIEV4cG9ydCB0aGUgY3JlYXRlQ29udGFjdFNlY3Rpb24gZnVuY3Rpb24gYXMgYSBtb2R1bGVcbmV4cG9ydCB7Y3JlYXRlQ29udGFjdFNlY3Rpb259O1xuIiwiLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCByZW5kZXIgdGhlIGhvbWUgc2VjdGlvbiBhbG9uZyB3aXRoIHRoZSBjb250ZW50XG5mdW5jdGlvbiBjcmVhdGVIb21lU2VjdGlvbigpIHtcbiAgLy8gQ3JlYXRlIHRoZSBIVE1MIHN0cnVjdHVyZSBmb3IgdGhlIGhvbWUgc2VjdGlvblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQnO1xuICBjb25zdCBjb250ZW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q2FyZC5jbGFzc05hbWUgPSAnY29udGVudC1jYXJkJztcblxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgYnJhbmQgc2VjdGlvblxuICBjb25zdCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBicmFuZC5jbGFzc05hbWUgPSAnYnJhbmQnO1xuICBjb25zdCBicmFuZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYnJhbmRUaXRsZS5pbm5lckhUTUwgPSAnQ29mZmVlIFNob3AgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1tdWctaG90XCI+PC9pPic7XG4gIGJyYW5kLmFwcGVuZENoaWxkKGJyYW5kVGl0bGUpO1xuXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBhYm91dCBzZWN0aW9uXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0LmNsYXNzTmFtZSA9ICdhYm91dCc7XG4gIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBhYm91dFRpdGxlLmlubmVySFRNTCA9ICdBYm91dCBVcyc7XG4gIGNvbnN0IGFib3V0U3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBhYm91dFN1YnRpdGxlLmlubmVySFRNTCA9ICdXZWxjb21lIHRvIG91ciBDb2ZmZWUgU2hvcCEnO1xuICBjb25zdCBhYm91dFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWJvdXRQYXJhZ3JhcGguaW5uZXJIVE1MID1cbiAgICBcIldlJ3JlIHBhc3Npb25hdGUgYWJvdXQgY29mZmVlIGFuZCBkZWRpY2F0ZWQgdG8gZGVsaXZlcmluZyBleGNlcHRpb25hbCBmbGF2b3JzIGluIGV2ZXJ5IGN1cC4gT3VyIGNvbW1pdG1lbnQgdG8gcXVhbGl0eSBhbmQgc3VzdGFpbmFiaWxpdHkgZHJpdmVzIGV2ZXJ5dGhpbmcgd2UgZG8uXCI7XG4gIGNvbnN0IGFib3V0U3VidGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgYWJvdXRTdWJ0aXRsZTIuaW5uZXJIVE1MID0gJ1doYXQgd2UgT2ZmZXI6JztcbiAgY29uc3QgYWJvdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgYWJvdXRMaXN0SXRlbXMgPSBbXG4gICAgJ0hhbmRjcmFmdGVkIGNvZmZlZSBiZXZlcmFnZXMnLFxuICAgICdGcmVzaCByb2FzdGVkIGNvZmZlZSBiZWFucycsXG4gICAgJ0NvenksIHdlbGNvbWluZyBzcGFjZScsXG4gIF07XG4gIGFib3V0TGlzdEl0ZW1zLmZvckVhY2goKGl0ZW1UZXh0KSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGl0ZW1UZXh0O1xuICAgIGFib3V0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xuXG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0VGl0bGUpO1xuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFN1YnRpdGxlKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRQYXJhZ3JhcGgpO1xuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFN1YnRpdGxlMik7XG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0TGlzdCk7XG5cbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHN0b3JlIGhvdXJzIHNlY3Rpb25cbiAgY29uc3Qgc3RvcmVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdG9yZUhvdXJzLmNsYXNzTmFtZSA9ICdzdG9yZS1ob3Vycyc7XG4gIGNvbnN0IHN0b3JlSG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHN0b3JlSG91cnNUaXRsZS5pbm5lckhUTUwgPSAnU3RvcmUgSG91cnMgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jbG9ja1wiPjwvaT4nO1xuICBjb25zdCBob3Vyc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBob3Vyc0xpc3RJdGVtcyA9IFtcbiAgICAnU3VuZGF5OiA4YW0gLSA4cG0nLFxuICAgICdNb25kYXk6IDZhbSAtIDZwbScsXG4gICAgJ1R1ZXNkYXk6IDZhbSAtIDZwbScsXG4gICAgJ1dlZG5lc2RheTogNmFtIC0gNnBtJyxcbiAgICAnVGh1cnNkYXk6IDZhbSAtIDEwcG0nLFxuICAgICdGcmlkYXk6IDZhbSAtIDEwcG0nLFxuICBdO1xuICBob3Vyc0xpc3RJdGVtcy5mb3JFYWNoKChpdGVtVGV4dCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBpdGVtVGV4dDtcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcblxuICBzdG9yZUhvdXJzLmFwcGVuZENoaWxkKHN0b3JlSG91cnNUaXRsZSk7XG4gIHN0b3JlSG91cnMuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcblxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgbG9jYXRpb24gc2VjdGlvblxuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2NhdGlvbi5jbGFzc05hbWUgPSAnbG9jYXRpb24nO1xuICBjb25zdCBsb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbG9jYXRpb25UaXRsZS5pbm5lckhUTUwgPSAnU3RvcmUgTG9jYXRpb24gPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1sb2NhdGlvbi1kb3RcIj48L2k+JztcbiAgY29uc3QgbG9jYXRpb25QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxvY2F0aW9uUGFyYWdyYXBoLmlubmVySFRNTCA9ICczNjUgUmFuZG9tIFN0LCBUb3duc1ZpbGxlJztcblxuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblRpdGxlKTtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25QYXJhZ3JhcGgpO1xuXG4gIGNvbnRlbnRDYXJkLmFwcGVuZENoaWxkKGJyYW5kKTtcbiAgY29udGVudENhcmQuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICBjb250ZW50Q2FyZC5hcHBlbmRDaGlsZChzdG9yZUhvdXJzKTtcbiAgY29udGVudENhcmQuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudENhcmQpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG4gIC8vIEV4cG9ydCB0aGUgY3JlYXRlSG9tZVNlY3Rpb24gZnVuY3Rpb24gZm9yIHVzZSBpbiB3ZWJzaXRlLmpzXG4gIGV4cG9ydCB7IGNyZWF0ZUhvbWVTZWN0aW9uIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbigpIHtcbiAgLy8gQ3JlYXRlIHRoZSByb290IGVsZW1lbnRcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByb290LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQtY2FyZCBlbGVtZW50XG4gIGNvbnN0IGNvbnRlbnRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnRDYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY2FyZCcpO1xuXG4gIC8vIENyZWF0ZSB0aGUgYnJhbmQgZWxlbWVudFxuICBjb25zdCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBicmFuZC5jbGFzc0xpc3QuYWRkKCdicmFuZCcpO1xuICBjb25zdCBicmFuZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYnJhbmRUaXRsZS50ZXh0Q29udGVudCA9ICdDb2ZmZWUgU2hvcCc7XG5cbiAgLy8gQ3JlYXRlIHRoZSBpIGVsZW1lbnQgZm9yIHRoZSBtdWcgaWNvblxuICBjb25zdCBtdWdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBtdWdJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLW11Zy1ob3QnKTtcblxuICAvLyBBcHBlbmQgdGhlIHRpdGxlIGFuZCBpY29uIHRvIHRoZSBicmFuZCBlbGVtZW50XG4gIGJyYW5kVGl0bGUuYXBwZW5kQ2hpbGQobXVnSWNvbik7XG4gIGJyYW5kLmFwcGVuZENoaWxkKGJyYW5kVGl0bGUpO1xuXG4gIC8vIENyZWF0ZSB0aGUgbWVudSB0aXRsZSBlbGVtZW50XG4gIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS10aXRsZScpO1xuICBjb25zdCBtZW51VGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbWVudVRpdGxlVGV4dC50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudVRpdGxlLmFwcGVuZENoaWxkKG1lbnVUaXRsZVRleHQpO1xuXG4gIC8vIENyZWF0ZSB0aGUgbWVudSBlbGVtZW50XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgLy8gQ3JlYXRlIENvZmZlZSBzZWN0aW9uXG4gIGNvbnN0IGNvZmZlZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29mZmVlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdDb2ZmZWUnKTtcbiAgY29uc3QgY29mZmVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29mZmVlVGl0bGUuY2xhc3NMaXN0LmFkZCgnY29mZmVlLXRpdGxlJyk7XG4gIGNvbnN0IGNvZmZlZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvZmZlZUltYWdlLnNyYyA9ICcvc3JjL2Fzc2V0cy9Db2ZmZWUucG5nJztcbiAgY29mZmVlSW1hZ2UuYWx0ID0gJ0NvZmZlZSc7XG4gIGNvbnN0IGNvZmZlZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb2ZmZWVIZWFkaW5nLnRleHRDb250ZW50ID0gJ0NvZmZlZSc7XG4gIGNvbnN0IGNvZmZlZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb2ZmZWVMaXN0LmlubmVySFRNTCA9IGBcbiAgICA8bGk+RXNwcmVzc28uLi4uLi4uLi4uLi4gMTcwPC9saT5cbiAgICA8bGk+QW1lcmljYW5vLi4uLi4uLi4uIDExMDwvbGk+XG4gICAgPGxpPkxhdHRlLi4uLi4uLi4uLi4uLi4uLi4uLiAxNjA8L2xpPlxuICAgIDxsaT5GbGF0IFdoaXRlLi4uLi4uLi4uLiAxNDU8L2xpPlxuICBgO1xuXG4gIGNvZmZlZVRpdGxlLmFwcGVuZENoaWxkKGNvZmZlZUltYWdlKTtcbiAgY29mZmVlVGl0bGUuYXBwZW5kQ2hpbGQoY29mZmVlSGVhZGluZyk7XG4gIGNvZmZlZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY29mZmVlVGl0bGUpO1xuICBjb2ZmZWVTZWN0aW9uLmFwcGVuZENoaWxkKGNvZmZlZUxpc3QpO1xuXG4gIC8vIENyZWF0ZSBUZWEgc2VjdGlvblxuICBjb25zdCB0ZWFTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRlYVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnVGVhJyk7XG4gIGNvbnN0IHRlYVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRlYVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RlYS10aXRsZScpO1xuICBjb25zdCB0ZWFJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB0ZWFJbWFnZS5zcmMgPSAnL3NyYy9hc3NldHMvVGVhLnBuZyc7XG4gIHRlYUltYWdlLmFsdCA9ICdUZWEnO1xuICBjb25zdCB0ZWFIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGVhSGVhZGluZy50ZXh0Q29udGVudCA9ICdUZWEnO1xuICBjb25zdCB0ZWFMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdGVhTGlzdC5pbm5lckhUTUwgPSBgXG4gICAgPGxpPkdyZWVuIFRlYS4uLi4uLi4uLi4uLi4uLi4gMTEwPC9saT5cbiAgICA8bGk+TWF0Y2hhIFRlYS4uLi4uLi4uLi4uLi4gMTYwPC9saT5cbiAgICA8bGk+QmxhY2sgVGVhLi4uLi4uLi4uLi4uLi4uLi4gMTMwPC9saT5cbiAgICA8bGk+T29sb25nIFRlYS4uLi4uLi4uLi4uLi4gMTY1PC9saT5cbiAgYDtcblxuICB0ZWFUaXRsZS5hcHBlbmRDaGlsZCh0ZWFJbWFnZSk7XG4gIHRlYVRpdGxlLmFwcGVuZENoaWxkKHRlYUhlYWRpbmcpO1xuICB0ZWFTZWN0aW9uLmFwcGVuZENoaWxkKHRlYVRpdGxlKTtcbiAgdGVhU2VjdGlvbi5hcHBlbmRDaGlsZCh0ZWFMaXN0KTtcblxuICAvLyBDcmVhdGUgQmVhbnMgc2VjdGlvblxuICBjb25zdCBiZWFuc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmVhbnNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ0JlYW5zJyk7XG4gIGNvbnN0IGJlYW5zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmVhbnNUaXRsZS5jbGFzc0xpc3QuYWRkKCdiZWFucy10aXRsZScpO1xuICBjb25zdCBiZWFuc0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJlYW5zSW1hZ2Uuc3JjID0gJy9zcmMvYXNzZXRzL0JlYW5zLnBuZyc7XG4gIGJlYW5zSW1hZ2UuYWx0ID0gJ0NvZmZlZSBCZWFucyc7XG4gIGNvbnN0IGJlYW5zSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGJlYW5zSGVhZGluZy50ZXh0Q29udGVudCA9ICdDb2ZmZWUgQmVhbnMnO1xuICBjb25zdCBiZWFuc1RhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgYmVhbnNUYWJsZS5pbm5lckhUTUwgPSBgXG4gIDx0aGVhZD5cbiAgPHRyPlxuICAgIDx0aD5Db2ZmZWUgVmFyaWFudDwvdGg+XG4gICAgPHRoIGNsYXNzPVwiZ3JhbXNcIj4yNTBnPC90aD5cbiAgICA8dGggY2xhc3M9XCJraWxvXCI+MWtnPC90aD5cbiAgPC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5PlxuICA8dHI+XG4gICAgPHRkPkJ1a2lkbm9uIChOYXR1cmFsL1dhc2hlZCk8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInByaWNlXCI+UDQ1NS4wMDwvdGQ+XG4gICAgPHRkIGNsYXNzPVwia2lsb1wiPlAxLDc3MC4wMDwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+SXRvZ29uIChOYXR1cmFsL1dhc2hlZCk8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInByaWNlXCI+UDM3MC4wMDwvdGQ+XG4gICAgPHRkIGNsYXNzPVwia2lsb1wiPlAxLDQyNS4wMDwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+S2FwYW5nYW4gV2FzaGVkPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJwcmljZVwiPlAzNzAuMDA8L3RkPlxuICAgIDx0ZCBjbGFzcz1cImtpbG9cIj5QMSw0MjUuMDA8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPk10LiBBcG8gKE5hdHVyYWwvSG9uZXkvV2FzaGVkKTwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicHJpY2VcIj5QNDM1LjAwPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJraWxvXCI+UDEsNjg1LjAwPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5Nci4gTWF0dXR1bSAoV2FzaGVkKTwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicHJpY2VcIj5QMzI1LjAwPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5TYWdhZGEgQ29mZmVlPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJwcmljZVwiPlAzNzAuMDA8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPlR1YmxheSBOYXR1cmFsL1dhc2hlZDwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicHJpY2VcIj5QMzcwLjAwPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5UdWRpbmcgQ29mZmVlIChOYXR1cmFsbCk8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInByaWNlXCI+UDM3MC4wMDwvdGQ+XG4gIDwvdHI+XG48L3Rib2R5PlxuICBgO1xuXG4gIGJlYW5zVGl0bGUuYXBwZW5kQ2hpbGQoYmVhbnNJbWFnZSk7XG4gIGJlYW5zVGl0bGUuYXBwZW5kQ2hpbGQoYmVhbnNIZWFkaW5nKTtcbiAgYmVhbnNTZWN0aW9uLmFwcGVuZENoaWxkKGJlYW5zVGl0bGUpO1xuICBiZWFuc1NlY3Rpb24uYXBwZW5kQ2hpbGQoYmVhbnNUYWJsZSk7XG5cbiAgLy8gQXBwZW5kIGFsbCBzZWN0aW9ucyB0byB0aGUgbWVudSBlbGVtZW50XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY29mZmVlU2VjdGlvbik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQodGVhU2VjdGlvbik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoYmVhbnNTZWN0aW9uKTtcblxuICAvLyBBcHBlbmQgYWxsIGVsZW1lbnRzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcGFyZW50IGVsZW1lbnRzXG4gIGNvbnRlbnRDYXJkLmFwcGVuZENoaWxkKGJyYW5kKTtcbiAgY29udGVudENhcmQuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgY29udGVudENhcmQuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgcm9vdC5hcHBlbmRDaGlsZChjb250ZW50Q2FyZCk7XG5cbiAgLy8gQXBwZW5kIHRoZSByb290IGVsZW1lbnQgdG8gdGhlIGJvZHlcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyb290KTtcblxuICByZXR1cm4gcm9vdDtcbn1cblxuLy8gRXhwb3J0IHRoZSBjcmVhdGVNZW51U2VjdGlvbiBmdW5jdGlvbiBhcyBhIG1vZHVsZVxuZXhwb3J0ICB7Y3JlYXRlTWVudVNlY3Rpb259O1xuIiwiLy8gSW1wb3J0IHRoZSBuZWNlc3NhcnkgZnVuY3Rpb25zIGFuZCBtb2R1bGVzXG5pbXBvcnQgeyBjcmVhdGVIb21lU2VjdGlvbiB9IGZyb20gJy4vcGFnZXMvaG9tZSc7XG5pbXBvcnQgeyBjcmVhdGVNZW51U2VjdGlvbiB9IGZyb20gJy4vcGFnZXMvbWVudSc7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0U2VjdGlvbiB9IGZyb20gJy4vcGFnZXMvY29udGFjdCc7XG5cbmZ1bmN0aW9uIGluaXRXZWJzaXRlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAvLyBGdW5jdGlvbiB0byBjcmVhdGUgYW5kIHJlbmRlciB0aGUgaGVhZGVyIHNlY3Rpb25cbiAgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIC8vIENyZWF0ZSB0aGUgSFRNTCBzdHJ1Y3R1cmUgZm9yIHRoZSBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuY2xhc3NOYW1lID0gJ25hdmJhcic7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gY3JlYXRlTmF2QnV0dG9uKCdIb21lJywgbG9hZEhvbWVQYWdlKTtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gY3JlYXRlTmF2QnV0dG9uKCdNZW51JywgbG9hZE1lbnVQYWdlKTtcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gY3JlYXRlTmF2QnV0dG9uKCdDb250YWN0JywgbG9hZENvbnRhY3RQYWdlKTtcblxuICAgIHVsLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIHVsLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIHVsLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICAvLyBBZGQgdGhlIGhlYWRlciB0byB0aGUgYm9keVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIHRoZSBmb290ZXIgc2VjdGlvblxuICBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3Qgc29jTWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc29jTWVkLmNsYXNzTmFtZSA9ICdzb2MtbWVkJztcblxuICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHNvY2lhbCBtZWRpYSBsaW5rc1xuICAgIGNvbnN0IGluc3RhZ3JhbUxpbmsgPSBjcmVhdGVGb290ZXJMaW5rKCc8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1pbnN0YWdyYW1cIj48L2k+IEluc3RhZ3JhbScpO1xuICAgIGNvbnN0IG1lc3NlbmdlckxpbmsgPSBjcmVhdGVGb290ZXJMaW5rKCc8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1mYWNlYm9vay1tZXNzZW5nZXJcIj48L2k+IE1lc3NlbmdlcicpO1xuICAgIGNvbnN0IHRpa3Rva0xpbmsgPSBjcmVhdGVGb290ZXJMaW5rKCc8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS10aWt0b2tcIj48L2k+IFRpa3RvaycpO1xuXG4gICAgc29jTWVkLmFwcGVuZENoaWxkKGluc3RhZ3JhbUxpbmspO1xuICAgIHNvY01lZC5hcHBlbmRDaGlsZChtZXNzZW5nZXJMaW5rKTtcbiAgICBzb2NNZWQuYXBwZW5kQ2hpbGQodGlrdG9rTGluayk7XG5cbiAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCBjb3B5cmlnaHQgaW5mb3JtYXRpb25cbiAgICBjb25zdCBjb3B5cmlnaHQgPSBjcmVhdGVGb290ZXJMaW5rKCc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY29weXJpZ2h0XCI+PC9pPiBDb2ZmZWUgU2hvcCcpO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHNvY01lZCk7XG4gICAgc29jTWVkLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5cbiAgICAvLyBBZGQgdGhlIGZvb3RlciB0byB0aGUgYm9keVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgfVxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBuYXZpZ2F0aW9uIGJ1dHRvblxuICBmdW5jdGlvbiBjcmVhdGVOYXZCdXR0b24odGV4dCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9ICduYXYtYnV0dG9uJztcbiAgICBidXR0b24uaW5uZXJIVE1MID0gYDxsaT4ke3RleHR9PC9saT5gO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnRcbiAgICAgIGNsaWNrSGFuZGxlcigpO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgZm9vdGVyIGxpbmtcbiAgZnVuY3Rpb24gY3JlYXRlRm9vdGVyTGluayh0ZXh0KSB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbGluay5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHJldHVybiBsaW5rO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCByZW5kZXIgdGhlIGhvbWUgc2VjdGlvblxuICBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJzsgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudFxuICAgIGNyZWF0ZUhvbWVTZWN0aW9uKCk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBjcmVhdGUgYW5kIHJlbmRlciB0aGUgbWVudSBzZWN0aW9uXG4gIGZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XG4gICAgY3JlYXRlTWVudVNlY3Rpb24oKTsgLy8gVXNlIHRoZSBpbXBvcnRlZCBmdW5jdGlvblxuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCByZW5kZXIgdGhlIGNvbnRhY3Qgc2VjdGlvblxuICBmdW5jdGlvbiBsb2FkQ29udGFjdFBhZ2UoKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJzsgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudFxuICAgIGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCk7IC8vIFVzZSB0aGUgaW1wb3J0ZWQgZnVuY3Rpb25cbiAgfVxuXG4gIC8vIENhbGwgdGhlIGNyZWF0ZUhlYWRlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSBhbmQgYXBwZW5kIHRoZSBoZWFkZXJcbiAgY3JlYXRlSGVhZGVyKCk7XG5cbiAgLy8gQ2FsbCB0aGUgY3JlYXRlRm9vdGVyIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGFuZCBhcHBlbmQgdGhlIGZvb3RlclxuICBjcmVhdGVGb290ZXIoKTtcblxuICAvLyBJbml0aWFsbHkgbG9hZCB0aGUgSG9tZSBwYWdlIChzZXQgYXMgdGhlIGRlZmF1bHQgcGFnZSlcbiAgbG9hZEhvbWVQYWdlKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgY3JlYXRlSG9tZVNlY3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnVQYWdlKCkge1xuICBjb250ZW50LmlubmVySFRNTCA9ICcnOyBcbiAgY3JlYXRlTWVudVNlY3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3RQYWdlKCkge1xuICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICBjcmVhdGVDb250YWN0U2VjdGlvbigpO1xufVxuXG5cbi8vIEluaXRpYWxpemUgdGhlIHdlYnNpdGVcbmV4cG9ydCB7aW5pdFdlYnNpdGV9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0V2Vic2l0ZSB9IGZyb20gXCIuL3dlYnNpdGVcIjtcblxuaW5pdFdlYnNpdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=