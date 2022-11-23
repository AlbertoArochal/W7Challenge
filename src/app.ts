import { Warrior } from "./warrior.js";
import { Squire } from "./squire.js";
import { Advisor } from "./advisor.js";
import { King } from "./king.js";

export const Joff = new King("Joffrey", "Baratheon", 14, "King", 2);
export const Jaime = new Warrior(
    "Jaime",
    "Lannister",
    34,
    "Warrior",
    "Sword",
    8
);
export const Daenerys = new Warrior(
    "Daenerys",
    "Targaryen",
    16,
    "Warrior",
    "Pyromania",
    6
);
export const Tyrion = new Advisor(
    "Tyrion",
    "Lannister",
    27,
    "Advisor",
    "Daenerys"
);
export const Bronn = new Squire(
    "Bronn",
    "Stokeworth",
    32,
    "Squire",
    "Jaime",
    6
);

export const theGang = [Joff, Jaime, Daenerys, Tyrion, Bronn];

export const listUl: HTMLElement | null = document.querySelector("ul");

export const characterSheet = (char) => {
    return `
        <li class="character col">
            <div class="card character__card">
                <img
                    src="img/${char.name}.jpg"
                    alt="${char.name} ${char.family}"
                    class="character__picture card-img-top"
                />
                <div class="card-body">
                    <h2 class="character__name card-title h4">
                    ${char.name} ${char.family}
                    </h2>
                    <div class="character__info">
                        <ul class="list-unstyled">
                            <li>${char.age}</li>
                            <li>
                                Estado:
                                <i class="fas fa-thumbs-down"></i>
                                <i class="fas fa-thumbs-up"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="character__overlay">
                        <ul class="list-unstyled">
                            <li>Años de reinado: ${char.reignDuration}</li>
                            <li>Arma: ${char.weapon}</li>
                            <li>Destreza: ${char.dextery}</li>
                            <li>Peloteo: ${char.arseLickingDex}</li>
                            <li>Asesora a: ${char.lord}</li>
                            <li>Sirve a: ${char.lordWarrior}</li>
                        </ul>
                        <div class="character__actions">
                            <button class="character__action btn">
                                habla
                            </button>
                            <button class="character__action btn">
                                muere
                            </button>
                        </div>
                    </div>
                </div>
                <i class="emoji"></i>
            </div>
        </li>`;
};
