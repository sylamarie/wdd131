// Set current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Set last modified date in the footer
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;

// Populate the product dropdown dynamically
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Time Circuits" },
  { id: "ac-2000", name: "Low Voltage Reactor" },
  { id: "jj-1969", name: "Warp Equalizer" },
];

const productNameDropdown = document.getElementById("productName");
products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productNameDropdown.appendChild(option);
});

// Get query parameters from the URL
const params = new URLSearchParams(window.location.search);

// Select the UL element to display the data
const submittedDataList = document.getElementById('submittedData');

// Iterate through the parameters and add them as list items
params.forEach((value, key) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${key}: ${value}`;
    submittedDataList.appendChild(listItem);
});