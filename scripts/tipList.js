import { database } from './aquariumData.js';

export const tipList = () => {

    const tipData = database.tips;

    const tipItems = tipData.map(tip =>
        `<li class="tip">
            <strong>${tip.topic}</strong>: ${tip.text}
        </li>`
    ).join('');

    const html= `<ul class="tips">${tipItems}</ul>`;

    return html;
};