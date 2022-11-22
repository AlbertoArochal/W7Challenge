import { Character } from "./character";
import { Warrior } from "./warrior";
import { Squire } from "./squire";
import { Advisor } from "./advisor";
import { King } from "./king";

const theGang = [
    new King("Joffrey", "Baratheon", 14, "King", 2),
    new Warrior("Jaime", "Lannister", 34, "Warrior", "Sword", 8),
    new Warrior("Daenerys", "Targaryen", 16, "Warrior", "Pyromania", 6),
    new Advisor("Tyrion", "Lannister", 27, "Advisor", "Daenerys"),
    new Squire("Bronn", "Stokeworth", 32, "Squire", "Jaime", 6),
];
