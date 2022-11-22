export class Character {
    public itsAlive = true;
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public category: string,
        public motto: string
    ) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.category = category;
        this.motto = motto;
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
