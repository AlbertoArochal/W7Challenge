export class Character {
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public itsAlive: boolean = true,
        public motto: string,
        public category: string
    ) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.itsAlive = itsAlive;
        this.motto = motto;
        this.category = category;
    }
    shoutOut(): string {
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
    shoutOut: () => string;
    toDie: () => void;
}
