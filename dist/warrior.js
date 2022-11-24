import { Character } from "./character.js";
export class Warrior extends Character {
    weapon;
    dextery;
    constructor(name, family, age, category, weapon, dextery, motto = "Primero golpeo, luego pregunto") {
        super(name, family, age, motto, category);
        this.weapon = weapon;
        this.dextery = dextery;
        this.weapon = weapon;
        this.dextery = dextery;
    }
}
