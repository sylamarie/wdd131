// Get the current year
const currentYear = new Date().getFullYear();

// Insert the current year into the footer element with ID "currentyear"
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Insert the last modified date into the footer element with ID "lastModified"
document.getElementById("lastModified").textContent = "Last Modified: " + lastModifiedDate;