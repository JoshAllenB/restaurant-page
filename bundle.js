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
  // Get the existing "content" div from the template
  const content = document.querySelector('.content')

  // Create the content-card element
  const contentCard = document.createElement('div');
  contentCard.classList.add('content-card');

  // Create the brand element
  const brand = document.createElement('div');
  brand.classList.add('brand');
  const brandTitle = document.createElement('h1');
  brandTitle.textContent = 'Coffee Shop ';

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

  // Append the content-card to the existing "content" div
  content.appendChild(contentCard);
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

  // Get the existing "content" div from the template
  const content = document.querySelector('.content');

  // Create the content-card element
  const contentCard = document.createElement('div');
  contentCard.classList.add('content-card');

  // Create and append the brand section
  const brand = document.createElement('div');
  brand.className = 'brand';
  const brandTitle = document.createElement('h1');
  brandTitle.innerHTML = 'Coffee Shop  <i class="fa-solid fa-mug-hot"></i>';
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

  const content = document.querySelector('.content')

  // Create the content-card element
  const contentCard = document.createElement('div');
  contentCard.classList.add('content-card');

  // Create the brand element
  const brand = document.createElement('div');
  brand.classList.add('brand');
  const brandTitle = document.createElement('h1');
  brandTitle.textContent = 'Coffee ';

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
  coffeeImage.src = '/assets/Coffee.png';
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
  teaImage.src = '/assets/Tea.png';
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
  beansImage.src = '/assets/Beans.png';
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

  // Append the content-card to the existing "content" div
  content.appendChild(contentCard);

  // Return the existing "content" div for consistency
  return content;
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




// Define a function to create and render the header
function createHeader() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.className = 'navbar';

  const sections = [
    { text: 'Home', handler: _pages_home__WEBPACK_IMPORTED_MODULE_0__.createHomeSection },
    { text: 'Menu', handler: _pages_menu__WEBPACK_IMPORTED_MODULE_1__.createMenuSection },
    { text: 'Contact', handler: _pages_contact__WEBPACK_IMPORTED_MODULE_2__.createContactSection },
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
  (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.createHomeSection)(); // Initially load the Home page
}

