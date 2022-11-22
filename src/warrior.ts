import { Character, Characters } from "./character";

export class Warrior extends Character implements Characters {
    constructor(
        name: string,
        family: string,
        age: number,
        category: string,
        public weapon: string,
        public dextery: number,
        motto: string = "Primero golpeo, luego pregunto"
    ) {
        super(name, family, age, motto, category);
        this.weapon = weapon;
        this.dextery = dextery;
    }
}
