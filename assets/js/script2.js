// const menuItems = [
//   { name: "Butter Chicken", category: "indian" },
//   { name: "Hakka Noodles", category: "chinese" },
//   { name: "Tacos", category: "mexican" },
//   { name: "Pad Thai", category: "thai" },
//   { name: "Chole Bhature", category: "indian" },
//   { name: "Spring Rolls", category: "chinese" },
//   { name: "Burritos", category: "mexican" },
//   { name: "Green Curry", category: "thai" }
// ];

// const menuContainer = document.getElementById('menu-container');

// function filterMenu(category) {
//   const filteredItems = menuItems.filter(item => item.category === category || category === 'all');
//   displayMenu(filteredItems);
// }

// function displayMenu(items) {
//   menuContainer.innerHTML = '';
//   items.forEach(item => {
//     const menuItem = document.createElement('div');
//     menuItem.classList.add('menu-item');
//     menuItem.innerHTML = `
//       <h3>${item.name}</h3>
//     `;
//     menuContainer.appendChild(menuItem);
//   });
// }

// // Display all items initially
// displayMenu(menuItems);


const menuItems = [
  { name: "Butter Chicken", category: "indian", image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Best-Instant-Pot-Butter-Chicken-Recipe.jpg", description: "Delicious chicken curry cooked in a rich, creamy sauce." },
  { name: "Hakka Noodles", category: "chinese", image: "https://tse1.mm.bing.net/th?id=OIP.09EGa7wu6o4TJ79OWaWgJAHaGA&pid=Api&rs=1&c=1&qlt=95&w=138&h=112", description: "Stir-fried noodles with vegetables and sauces." },
  { name: "Tacos", category: "mexican", image: "https://tse1.mm.bing.net/th?id=OIP.Kdcfg93JXy4O0lFC4s-AqwHaEh&pid=Api&rs=1&c=1&qlt=95&w=183&h=112", description: "Corn tortillas filled with seasoned meat, cheese, and vegetables." },
  { name: "Pad Thai", category: "thai", image: "https://www.jocooks.com/wp-content/uploads/2019/07/pad-thai-1.jpg", description: "Thai stir-fried rice noodles with shrimp, tofu, peanuts, and bean sprouts." },
  { name: "Chole Bhature", category: "indian", image: "https://tse2.mm.bing.net/th?id=OIP.DKKVGFWMRuojzOxYfiXaVwHaJd&pid=Api&P=0&h=180", description: "Spicy chickpea curry served with fried bread." },
  { name: "Spring Rolls", category: "chinese", image: "https://tse1.mm.bing.net/th?id=OIP.aaw2S1wa4nbN6ATaNKyJ4wHaHa&pid=Api&rs=1&c=1&qlt=95&w=102&h=102", description: "Crispy rolls filled with vegetables and sometimes meat." },
  { name: "Burritos", category: "mexican", image: "https://assets.afcdn.com/recipe/20120924/25665_w2048h1536c1cx256cy192.jpg", description: "Flour tortillas stuffed with meat, beans, rice, and cheese." },
  { name: "Green Curry", category: "thai", image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Vegetarian_Thai_Green_Curry_Recipe-2-2_1600.jpg", description: "Thai curry made with green curry paste, coconut milk, vegetables & meat." }
];

const menuContainer = document.getElementById('menu-container');

function filterMenu(category) {
  const filteredItems = menuItems.filter(item => item.category === category || category === 'all');
  displayMenu(filteredItems);
}

// function displayMenu(items) {
//   menuContainer.innerHTML = '';
//   items.forEach(item => {
//     const menuItem = document.createElement('div');
//     menuItem.classList.add('menu-item');
//     menuItem.innerHTML = `
//     <div>
//       <img src="${item.image}" alt="${item.name}">
     
//       <h3>Our Special Feature</h3>
//       </div>
//       <h3>${item.name}</h3>
//       <p>${item.description}</p>
//     `;
//     menuContainer.appendChild(menuItem);
//   });
// }

function displayMenu(items) {
  menuContainer.innerHTML = '';
  
  items.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
      <div class="menu-item-content">
        <img src="${item.image}" alt="${item.name}">
        <div class='special'>
        <a href="/"> <h2>Our Special Feature</h2></a>
        </div>
      </div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    `;
    menuContainer.appendChild(menuItem);
  });
}

// Display all items initially
displayMenu(menuItems);
