import { Character } from "./character";

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

let Maluma = new king(10, "Maluma", "Perez", 22, "Meneoo", "King", true);

console.log(Maluma.shoutOut);
