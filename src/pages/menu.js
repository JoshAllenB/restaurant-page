function createMenuSection() {

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
export  {createMenuSection};
