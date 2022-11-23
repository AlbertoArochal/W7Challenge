import { stripVTControlCharacters } from "util";
import { Character, Characters } from "./character.js";

export class King extends Character implements Characters {
    constructor(
        name: string,
        family: string,
        age: number,
        category: string,
        public reignDuration: number,
        motto: string = "vais a morir todos"
    ) {
        super(name, family, age, category, motto);
        this.reignDuration = reignDuration;
    }
}
