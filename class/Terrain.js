import { BienImmobilier } from "./BienImmobilier.js";

export default class Terrain extends BienImmobilier {

    buildable;

    constructor(title, type, description, price, location, surface, buildable) {
        super(title, type, description, price, location, surface);
        this.buildable = buildable;
    }
}