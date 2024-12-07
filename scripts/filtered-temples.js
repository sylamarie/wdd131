// Update the current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Update the last modified date in the footer
document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

// Hamburger menu functionality for mobile view
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close the hamburger menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Temple data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "images/aba-nigeria-temple.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "images/manti-temple.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "images/payson-utah-temple.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "images/yigo_guam_temple.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "images/washington_dc_temple.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "images/lima-peru-temple.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "images/mexico-city-temple.jpg",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
      "images/salt-lake-temple.jpg",
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44193,
    imageUrl:
      "images/Paris-Temple.jpg",
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 17000,
    imageUrl:
      "images/johannesburg-south-africa-temple.jpg",
  },
  {
    templeName: "Manila Philippines Temple",
    location: "Quezon City Philippines",
    dedicated: "1984, September, 27",
    area: 26683,
    imageUrl:
      "images/manila-philippines-temple.jpg",
  },
  {
  templeName: "Seoul Korea Temple",
  location: "Seoul-teukbyeolsi Korea",
  dedicated: "1985, December, 15",
  area: 28057 ,
  imageUrl:
  "images/seoul-korea-temple.jpg",
  },

  {
    templeName: "Sapporo Japan Temple",
    location: "Sapporo, Hokkaido Japan",
    dedicated: "2021, August, 21",
    area: 48480,
    imageUrl:
    "images/sapporo-japan.jpg",
  }
];

// Function to create temple cards
function createTempleCards() {
  const container = document.querySelector(".res-grid");

  temples.forEach((temple) => {
    // Create card elements
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedication = document.createElement("p");
    const area = document.createElement("p");
    const img = document.createElement("img");

    // Set content and attributes
    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size: </span>${temple.area} sq ft`;
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy"; // Lazy load images

    // Explicitly set width and height to prevent layout shifts
    img.width = 400; // Example width
    img.height = 250; // Example height

    // Append elements to card
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    // Append card to container
    container.appendChild(card);
  });
}

// Call function to populate the page with temple cards
createTempleCards();

// Filters implementation
const filters = document.querySelectorAll('.filter-btn');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const filterType = filter.dataset.filter;
    const filteredTemples = applyFilter(filterType);
    updateTempleCards(filteredTemples);
  });
});

// Filter function
function applyFilter(filterType) {
  switch (filterType) {
    case 'old':
      return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    case 'new':
      return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    case 'large':
      return temples.filter(temple => temple.area > 90000);
    case 'small':
      return temples.filter(temple => temple.area < 10000);
    case 'home':
      return temples;
    default:
      return temples;
  }
}

// Update temple cards based on filter
function updateTempleCards(templesToDisplay) {
  const container = document.querySelector(".res-grid");
  container.innerHTML = ''; // Clear existing content
  templesToDisplay.forEach((temple) => {
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedication = document.createElement("p");
    const area = document.createElement("p");
    const img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size: </span>${temple.area} sq ft`;
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.width = 400; // Example width
    img.height = 250; // Example height

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}

// Dynamically Preload images for LCP
function preloadImages() {
  const largestImageUrl = temples[0].imageUrl; // Choose the largest image or dynamically select
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = largestImageUrl;
  link.as = 'image';
  document.head.appendChild(link);
}

// Call preload function
preloadImages();