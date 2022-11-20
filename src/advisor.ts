import { Character, Characters } from "./character";

export class Advisor extends Character implements Characters {
    constructor(
        name: string,
        family: string,
        age: number,
        motto: string = "No se por que, pero creo que voy a morir pronto";
        category: string,
        itsAlive: boolean,
        lord:string
    ) {
        super(name, family, age, itsAlive, motto, category)
        this.lord = lord;

    }
}
