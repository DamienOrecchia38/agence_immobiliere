import Maison from '../class/Maison.js';
import Appartement from '../class/Appartement.js';
import Terrain from '../class/Terrain.js';

let ad_container = document.getElementById('container');
let form = document.getElementById('form_ad');
let new_ad;


form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Variables for all types
    let title = document.getElementById('title').value;
    let type = document.getElementById('type').value;
    let price = document.getElementById('price').value;
    let location = document.getElementById('location').value;
    let description = document.getElementById('description').value;
    let surface = document.getElementById('surface').value;

    // House
    let garden = document.getElementById('garden').value;
    let box = document.getElementById('box').value;
    let room = document.getElementById('room').value;

    // Apartment
    let ground = document.getElementById('ground').value;
    let elevator = document.getElementById('elevator').value;

    // Land
    let buildable = document.getElementById('buildable').value;

    // Create new instance of appropriate child class based on selected type
    if (type === 'maison') {
        new_ad = new Maison(title, type, description, price, location, surface, garden, box, room);
    } else if (type === 'appartement') {
        new_ad = new Appartement(title, type, description, price, location, surface, ground, elevator, room, box);
    } else if (type === 'terrain') {
        new_ad = new Terrain(title, type, description, price, location, surface, buildable);
    }

    // Store new ad in localStorage
    let ads = JSON.parse(localStorage.getItem('ads')) || [];
    ads.push(new_ad);
    localStorage.setItem('ads', JSON.stringify(ads));

    console.log(ads);

    // update UI homepage to display new ad
    ads.forEach(ad => {
        let new_element = document.createElement('div');
        new_element.className = 'ad';
        new_element.innerHTML = `
            <h2>${ad.title}</h2>
            <p>${ad.price} €</p>
            <p>${ad.location}</p>
            <p>${ad.description}</p>
        `;
        ad_container.appendChild(new_element);
    });
});


