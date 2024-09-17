import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate an HTML representation of each fish
    const fishData = database.fish;

    return fishData.map(fish => `
        <div class="fish-item">
            <h2>${fish.name}</h2>
            <img src="${fish.image}" alt="${fish.name}" class="fish-image">
            <p><strong>Species:</strong> ${fish.species}</p>
            <p><strong>Length:</strong> ${fish.length} cm</p>
            <p><strong>Location:</strong> ${fish.location}</p>
            <p><strong>Diet:</strong> ${fish.diet}</p>
        </div>
    `).join('');
};