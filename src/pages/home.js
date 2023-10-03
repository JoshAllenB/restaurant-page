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
}

  // Export the createHomeSection function for use in website.js
  export { createHomeSection };
