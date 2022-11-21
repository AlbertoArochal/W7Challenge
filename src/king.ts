import { stripVTControlCharacters } from "util";
import { Character, Characters } from "./character";

class king extends Character {
    constructor(
        public reignDuration: number,
        name: string,
        family: string,
        age: number,
        itsAlive: boolean,
        motto: string = "vais a morir todos",
        category: string
    ) {
        super(name, family, age, itsAlive, motto, category);
        this.reignDuration = reignDuration;
    }
}
