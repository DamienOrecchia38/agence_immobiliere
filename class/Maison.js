import { BienImmobilier } from "./BienImmobilier.js";

export default class Maison extends BienImmobilier {

    garden;
    box;
    room;

    constructor(title, type, description, price, location, surface, garden, box, room) {
        super(title, type, description, price, location, surface);
        this.garden = garden;
        this.box = box;
        this.room = room;
    }
}