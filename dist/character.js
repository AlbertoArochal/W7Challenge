export class Character {
    name;
    family;
    age;
    category;
    motto;
    itsAlive = true;
    constructor(name, family, age, category, motto) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.category = category;
        this.motto = motto;
        this.name = name;
        this.family = family;
        this.age = age;
        this.category = category;
        this.motto = motto;
    }
    shoutOut(motto) {
        return motto;
    }
    toDie() {
        console.log("ay!");
        this.itsAlive = false;
    }
}
