import { Character } from "./character.js";
export class Advisor extends Character {
    lord;
    constructor(name, family, age, category, lord, motto = "No se por que, pero creo que voy a morir pronto") {
        super(name, family, age, category, motto);
        this.lord = lord;
        this.lord = lord;
    }
}
