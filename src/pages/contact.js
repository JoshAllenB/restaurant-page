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

  // Append the content-card to the existing "content" div
  content.appendChild(contentCard);
}

// Export the createContactSection function as a module
export {createContactSection};
