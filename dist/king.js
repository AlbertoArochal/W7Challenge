import { Character } from "./character.js";
export class King extends Character {
    reignDuration;
    constructor(name, family, age, category, reignDuration, motto = "vais a morir todos") {
        super(name, family, age, category, motto);
        this.reignDuration = reignDuration;
        this.reignDuration = reignDuration;
    }
}
