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
  brandTitle.textContent = 'Coffee Shop ';

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
  coffeeImage.src = '/dist/assets/Coffee.png';
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
  teaImage.src = '/dist/assets/Tea.png';
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
  beansImage.src = '/dist/assets/Beans.png';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTs7QUFFOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUM4Qjs7Ozs7Ozs7Ozs7Ozs7O0FDekQ5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBK0I7Ozs7Ozs7Ozs7Ozs7OztBQzFGL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaks1QjtBQUNpRDtBQUNBO0FBQ007O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sdUJBQXVCLDBEQUFpQixFQUFFO0FBQ2hELE1BQU0sdUJBQXVCLDBEQUFpQixFQUFFO0FBQ2hELE1BQU0sMEJBQTBCLGdFQUFvQixFQUFFO0FBQ3REOztBQUVBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOERBQWlCLElBQUk7QUFDdkI7O0FBRUE7QUFDdUI7Ozs7Ozs7VUN0RnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOd0M7O0FBRXhDLHFEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2VzLy4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlcy8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZXMvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2VzLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2VzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2VzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdFNlY3Rpb24oKSB7XG4gIC8vIEdldCB0aGUgZXhpc3RpbmcgXCJjb250ZW50XCIgZGl2IGZyb20gdGhlIHRlbXBsYXRlXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgLy8gQ3JlYXRlIHRoZSBjb250ZW50LWNhcmQgZWxlbWVudFxuICBjb25zdCBjb250ZW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQnKTtcblxuICAvLyBDcmVhdGUgdGhlIGJyYW5kIGVsZW1lbnRcbiAgY29uc3QgYnJhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnJhbmQuY2xhc3NMaXN0LmFkZCgnYnJhbmQnKTtcbiAgY29uc3QgYnJhbmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGJyYW5kVGl0bGUudGV4dENvbnRlbnQgPSAnQ29mZmVlIFNob3AgJztcblxuICAvLyBDcmVhdGUgdGhlIGkgZWxlbWVudCBmb3IgdGhlIG11ZyBpY29uXG4gIGNvbnN0IG11Z0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIG11Z0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtbXVnLWhvdCcpO1xuXG4gIC8vIEFwcGVuZCB0aGUgdGl0bGUgYW5kIGljb24gdG8gdGhlIGJyYW5kIGVsZW1lbnRcbiAgYnJhbmRUaXRsZS5hcHBlbmRDaGlsZChtdWdJY29uKTtcbiAgYnJhbmQuYXBwZW5kQ2hpbGQoYnJhbmRUaXRsZSk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBjb250YWN0SW5mbyBlbGVtZW50XG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3RJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RJbmZvJyk7XG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcblxuICAvLyBDcmVhdGUgdGhlIHN0b3JlIGVsZW1lbnRcbiAgY29uc3Qgc3RvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RvcmUuY2xhc3NMaXN0LmFkZCgnc3RvcmUnKTtcbiAgc3RvcmUuaW5uZXJIVE1MID0gJzxwPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtbG9jYXRpb24tZG90XCI+PC9pPiAzNjUgUmFuZG9tIFN0LCBUb3duc1ZpbGxlPC9wPic7XG5cbiAgLy8gQ3JlYXRlIHRoZSBudW1iZXIgZWxlbWVudFxuICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbnVtYmVyLmNsYXNzTGlzdC5hZGQoJ251bWJlcicpO1xuICBudW1iZXIuaW5uZXJIVE1MID0gJzxwPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGhvbmVcIiBzdHlsZT1cImNvbG9yOiAjZmZmZmZmO1wiPjwvaT4gMTIzLTQ1Ni03ODkwMDwvcD4nO1xuXG4gIC8vIENyZWF0ZSB0aGUgZW1haWwgZWxlbWVudFxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdlbWFpbCcpO1xuICBlbWFpbC5pbm5lckhUTUwgPSAnPHA+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbnZlbG9wZVwiIHN0eWxlPVwiY29sb3I6ICNmZmZmZmY7XCI+PC9pPiBBYnNvbHV0ZWx5UmVhbEVtYWlsQHJlYWwuY29tPC9wPic7XG5cbiAgLy8gQXBwZW5kIGFsbCBlbGVtZW50cyB0byB0aGVpciByZXNwZWN0aXZlIHBhcmVudCBlbGVtZW50c1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICBjb250YWN0SW5mby5hcHBlbmRDaGlsZChzdG9yZSk7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKG51bWJlcik7XG4gIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICBjb250ZW50Q2FyZC5hcHBlbmRDaGlsZChicmFuZCk7XG4gIGNvbnRlbnRDYXJkLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcblxuICAvLyBBcHBlbmQgdGhlIGNvbnRlbnQtY2FyZCB0byB0aGUgZXhpc3RpbmcgXCJjb250ZW50XCIgZGl2XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudENhcmQpO1xufVxuXG4vLyBFeHBvcnQgdGhlIGNyZWF0ZUNvbnRhY3RTZWN0aW9uIGZ1bmN0aW9uIGFzIGEgbW9kdWxlXG5leHBvcnQge2NyZWF0ZUNvbnRhY3RTZWN0aW9ufTtcbiIsIi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgcmVuZGVyIHRoZSBob21lIHNlY3Rpb24gYWxvbmcgd2l0aCB0aGUgY29udGVudFxuZnVuY3Rpb24gY3JlYXRlSG9tZVNlY3Rpb24oKSB7XG5cbiAgLy8gR2V0IHRoZSBleGlzdGluZyBcImNvbnRlbnRcIiBkaXYgZnJvbSB0aGUgdGVtcGxhdGVcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBjb250ZW50LWNhcmQgZWxlbWVudFxuICBjb25zdCBjb250ZW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50Q2FyZC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQnKTtcblxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgYnJhbmQgc2VjdGlvblxuICBjb25zdCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBicmFuZC5jbGFzc05hbWUgPSAnYnJhbmQnO1xuICBjb25zdCBicmFuZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYnJhbmRUaXRsZS5pbm5lckhUTUwgPSAnQ29mZmVlIFNob3AgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbXVnLWhvdFwiPjwvaT4nO1xuICBicmFuZC5hcHBlbmRDaGlsZChicmFuZFRpdGxlKTtcblxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgYWJvdXQgc2VjdGlvblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhYm91dC5jbGFzc05hbWUgPSAnYWJvdXQnO1xuICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYWJvdXRUaXRsZS5pbm5lckhUTUwgPSAnQWJvdXQgVXMnO1xuICBjb25zdCBhYm91dFN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgYWJvdXRTdWJ0aXRsZS5pbm5lckhUTUwgPSAnV2VsY29tZSB0byBvdXIgQ29mZmVlIFNob3AhJztcbiAgY29uc3QgYWJvdXRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFib3V0UGFyYWdyYXBoLmlubmVySFRNTCA9XG4gICAgXCJXZSdyZSBwYXNzaW9uYXRlIGFib3V0IGNvZmZlZSBhbmQgZGVkaWNhdGVkIHRvIGRlbGl2ZXJpbmcgZXhjZXB0aW9uYWwgZmxhdm9ycyBpbiBldmVyeSBjdXAuIE91ciBjb21taXRtZW50IHRvIHF1YWxpdHkgYW5kIHN1c3RhaW5hYmlsaXR5IGRyaXZlcyBldmVyeXRoaW5nIHdlIGRvLlwiO1xuICBjb25zdCBhYm91dFN1YnRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGFib3V0U3VidGl0bGUyLmlubmVySFRNTCA9ICdXaGF0IHdlIE9mZmVyOic7XG4gIGNvbnN0IGFib3V0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IGFib3V0TGlzdEl0ZW1zID0gW1xuICAgICdIYW5kY3JhZnRlZCBjb2ZmZWUgYmV2ZXJhZ2VzJyxcbiAgICAnRnJlc2ggcm9hc3RlZCBjb2ZmZWUgYmVhbnMnLFxuICAgICdDb3p5LCB3ZWxjb21pbmcgc3BhY2UnLFxuICBdO1xuICBhYm91dExpc3RJdGVtcy5mb3JFYWNoKChpdGVtVGV4dCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBpdGVtVGV4dDtcbiAgICBhYm91dExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcblxuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRTdWJ0aXRsZSk7XG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0UGFyYWdyYXBoKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRTdWJ0aXRsZTIpO1xuICBhYm91dC5hcHBlbmRDaGlsZChhYm91dExpc3QpO1xuXG4gIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBzdG9yZSBob3VycyBzZWN0aW9uXG4gIGNvbnN0IHN0b3JlSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RvcmVIb3Vycy5jbGFzc05hbWUgPSAnc3RvcmUtaG91cnMnO1xuICBjb25zdCBzdG9yZUhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBzdG9yZUhvdXJzVGl0bGUuaW5uZXJIVE1MID0gJ1N0b3JlIEhvdXJzIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtY2xvY2tcIj48L2k+JztcbiAgY29uc3QgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgaG91cnNMaXN0SXRlbXMgPSBbXG4gICAgJ1N1bmRheTogOGFtIC0gOHBtJyxcbiAgICAnTW9uZGF5OiA2YW0gLSA2cG0nLFxuICAgICdUdWVzZGF5OiA2YW0gLSA2cG0nLFxuICAgICdXZWRuZXNkYXk6IDZhbSAtIDZwbScsXG4gICAgJ1RodXJzZGF5OiA2YW0gLSAxMHBtJyxcbiAgICAnRnJpZGF5OiA2YW0gLSAxMHBtJyxcbiAgXTtcbiAgaG91cnNMaXN0SXRlbXMuZm9yRWFjaCgoaXRlbVRleHQpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gaXRlbVRleHQ7XG4gICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG5cbiAgc3RvcmVIb3Vycy5hcHBlbmRDaGlsZChzdG9yZUhvdXJzVGl0bGUpO1xuICBzdG9yZUhvdXJzLmFwcGVuZENoaWxkKGhvdXJzTGlzdCk7XG5cbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIGxvY2F0aW9uIHNlY3Rpb25cbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jYXRpb24uY2xhc3NOYW1lID0gJ2xvY2F0aW9uJztcbiAgY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGxvY2F0aW9uVGl0bGUuaW5uZXJIVE1MID0gJ1N0b3JlIExvY2F0aW9uIDxpIGNsYXNzPVwiZmEtc29saWQgZmEtbG9jYXRpb24tZG90XCI+PC9pPic7XG4gIGNvbnN0IGxvY2F0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb2NhdGlvblBhcmFncmFwaC5pbm5lckhUTUwgPSAnMzY1IFJhbmRvbSBTdCwgVG93bnNWaWxsZSc7XG5cbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25UaXRsZSk7XG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uUGFyYWdyYXBoKTtcblxuICBjb250ZW50Q2FyZC5hcHBlbmRDaGlsZChicmFuZCk7XG4gIGNvbnRlbnRDYXJkLmFwcGVuZENoaWxkKGFib3V0KTtcbiAgY29udGVudENhcmQuYXBwZW5kQ2hpbGQoc3RvcmVIb3Vycyk7XG4gIGNvbnRlbnRDYXJkLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRDYXJkKTtcbn1cblxuICAvLyBFeHBvcnQgdGhlIGNyZWF0ZUhvbWVTZWN0aW9uIGZ1bmN0aW9uIGZvciB1c2UgaW4gd2Vic2l0ZS5qc1xuICBleHBvcnQgeyBjcmVhdGVIb21lU2VjdGlvbiB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlTWVudVNlY3Rpb24oKSB7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAvLyBDcmVhdGUgdGhlIGNvbnRlbnQtY2FyZCBlbGVtZW50XG4gIGNvbnN0IGNvbnRlbnRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnRDYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtY2FyZCcpO1xuXG4gIC8vIENyZWF0ZSB0aGUgYnJhbmQgZWxlbWVudFxuICBjb25zdCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBicmFuZC5jbGFzc0xpc3QuYWRkKCdicmFuZCcpO1xuICBjb25zdCBicmFuZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYnJhbmRUaXRsZS50ZXh0Q29udGVudCA9ICdDb2ZmZWUgU2hvcCAnO1xuXG4gIC8vIENyZWF0ZSB0aGUgaSBlbGVtZW50IGZvciB0aGUgbXVnIGljb25cbiAgY29uc3QgbXVnSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgbXVnSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1tdWctaG90Jyk7XG5cbiAgLy8gQXBwZW5kIHRoZSB0aXRsZSBhbmQgaWNvbiB0byB0aGUgYnJhbmQgZWxlbWVudFxuICBicmFuZFRpdGxlLmFwcGVuZENoaWxkKG11Z0ljb24pO1xuICBicmFuZC5hcHBlbmRDaGlsZChicmFuZFRpdGxlKTtcblxuICAvLyBDcmVhdGUgdGhlIG1lbnUgdGl0bGUgZWxlbWVudFxuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGl0bGUnKTtcbiAgY29uc3QgbWVudVRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIG1lbnVUaXRsZVRleHQudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG1lbnVUaXRsZS5hcHBlbmRDaGlsZChtZW51VGl0bGVUZXh0KTtcblxuICAvLyBDcmVhdGUgdGhlIG1lbnUgZWxlbWVudFxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gIC8vIENyZWF0ZSBDb2ZmZWUgc2VjdGlvblxuICBjb25zdCBjb2ZmZWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvZmZlZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnQ29mZmVlJyk7XG4gIGNvbnN0IGNvZmZlZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvZmZlZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvZmZlZS10aXRsZScpO1xuICBjb25zdCBjb2ZmZWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb2ZmZWVJbWFnZS5zcmMgPSAnL2Rpc3QvYXNzZXRzL0NvZmZlZS5wbmcnO1xuICBjb2ZmZWVJbWFnZS5hbHQgPSAnQ29mZmVlJztcbiAgY29uc3QgY29mZmVlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvZmZlZUhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29mZmVlJztcbiAgY29uc3QgY29mZmVlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvZmZlZUxpc3QuaW5uZXJIVE1MID0gYFxuICAgIDxsaT5Fc3ByZXNzby4uLi4uLi4uLi4uLiAxNzA8L2xpPlxuICAgIDxsaT5BbWVyaWNhbm8uLi4uLi4uLi4gMTEwPC9saT5cbiAgICA8bGk+TGF0dGUuLi4uLi4uLi4uLi4uLi4uLi4uIDE2MDwvbGk+XG4gICAgPGxpPkZsYXQgV2hpdGUuLi4uLi4uLi4uIDE0NTwvbGk+XG4gIGA7XG5cbiAgY29mZmVlVGl0bGUuYXBwZW5kQ2hpbGQoY29mZmVlSW1hZ2UpO1xuICBjb2ZmZWVUaXRsZS5hcHBlbmRDaGlsZChjb2ZmZWVIZWFkaW5nKTtcbiAgY29mZmVlU2VjdGlvbi5hcHBlbmRDaGlsZChjb2ZmZWVUaXRsZSk7XG4gIGNvZmZlZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY29mZmVlTGlzdCk7XG5cbiAgLy8gQ3JlYXRlIFRlYSBzZWN0aW9uXG4gIGNvbnN0IHRlYVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVhU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdUZWEnKTtcbiAgY29uc3QgdGVhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVhVGl0bGUuY2xhc3NMaXN0LmFkZCgndGVhLXRpdGxlJyk7XG4gIGNvbnN0IHRlYUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIHRlYUltYWdlLnNyYyA9ICcvZGlzdC9hc3NldHMvVGVhLnBuZyc7XG4gIHRlYUltYWdlLmFsdCA9ICdUZWEnO1xuICBjb25zdCB0ZWFIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGVhSGVhZGluZy50ZXh0Q29udGVudCA9ICdUZWEnO1xuICBjb25zdCB0ZWFMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdGVhTGlzdC5pbm5lckhUTUwgPSBgXG4gICAgPGxpPkdyZWVuIFRlYS4uLi4uLi4uLi4uLi4uLi4gMTEwPC9saT5cbiAgICA8bGk+TWF0Y2hhIFRlYS4uLi4uLi4uLi4uLi4gMTYwPC9saT5cbiAgICA8bGk+QmxhY2sgVGVhLi4uLi4uLi4uLi4uLi4uLi4gMTMwPC9saT5cbiAgICA8bGk+T29sb25nIFRlYS4uLi4uLi4uLi4uLi4gMTY1PC9saT5cbiAgYDtcblxuICB0ZWFUaXRsZS5hcHBlbmRDaGlsZCh0ZWFJbWFnZSk7XG4gIHRlYVRpdGxlLmFwcGVuZENoaWxkKHRlYUhlYWRpbmcpO1xuICB0ZWFTZWN0aW9uLmFwcGVuZENoaWxkKHRlYVRpdGxlKTtcbiAgdGVhU2VjdGlvbi5hcHBlbmRDaGlsZCh0ZWFMaXN0KTtcblxuICAvLyBDcmVhdGUgQmVhbnMgc2VjdGlvblxuICBjb25zdCBiZWFuc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmVhbnNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ0JlYW5zJyk7XG4gIGNvbnN0IGJlYW5zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmVhbnNUaXRsZS5jbGFzc0xpc3QuYWRkKCdiZWFucy10aXRsZScpO1xuICBjb25zdCBiZWFuc0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJlYW5zSW1hZ2Uuc3JjID0gJy9kaXN0L2Fzc2V0cy9CZWFucy5wbmcnO1xuICBiZWFuc0ltYWdlLmFsdCA9ICdDb2ZmZWUgQmVhbnMnO1xuICBjb25zdCBiZWFuc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBiZWFuc0hlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29mZmVlIEJlYW5zJztcbiAgY29uc3QgYmVhbnNUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gIGJlYW5zVGFibGUuaW5uZXJIVE1MID0gYFxuICA8dGhlYWQ+XG4gIDx0cj5cbiAgICA8dGg+Q29mZmVlIFZhcmlhbnQ8L3RoPlxuICAgIDx0aCBjbGFzcz1cImdyYW1zXCI+MjUwZzwvdGg+XG4gICAgPHRoIGNsYXNzPVwia2lsb1wiPjFrZzwvdGg+XG4gIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keT5cbiAgPHRyPlxuICAgIDx0ZD5CdWtpZG5vbiAoTmF0dXJhbC9XYXNoZWQpPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJwcmljZVwiPlA0NTUuMDA8L3RkPlxuICAgIDx0ZCBjbGFzcz1cImtpbG9cIj5QMSw3NzAuMDA8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPkl0b2dvbiAoTmF0dXJhbC9XYXNoZWQpPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJwcmljZVwiPlAzNzAuMDA8L3RkPlxuICAgIDx0ZCBjbGFzcz1cImtpbG9cIj5QMSw0MjUuMDA8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPkthcGFuZ2FuIFdhc2hlZDwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicHJpY2VcIj5QMzcwLjAwPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJraWxvXCI+UDEsNDI1LjAwPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5NdC4gQXBvIChOYXR1cmFsL0hvbmV5L1dhc2hlZCk8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInByaWNlXCI+UDQzNS4wMDwvdGQ+XG4gICAgPHRkIGNsYXNzPVwia2lsb1wiPlAxLDY4NS4wMDwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+TXIuIE1hdHV0dW0gKFdhc2hlZCk8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInByaWNlXCI+UDMyNS4wMDwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+U2FnYWRhIENvZmZlZTwvdGQ+XG4gICAgPHRkIGNsYXNzPVwicHJpY2VcIj5QMzcwLjAwPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5UdWJsYXkgTmF0dXJhbC9XYXNoZWQ8L3RkPlxuICAgIDx0ZCBjbGFzcz1cInByaWNlXCI+UDM3MC4wMDwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+VHVkaW5nIENvZmZlZSAoTmF0dXJhbGwpPC90ZD5cbiAgICA8dGQgY2xhc3M9XCJwcmljZVwiPlAzNzAuMDA8L3RkPlxuICA8L3RyPlxuPC90Ym9keT5cbiAgYDtcblxuICBiZWFuc1RpdGxlLmFwcGVuZENoaWxkKGJlYW5zSW1hZ2UpO1xuICBiZWFuc1RpdGxlLmFwcGVuZENoaWxkKGJlYW5zSGVhZGluZyk7XG4gIGJlYW5zU2VjdGlvbi5hcHBlbmRDaGlsZChiZWFuc1RpdGxlKTtcbiAgYmVhbnNTZWN0aW9uLmFwcGVuZENoaWxkKGJlYW5zVGFibGUpO1xuXG4gIC8vIEFwcGVuZCBhbGwgc2VjdGlvbnMgdG8gdGhlIG1lbnUgZWxlbWVudFxuICBtZW51LmFwcGVuZENoaWxkKGNvZmZlZVNlY3Rpb24pO1xuICBtZW51LmFwcGVuZENoaWxkKHRlYVNlY3Rpb24pO1xuICBtZW51LmFwcGVuZENoaWxkKGJlYW5zU2VjdGlvbik7XG5cbiAgLy8gQXBwZW5kIGFsbCBlbGVtZW50cyB0byB0aGVpciByZXNwZWN0aXZlIHBhcmVudCBlbGVtZW50c1xuICBjb250ZW50Q2FyZC5hcHBlbmRDaGlsZChicmFuZCk7XG4gIGNvbnRlbnRDYXJkLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gIGNvbnRlbnRDYXJkLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gIC8vIEFwcGVuZCB0aGUgY29udGVudC1jYXJkIHRvIHRoZSBleGlzdGluZyBcImNvbnRlbnRcIiBkaXZcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50Q2FyZCk7XG5cbiAgLy8gUmV0dXJuIHRoZSBleGlzdGluZyBcImNvbnRlbnRcIiBkaXYgZm9yIGNvbnNpc3RlbmN5XG4gIHJldHVybiBjb250ZW50O1xufVxuXG4vLyBFeHBvcnQgdGhlIGNyZWF0ZU1lbnVTZWN0aW9uIGZ1bmN0aW9uIGFzIGEgbW9kdWxlXG5leHBvcnQgIHtjcmVhdGVNZW51U2VjdGlvbn07XG4iLCIvLyBJbXBvcnQgdGhlIG5lY2Vzc2FyeSBmdW5jdGlvbnMgYW5kIG1vZHVsZXNcbmltcG9ydCB7IGNyZWF0ZUhvbWVTZWN0aW9uIH0gZnJvbSAnLi9wYWdlcy9ob21lJztcbmltcG9ydCB7IGNyZWF0ZU1lbnVTZWN0aW9uIH0gZnJvbSAnLi9wYWdlcy9tZW51JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RTZWN0aW9uIH0gZnJvbSAnLi9wYWdlcy9jb250YWN0JztcblxuLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gY3JlYXRlIGFuZCByZW5kZXIgdGhlIGhlYWRlclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdWwuY2xhc3NOYW1lID0gJ25hdmJhcic7XG5cbiAgY29uc3Qgc2VjdGlvbnMgPSBbXG4gICAgeyB0ZXh0OiAnSG9tZScsIGhhbmRsZXI6IGNyZWF0ZUhvbWVTZWN0aW9uIH0sXG4gICAgeyB0ZXh0OiAnTWVudScsIGhhbmRsZXI6IGNyZWF0ZU1lbnVTZWN0aW9uIH0sXG4gICAgeyB0ZXh0OiAnQ29udGFjdCcsIGhhbmRsZXI6IGNyZWF0ZUNvbnRhY3RTZWN0aW9uIH0sXG4gIF07XG5cbiAgc2VjdGlvbnMuZm9yRWFjaCgoeyB0ZXh0LCBoYW5kbGVyIH0pID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVOYXZCdXR0b24odGV4dCwgKCkgPT4ge1xuICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfSk7XG5cbiAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gY3JlYXRlIGFuZCByZW5kZXIgdGhlIGZvb3RlclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgY29uc3Qgc29jTWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNvY01lZC5jbGFzc05hbWUgPSAnc29jLW1lZCc7XG5cbiAgY29uc3Qgc29jaWFsTWVkaWFMaW5rcyA9IFtcbiAgICAnPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtaW5zdGFncmFtXCI+PC9pPiBJbnN0YWdyYW0nLFxuICAgICc8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1mYWNlYm9vay1tZXNzZW5nZXJcIj48L2k+IE1lc3NlbmdlcicsXG4gICAgJzxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLXRpa3Rva1wiPjwvaT4gVGlrdG9rJyxcbiAgXTtcblxuICBzb2NpYWxNZWRpYUxpbmtzLmZvckVhY2gobGlua1RleHQgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBjcmVhdGVGb290ZXJMaW5rKGxpbmtUZXh0KTtcbiAgICBzb2NNZWQuYXBwZW5kQ2hpbGQobGluayk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGNyZWF0ZUZvb3RlckxpbmsoJzxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jb3B5cmlnaHRcIj48L2k+IENvZmZlZSBTaG9wJyk7XG4gIHNvY01lZC5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChzb2NNZWQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBuYXZpZ2F0aW9uIGJ1dHRvblxuZnVuY3Rpb24gY3JlYXRlTmF2QnV0dG9uKHRleHQsIGNsaWNrSGFuZGxlcikge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmNsYXNzTmFtZSA9ICduYXYtYnV0dG9uJztcbiAgYnV0dG9uLmlubmVySFRNTCA9IGA8bGk+JHt0ZXh0fTwvbGk+YDtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIGZvb3RlciBsaW5rXG5mdW5jdGlvbiBjcmVhdGVGb290ZXJMaW5rKHRleHQpIHtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGxpbmsuaW5uZXJIVE1MID0gdGV4dDtcbiAgcmV0dXJuIGxpbms7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjbGVhciB0aGUgY29udGVudFxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbn1cblxuLy8gSW5pdGlhbGl6ZSB0aGUgd2Vic2l0ZVxuZnVuY3Rpb24gaW5pdFdlYnNpdGUoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjcmVhdGVGb290ZXIoKTtcbiAgY2xlYXJDb250ZW50KCk7XG4gIGNyZWF0ZUhvbWVTZWN0aW9uKCk7IC8vIEluaXRpYWxseSBsb2FkIHRoZSBIb21lIHBhZ2Vcbn1cblxuLy8gRXhwb3J0IHRoZSBpbml0V2Vic2l0ZSBmdW5jdGlvblxuZXhwb3J0IHsgaW5pdFdlYnNpdGUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdFdlYnNpdGUgfSBmcm9tIFwiLi93ZWJzaXRlXCI7XG5cbmluaXRXZWJzaXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9