import { Character } from "./character.js";
export class Squire extends Character {
    lordWarrior;
    arseLickingDex;
    constructor(name, family, age, category, lordWarrior, arseLickingDex, motto = "Soy un loser") {
        super(name, family, age, category, motto);
        this.lordWarrior = lordWarrior;
        this.arseLickingDex = arseLickingDex;
        this.lordWarrior = lordWarrior;
        this.arseLickingDex = arseLickingDex;
    }
}
