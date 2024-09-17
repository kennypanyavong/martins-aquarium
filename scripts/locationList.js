import { database } from './aquariumData.js';

export const locationList = () => {

    const locations = database.locations;

    const locationSections = locations.map(location =>
        `<section class="location">
            <h2>${location.name}</h2>
            <p><strong>Country:</strong> ${location.country}</p>
            <p><strong>Description:</strong> ${location.description}</p>
        </section>`

    ).join('');

    const html = `<article class="locations>${locationSections}</article>`;

    return html;
}