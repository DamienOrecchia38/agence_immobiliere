export class BienImmobilier {

    title;
    type;
    description;
    price;
    location;
    surface;

    constructor(title, type, description, price, location, surface) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.price = price;
        this.location = location;
        this.surface = surface; 
    }
}