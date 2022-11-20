import { stripVTControlCharacters } from "util";
import { Character, Characters } from "./character";

class king extends Character {
    constructor(
        reignDuration: number,
        name: string,
        family: string,
        age: number,
        motto: string = "vais a morir todos",
        category: string,
        itsAlive: boolean
    ) {
        super(name, family, age, itsAlive, motto, category);
        this.reignDuration = reignDuration;
    }
}
