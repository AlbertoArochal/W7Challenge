import { Character, Characters } from "./character";

export class Warrior extends Character implements Characters {
    constructor(
        name: string,
        family: string,
        age: number,
        motto: string = "Primero golpeo luego pregunto", 
        category:string,
        itsAlive: boolean,
        weapon:string
    ); {
        super(name, family, age, itsAlive, motto, category);
        this.weapon = weapon
    }
}

