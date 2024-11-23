// script.js

// Footer: Display the last modified date
const lastModifiedElement = document.getElementById("last-modified");
lastModifiedElement.textContent = document.lastModified;

// Weather Wind Chill Calculation
const tempC = 10; // Static temperature in °C
const windSpeedKmH = 5; // Static wind speed in km/h

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    return Math.round(
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    );
}

// Check if conditions are viable for wind chill calculation
if (tempC <= 10 && windSpeedKmH > 4.8) {
    const windChill = calculateWindChill(tempC, windSpeedKmH);
    document.getElementById("windchill").textContent = `${windChill}°C`;
} else {
    document.getElementById("windchill").textContent = "N/A";
}