// Export the initWebsite function



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUM4Qjs7Ozs7Ozs7Ozs7Ozs7O0FDekQ5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBK0I7Ozs7Ozs7Ozs7Ozs7OztBQzFGL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaks1QjtBQUNpRDtBQUNBO0FBQ007O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sdUJBQXVCLDBEQUFpQixFQUFFO0FBQ2hELE1BQU0sdUJBQXVCLDBEQUFpQixFQUFFO0FBQ2hELE1BQU0sMEJBQTBCLGdFQUFvQixFQUFFO0FBQ3REOztBQUVBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOERBQWlCLElBQUk7QUFDdkI7O0FBRUE7QUFDdUI7Ozs7Ozs7VUN0RnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0M7O0FBRXhDLHFEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2VzLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlcy8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZXMvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2VzLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2VzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2VzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdFNlY3Rpb24oKSB7XG4gIC8vIEdldCB0aGUgZXhpc3RpbmcgXCJjb250ZW50XCIgZGl2IGZyb20gdGhlIHRlbXBsYXRlXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgLy8gQ3JlYXRlIHRoZSBjb250ZW50LWNhcmQgZWxlbWVudFxuICBjb25zdCBjb250ZW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQnKTtcblxuICAvLyBDcmVhdGUgdGhlIGJyYW5kIGVsZW1lbnRcbiAgY29uc3QgYnJhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnJhbmQuY2xhc3NMaXN0LmFkZCgnYnJhbmQnKTtcbiAgY29uc3QgYnJhbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGJyYW5kVGl0bGUudGV4dENvbnRlbnQgPSAnQ29mZmVlIFNob3AgJztcblxuICAvLyBDcmVhdGUgdGhlIGkgZWxlbWVudCBmb3IgdGhlIG11ZyBpY29uXG4gIGNvbnN0IG11Z0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIG11Z0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtbXVnLWhvdCcpO1xuXG4gIC8vIEFwcGVuZCB0aGUgdGl0bGUgYW5kIGljb24gdG8gdGhlIGJyYW5kIGVsZW1lbnRcbiAgYnJhbmRUaXRsZS5hcHBlbmRDaGlsZChtdWdJY29uKTtcbiAgYnJhbmQuYXBwZW5kQ2hpbGQoYnJhbmRUaXRsZSk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBjb250YWN0SW5mbyBlbGVtZW50XG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RJbmZvJyk7XG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcblxuICAvLyBDcmVhdGUgdGhlIHN0b3JlIGVsZW1lbnRcbiAgY29uc3Qgc3RvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RvcmUuY2xhc3NMaXN0LmFkZCgnc3RvcmUnKTtcbiAgc3RvcmUuaW5uZXJIVE1MID0gJzxwPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtbG9jYXRpb24tZG90XCI+PC9pPiAzNjUgUmFuZG9tIFN0LCBUb3duc1ZpbGxlPC9wPic7XG5cbiAgLy8gQ3JlYXRlIHRoZSBudW1iZXIgZWxlbWVudFxuICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbnVtYmVyLmNsYXNzTGlzdC5hZGQoJ251bWJlcicpO1xuICBudW1iZXIuaW5uZXJIVE1MID0gJzxwPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGhvbmVcIiBzdHlsZT1cImNvbG9yOiAjZmZmZmZmO1wiPjwvaT4gMTIzLTQ1Ni03ODkwMDwvcD4nO1xuXG4gIC8vIENyZWF0ZSB0aGUgZW1haWwgZWxlbWVudFxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdlbWFpbCcpO1xuICBlbWFpbC5pbm5lckhUTUwgPSAnPHA+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbnZlbG9wZVwiIHN0eWxlPVwiY29sb3I6ICNmZmZmZmY7XCI+PC9pPiBBYnNvbHV0ZWx5UmVhbEVtYWlsQHJlYWwuY29tPC9wPic7XG5cbiAgLy8gQXBwZW5kIGFsbCBlbGVtZW50cyB0byB0aGVpciByZXNwZWN0aXZlIHBhcmVudCBlbGVtZW50c1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChzdG9yZSk7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKG51bWJlcik7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICBjb250ZW50Q2FyZC5hcHBlbmRDaGlsZChicmFuZCk7XG4gIGNvbnRlbnRDYXJkLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcblxuICAvLyBBcHBlbmQgdGhlIGNvbnRlbnQtY2FyZCB0byB0aGUgZXhpc3RpbmcgXCJjb250ZW50XCIgZGl2XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudENhcmQpO1xufVxuXG4vLyBFeHBvcnQgdGhlIGNyZWF0ZUNvbnRhY3RTZWN0aW9uIGZ1bmN0aW9uIGFzIGEgbW9kdWxlXG5leHBvcnQge2NyZWF0ZUNvbnRhY3RTZWN0aW9ufTtcbiIsIi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIHRoZSBob21lIHNlY3Rpb24gYWxvbmcgd2l0aCB0aGUgY29udGVudFxuZnVuY3Rpb24gY3JlYXRlSG9tZVNlY3Rpb24oKSB7XG5cbiAgLy8gR2V0IHRoZSBleGlzdGluZyBcImNvbnRlbnRcIiBkaXYgZnJvbSB0aGUgdGVtcGxhdGVcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBjb250ZW50LWNhcmQgZWxlbWVudFxuICBjb25zdCBjb250ZW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQnKTtcblxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgYnJhbmQgc2VjdGlvblxuICBjb25zdCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBicmFuZC5jbGFzc05hbWUgPSAnYnJhbmQnO1xuICBjb25zdCBicmFuZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYnJhbmRUaXRsZS5pbm5lckhUTUwgPSAnQ29mZmVlIFNob3AgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbXVnLWhvdFwiPjwvaT4nO1xuICBicmFuZC5hcHBlbmRDaGlsZChicmFuZFRpdGxlKTtcblxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgYWJvdXQgc2VjdGlvblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhYm91dC5jbGFzc05hbWUgPSAnYWJvdXQnO1xuICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYWJvdXRUaXRsZS5pbm5lckhUTUwgPSAnQWJvdXQgVXMnO1xuICBjb25zdCBhYm91dFN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgYWJvdXRTdWJ0aXRsZS5pbm5lckhUTUwgPSAnV2VsY29tZSB0byBvdXIgQ29mZmVlIFNob3AhJztcbiAgY29uc3QgYWJvdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFib3V0UGFyYWdyYXBoLmlubmVySFRNTCA9XG4gICAgXCJXZSdyZSBwYXNzaW9uYXRlIGFib3V0IGNvZmZlZSBhbmQgZGVkaWNhdGVkIHRvIGRlbGl2ZXJpbmcgZXhjZXB0aW9uYWwgZmxhdm9ycyBpbiBldmVyeSBjdXAuIE91ciBjb21taXRtZW50IHRvIHF1YWxpdHkgYW5kIHN1c3RhaW5hYmlsaXR5IGRyaXZlcyBldmVyeXRoaW5nIHdlIGRvLlwiO1xuICBjb25zdCBhYm91dFN1YnRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGFib3V0U3VidGl0bGUyLmlubmVySFRNTCA9ICdXaGF0IHdlIE9mZmVyOic7XG4gIGNvbnN0IGFib3V0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGFib3V0TGlzdEl0ZW1zID0gW1xuICAgICdIYW5kY3JhZnRlZCBjb2ZmZWUgYmV2ZXJhZ2VzJyxcbiAgICAnRnJlc2ggcm9hc3RlZCBjb2ZmZWUgYmVhbnMnLFxuICAgICdDb3p5LCB3ZWxjb21pbmcgc3BhY2UnLFxuICBdO1xuICBhYm91dExpc3RJdGVtcy5mb3JFYWNoKChpdGVtVGV4dCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBpdGVtVGV4dDtcbiAgICBhYm91dExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcblxuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRTdWJ0aXRsZSk7XG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0UGFyYWdyYXBoKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRTdWJ0aXRsZTIpO1xuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dExpc3QpO1xuXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBzdG9yZSBob3VycyBzZWN0aW9uXG4gIGNvbnN0IHN0b3JlSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RvcmVIb3Vycy5jbGFzc05hbWUgPSAnc3RvcmUtaG91cnMnO1xuICBjb25zdCBzdG9yZUhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBzdG9yZUhvdXJzVGl0bGUuaW5uZXJIVE1MID0gJ1N0b3JlIEhvdXJzIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2xvY2tcIj48L2k+JztcbiAgY29uc3QgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgaG91cnNMaXN0SXRlbXMgPSBbXG4gICAgJ1N1bmRheTogOGFtIC0gOHBtJyxcbiAgICAnTW9uZGF5OiA2YW0gLSA2cG0nLFxuICAgICdUdWVzZGF5OiA2YW0gLSA2cG0nLFxuICAgICdXZWRuZXNkYXk6IDZhbSAtIDZwbScsXG4gICAgJ1RodXJzZGF5OiA2YW0gLSAxMHBtJyxcbiAgICAnRnJpZGF5OiA2YW0gLSAxMHBtJyxcbiAgXTtcbiAgaG91cnNMaXN0SXRlbXMuZm9yRWFjaCgoaXRlbVRleHQpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gaXRlbVRleHQ7XG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG5cbiAgc3RvcmVIb3Vycy5hcHBlbmRDaGlsZChzdG9yZUhvdXJzVGl0bGUpO1xuICBzdG9yZUhvdXJzLmFwcGVuZENoaWxkKGhvdXJzTGlzdCk7XG5cbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIGxvY2F0aW9uIHNlY3Rpb25cbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jYXRpb24uY2xhc3NOYW1lID0gJ2xvY2F0aW9uJztcbiAgY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGxvY2F0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ1N0b3JlIExvY2F0aW9uIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbG9jYXRpb24tZG90XCI+PC9pPic7XG4gIGNvbnN0IGxvY2F0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb2NhdGlvblBhcmFncmFwaC5pbm5lckhUTUwgPSAnMzY1IFJhbmRvbSBTdCwgVG93bnNWaWxsZSc7XG5cbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25UaXRsZSk7XG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uUGFyYWdyYXBoKTtcblxuICBjb250ZW50Q2FyZC5hcHBlbmRDaGlsZChicmFuZCk7XG4gIGNvbnRlbnRDYXJkLmFwcGVuZENoaWxkKGFib3V0KTtcbiAgY29udGVudENhcmQuYXBwZW5kQ2hpbGQoc3RvcmVIb3Vycyk7XG4gIGNvbnRlbnRDYXJkLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRDYXJkKTtcbn1cblxuICAvLyBFeHBvcnQgdGhlIGNyZWF0ZUhvbWVTZWN0aW9uIGZ1bmN0aW9uIGZvciB1c2UgaW4gd2Vic2l0ZS5qc1xuICBleHBvcnQgeyBjcmVhdGVIb21lU2VjdGlvbiB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlTWVudVNlY3Rpb24oKSB7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQtY2FyZCBlbGVtZW50XG4gIGNvbnN0IGNvbnRlbnRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnRDYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY2FyZCcpO1xuXG4gIC8vIENyZWF0ZSB0aGUgYnJhbmQgZWxlbWVudFxuICBjb25zdCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBicmFuZC5jbGFzc0xpc3QuYWRkKCdicmFuZCcpO1xuICBjb25zdCBicmFuZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYnJhbmRUaXRsZS50ZXh0Q29udGVudCA9ICdDb2ZmZWUgJztcblxuICAvLyBDcmVhdGUgdGhlIGkgZWxlbWVudCBmb3IgdGhlIG11ZyBpY29uXG4gIGNvbnN0IG11Z0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIG11Z0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtbXVnLWhvdCcpO1xuXG4gIC8vIEFwcGVuZCB0aGUgdGl0bGUgYW5kIGljb24gdG8gdGhlIGJyYW5kIGVsZW1lbnRcbiAgYnJhbmRUaXRsZS5hcHBlbmRDaGlsZChtdWdJY29uKTtcbiAgYnJhbmQuYXBwZW5kQ2hpbGQoYnJhbmRUaXRsZSk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBtZW51IHRpdGxlIGVsZW1lbnRcbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG4gIGNvbnN0IG1lbnVUaXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBtZW51VGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51VGl0bGUuYXBwZW5kQ2hpbGQobWVudVRpdGxlVGV4dCk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBtZW51IGVsZW1lbnRcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAvLyBDcmVhdGUgQ29mZmVlIHNlY3Rpb25cbiAgY29uc3QgY29mZmVlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb2ZmZWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ0NvZmZlZScpO1xuICBjb25zdCBjb2ZmZWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb2ZmZWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb2ZmZWUtdGl0bGUnKTtcbiAgY29uc3QgY29mZmVlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29mZmVlSW1hZ2Uuc3JjID0gJy9hc3NldHMvQ29mZmVlLnBuZyc7XG4gIGNvZmZlZUltYWdlLmFsdCA9ICdDb2ZmZWUnO1xuICBjb25zdCBjb2ZmZWVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29mZmVlSGVhZGluZy50ZXh0Q29udGVudCA9ICdDb2ZmZWUnO1xuICBjb25zdCBjb2ZmZWVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29mZmVlTGlzdC5pbm5lckhUTUwgPSBgXG4gICAgPGxpPkVzcHJlc3NvLi4uLi4uLi4uLi4uIDE3MDwvbGk+XG4gICAgPGxpPkFtZXJpY2Fuby4uLi4uLi4uLiAxMTA8L2xpPlxuICAgIDxsaT5MYXR0ZS4uLi4uLi4uLi4uLi4uLi4uLi4gMTYwPC9saT5cbiAgICA8bGk+RmxhdCBXaGl0ZS4uLi4uLi4uLi4gMTQ1PC9saT5cbiAgYDtcblxuICBjb2ZmZWVUaXRsZS5hcHBlbmRDaGlsZChjb2ZmZWVJbWFnZSk7XG4gIGNvZmZlZVRpdGxlLmFwcGVuZENoaWxkKGNvZmZlZUhlYWRpbmcpO1xuICBjb2ZmZWVTZWN0aW9uLmFwcGVuZENoaWxkKGNvZmZlZVRpdGxlKTtcbiAgY29mZmVlU2VjdGlvbi5hcHBlbmRDaGlsZChjb2ZmZWVMaXN0KTtcblxuICAvLyBDcmVhdGUgVGVhIHNlY3Rpb25cbiAgY29uc3QgdGVhU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZWFTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ1RlYScpO1xuICBjb25zdCB0ZWFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZWFUaXRsZS5jbGFzc0xpc3QuYWRkKCd0ZWEtdGl0bGUnKTtcbiAgY29uc3QgdGVhSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgdGVhSW1hZ2Uuc3JjID0gJy9hc3NldHMvVGVhLnBuZyc7XG4gIHRlYUltYWdlLmFsdCA9ICdUZWEnO1xuICBjb25zdCB0ZWFIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGVhSGVhZGluZy50ZXh0Q29udGVudCA9ICdUZWEnO1xuICBjb25zdCB0ZWFMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdGVhTGlzdC5pbm5lckhUTUwgPSBgXG4gICAgPGxpPkdyZWVuIFRlYS4uLi4uLi4uLi4uLi4uLi4gMTEwPC9saT5cbiAgICA8bGk+TWF0Y2hhIFRlYS4uLi4uLi4uLi4uLi4gMTYwPC9saT5cbiAgICA8bGk+QmxhY2sgVGVhLi4uLi4uLi4uLi4uLi4uLi4gMTMwPC9saT5cbiAgICA8bGk+T29sb25nIFRlYS4uLi4uLi4uLi4uLi4gMTY1PC9saT5cbiAgYDtcblxuICB0ZWFUaXRsZS5hcHBlbmRDaGlsZCh0ZWFJbWFnZSk7XG4gIHRlYVRpdGxlLmFwcGVuZENoaWxkKHRlYUhlYWRpbmcpO1xuICB0ZWFTZWN0aW9uLmFwcGVuZENoaWxkKHRlYVRpdGxlKTtcbiAgdGVhU2VjdGlvbi5hcHBlbmRDaGlsZCh0ZWFMaXN0KTtcblxuICAvLyBDcmVhdGUgQmVhbnMgc2VjdGlvblxuICBjb25zdCBiZWFuc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmVhbnNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ0JlYW5zJyk7XG4gIGNvbnN0IGJlYW5zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmVhbnNUaXRsZS5jbGFzc0xpc3QuYWRkKCdiZWFucy10aXRsZScpO1xuICBjb25zdCBiZWFuc0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJlYW5zSW1hZ2Uuc3JjID0gJy9hc3NldHMvQmVhbnMucG5nJztcbiAgYmVhbnNJbWFnZS5hbHQgPSAnQ29mZmVlIEJlYW5zJztcbiAgY29uc3QgYmVhbnNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgYmVhbnNIZWFkaW5nLnRleHRDb250ZW50ID0gJ0NvZmZlZSBCZWFucyc7XG4gIGNvbnN0IGJlYW5zVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICBiZWFuc1RhYmxlLmlubmVySFRNTCA9IGBcbiAgPHRoZWFkPlxuICA8dHI+XG4gICAgPHRoPkNvZmZlZSBWYXJpYW50PC90aD5cbiAgICA8dGggY2xhc3M9XCJncmFtc1wiPjI1MGc8L3RoPlxuICAgIDx0aCBjbGFzcz1cImtpbG9cIj4xa2c8L3RoPlxuICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gIDx0cj5cbiAgICA8dGQ+QnVraWRub24gKE5hdHVyYWwvV2FzaGVkKTwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicHJpY2VcIj5QNDU1LjAwPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJraWxvXCI+UDEsNzcwLjAwPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5JdG9nb24gKE5hdHVyYWwvV2FzaGVkKTwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicHJpY2VcIj5QMzcwLjAwPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJraWxvXCI+UDEsNDI1LjAwPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5LYXBhbmdhbiBXYXNoZWQ8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInByaWNlXCI+UDM3MC4wMDwvdGQ+XG4gICAgPHRkIGNsYXNzPVwia2lsb1wiPlAxLDQyNS4wMDwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+TXQuIEFwbyAoTmF0dXJhbC9Ib25leS9XYXNoZWQpPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJwcmljZVwiPlA0MzUuMDA8L3RkPlxuICAgIDx0ZCBjbGFzcz1cImtpbG9cIj5QMSw2ODUuMDA8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPk1yLiBNYXR1dHVtIChXYXNoZWQpPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJwcmljZVwiPlAzMjUuMDA8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPlNhZ2FkYSBDb2ZmZWU8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInByaWNlXCI+UDM3MC4wMDwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+VHVibGF5IE5hdHVyYWwvV2FzaGVkPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJwcmljZVwiPlAzNzAuMDA8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPlR1ZGluZyBDb2ZmZWUgKE5hdHVyYWxsKTwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicHJpY2VcIj5QMzcwLjAwPC90ZD5cbiAgPC90cj5cbjwvdGJvZHk+XG4gIGA7XG5cbiAgYmVhbnNUaXRsZS5hcHBlbmRDaGlsZChiZWFuc0ltYWdlKTtcbiAgYmVhbnNUaXRsZS5hcHBlbmRDaGlsZChiZWFuc0hlYWRpbmcpO1xuICBiZWFuc1NlY3Rpb24uYXBwZW5kQ2hpbGQoYmVhbnNUaXRsZSk7XG4gIGJlYW5zU2VjdGlvbi5hcHBlbmRDaGlsZChiZWFuc1RhYmxlKTtcblxuICAvLyBBcHBlbmQgYWxsIHNlY3Rpb25zIHRvIHRoZSBtZW51IGVsZW1lbnRcbiAgbWVudS5hcHBlbmRDaGlsZChjb2ZmZWVTZWN0aW9uKTtcbiAgbWVudS5hcHBlbmRDaGlsZCh0ZWFTZWN0aW9uKTtcbiAgbWVudS5hcHBlbmRDaGlsZChiZWFuc1NlY3Rpb24pO1xuXG4gIC8vIEFwcGVuZCBhbGwgZWxlbWVudHMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBwYXJlbnQgZWxlbWVudHNcbiAgY29udGVudENhcmQuYXBwZW5kQ2hpbGQoYnJhbmQpO1xuICBjb250ZW50Q2FyZC5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICBjb250ZW50Q2FyZC5hcHBlbmRDaGlsZChtZW51KTtcblxuICAvLyBBcHBlbmQgdGhlIGNvbnRlbnQtY2FyZCB0byB0aGUgZXhpc3RpbmcgXCJjb250ZW50XCIgZGl2XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudENhcmQpO1xuXG4gIC8vIFJldHVybiB0aGUgZXhpc3RpbmcgXCJjb250ZW50XCIgZGl2IGZvciBjb25zaXN0ZW5jeVxuICByZXR1cm4gY29udGVudDtcbn1cblxuLy8gRXhwb3J0IHRoZSBjcmVhdGVNZW51U2VjdGlvbiBmdW5jdGlvbiBhcyBhIG1vZHVsZVxuZXhwb3J0ICB7Y3JlYXRlTWVudVNlY3Rpb259O1xuIiwiLy8gSW1wb3J0IHRoZSBuZWNlc3NhcnkgZnVuY3Rpb25zIGFuZCBtb2R1bGVzXG5pbXBvcnQgeyBjcmVhdGVIb21lU2VjdGlvbiB9IGZyb20gJy4vcGFnZXMvaG9tZSc7XG5pbXBvcnQgeyBjcmVhdGVNZW51U2VjdGlvbiB9IGZyb20gJy4vcGFnZXMvbWVudSc7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0U2VjdGlvbiB9IGZyb20gJy4vcGFnZXMvY29udGFjdCc7XG5cbi8vIERlZmluZSBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIHRoZSBoZWFkZXJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsLmNsYXNzTmFtZSA9ICduYXZiYXInO1xuXG4gIGNvbnN0IHNlY3Rpb25zID0gW1xuICAgIHsgdGV4dDogJ0hvbWUnLCBoYW5kbGVyOiBjcmVhdGVIb21lU2VjdGlvbiB9LFxuICAgIHsgdGV4dDogJ01lbnUnLCBoYW5kbGVyOiBjcmVhdGVNZW51U2VjdGlvbiB9LFxuICAgIHsgdGV4dDogJ0NvbnRhY3QnLCBoYW5kbGVyOiBjcmVhdGVDb250YWN0U2VjdGlvbiB9LFxuICBdO1xuXG4gIHNlY3Rpb25zLmZvckVhY2goKHsgdGV4dCwgaGFuZGxlciB9KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlTmF2QnV0dG9uKHRleHQsICgpID0+IHtcbiAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgaGFuZGxlcigpO1xuICAgIH0pO1xuICAgIHVsLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH0pO1xuXG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbi8vIERlZmluZSBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIHRoZSBmb290ZXJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnN0IHNvY01lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzb2NNZWQuY2xhc3NOYW1lID0gJ3NvYy1tZWQnO1xuXG4gIGNvbnN0IHNvY2lhbE1lZGlhTGlua3MgPSBbXG4gICAgJzxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWluc3RhZ3JhbVwiPjwvaT4gSW5zdGFncmFtJyxcbiAgICAnPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZmFjZWJvb2stbWVzc2VuZ2VyXCI+PC9pPiBNZXNzZW5nZXInLFxuICAgICc8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS10aWt0b2tcIj48L2k+IFRpa3RvaycsXG4gIF07XG5cbiAgc29jaWFsTWVkaWFMaW5rcy5mb3JFYWNoKGxpbmtUZXh0ID0+IHtcbiAgICBjb25zdCBsaW5rID0gY3JlYXRlRm9vdGVyTGluayhsaW5rVGV4dCk7XG4gICAgc29jTWVkLmFwcGVuZENoaWxkKGxpbmspO1xuICB9KTtcblxuICBjb25zdCBjb3B5cmlnaHQgPSBjcmVhdGVGb290ZXJMaW5rKCc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtY29weXJpZ2h0XCI+PC9pPiBDb2ZmZWUgU2hvcCcpO1xuICBzb2NNZWQuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoc29jTWVkKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgbmF2aWdhdGlvbiBidXR0b25cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJ1dHRvbih0ZXh0LCBjbGlja0hhbmRsZXIpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5jbGFzc05hbWUgPSAnbmF2LWJ1dHRvbic7XG4gIGJ1dHRvbi5pbm5lckhUTUwgPSBgPGxpPiR7dGV4dH08L2xpPmA7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gIHJldHVybiBidXR0b247XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBmb290ZXIgbGlua1xuZnVuY3Rpb24gY3JlYXRlRm9vdGVyTGluayh0ZXh0KSB7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBsaW5rLmlubmVySFRNTCA9IHRleHQ7XG4gIHJldHVybiBsaW5rO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY2xlYXIgdGhlIGNvbnRlbnRcbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG59XG5cbi8vIEluaXRpYWxpemUgdGhlIHdlYnNpdGVcbmZ1bmN0aW9uIGluaXRXZWJzaXRlKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlRm9vdGVyKCk7XG4gIGNsZWFyQ29udGVudCgpO1xuICBjcmVhdGVIb21lU2VjdGlvbigpOyAvLyBJbml0aWFsbHkgbG9hZCB0aGUgSG9tZSBwYWdlXG59XG5cbi8vIEV4cG9ydCB0aGUgaW5pdFdlYnNpdGUgZnVuY3Rpb25cbmV4cG9ydCB7IGluaXRXZWJzaXRlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRXZWJzaXRlIH0gZnJvbSBcIi4vd2Vic2l0ZVwiO1xuXG5pbml0V2Vic2l0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==