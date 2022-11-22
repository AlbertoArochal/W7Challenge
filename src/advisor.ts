import { Character, Characters } from "./character";

export class Advisor extends Character implements Characters {
    constructor(
        name: string,
        family: string,
        age: number,
        category: string,
        public lord: string,
        motto: string = "No se por que, pero creo que voy a morir pronto"
    ) {
        super(name, family, age, category, motto);
        this.lord = lord;
    }
}
