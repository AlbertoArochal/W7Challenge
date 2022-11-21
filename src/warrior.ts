import { Character, Characters } from "./character";

export class Warrior extends Character implements Characters {
    constructor(
        name: string,
        family: string,
        age: number,
        motto: string = "Primero golpeo, luego pregunto",
        category: string,
        itsAlive: boolean,
        public weapon: string,
        public dextery: number
    ) {
        super(name, family, age, itsAlive, motto, category);
        this.weapon = weapon;
        this.dextery = dextery;
    }
}
