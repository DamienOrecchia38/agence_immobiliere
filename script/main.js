import Maison from '../class/Maison.js';
import Appartement from '../class/Appartement.js';
import Terrain from '../class/Terrain.js';


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    let form = document.getElementById('form_ad');
    let new_ad;

    document.getElementById('type').addEventListener('change', function() {
        let type = this.value;

        // Hide all specific form elements
        let elements = document.querySelectorAll('.form_element_specific');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }

        // Display form elements specific to the selected type
        let elementsToShow = document.querySelectorAll('.form_element_' + type);
        for (let i = 0; i < elementsToShow.length; i++) {
            elementsToShow[i].style.display = 'flex';
        }
    });

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
        window.location.replace("http://127.0.0.1:5500/index.html");
    });
});


