import { Character, Characters } from "./character";

export class Squire extends Character implements Characters {
    constructor(
        name: string,
        family: string,
        age: number,
        itsAlive: boolean,
        motto: string = "Soy un loser",
        category: string,
        public lordWarrior: string,
        public arseLickingDex: number
    ) {
        super(name, family, age, itsAlive, motto, category);
        this.lordWarrior = lordWarrior;
        this.arseLickingDex = arseLickingDex;
    }
}
