import { Character, Characters } from "./character";

export class Advisor extends Character implements Characters {
    constructor(
        name: string,
        family: string,
        age: number,
        itsAlive: boolean,
        motto: string = "No se por que, pero creo que voy a morir pronto",
        category: string,
        public lord: string
    ) {
        super(name, family, age, itsAlive, motto, category);
        this.lord = lord;
    }
}
