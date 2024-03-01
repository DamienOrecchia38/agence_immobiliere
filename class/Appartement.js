import { BienImmobilier } from "./BienImmobilier.js";
export default class Appartement extends BienImmobilier {

    ground;
    elevator;
    room;
    box;

    constructor(title, type, description, price, location, surface, ground, elevator, room, box) {
        super(title, type, description, price, location, surface);
        this.ground = ground;
        this.elevator = elevator;
        this.room = room;
        this.box = box;
    }
}