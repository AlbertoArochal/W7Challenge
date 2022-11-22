import { Character, Characters } from "./character";

export class Squire extends Character implements Characters {
    constructor(
        name: string,
        family: string,
        age: number,
        category: string,
        public lordWarrior: string,
        public arseLickingDex: number,
        motto: string = "Soy un loser"
    ) {
        super(name, family, age, category, motto);
        this.lordWarrior = lordWarrior;
        this.arseLickingDex = arseLickingDex;
    }
}
