export class Character {
    constructor(
        name: string,
        family: string,
        age: number,
        itsAlive: boolean = true,
        motto: string,
        category: string
    ) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.itsAlive = itsAlive;
        this.motto = motto;
        this.category = category;
    }
    shoutOut() {
        return this.motto;
    }
    toDie() {
        this.itsAlive = false;
    }
}

export interface Characters {
    name: string;
    family: string;
    age: number;
    itsAlive: boolean;
    motto: string;
    category: string;
    shoutOut(): string;
    toDie(): boolean;
}