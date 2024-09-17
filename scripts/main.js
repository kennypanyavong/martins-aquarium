import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// // Generate the fish list
const fishHTML = fishList()

// // Generate the care tips
const tipHTML = tipList()

// // Generate the location list
const locationHTML = locationList()

// // Render each HTML string to the correct DOM element
const fishListElement = document.getElementById('fishList');
const tipListElement = document.getElementById('tipList');
const locationListElement = document.getElementById('locationList');

if (fishListElement) {
    fishListElement.innerHTML = fishHTML;
}

if (tipListElement) {
    tipListElement.innerHTML = tipHTML;
}

if (locationListElement) {
    locationListElement.innerHTML = locationHTML;
}