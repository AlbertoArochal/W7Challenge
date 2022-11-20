import { Character, Characters } from "./character";

export class Squire extends Character implements Characters {
    constructor(
        name: string,
        family: string,
        age: number,
        motto: string = "Soy un loser",
        category: string,
        itsAlive: boolean,
        lordWarrior: string,
        arseLickingDex: number
    ) {
        super(name, family, age, motto, itsAlive, category);
        this.lordWarrior = lordWarrior;
        this.arseLickingDex = arseLickingDex;
    }
}
