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

const specialSpecs = (char) => {
    switch (true) {
        case char instanceof King:
            return `<li>Años de reinado: ${char.reignDuration}</li>`;
        case char instanceof Squire:
            return `<li>Peloteo: ${char.arseLickingDex}</li>
        <li>Sirve a: ${char.lordWarrior}</li>`;
        case char instanceof Warrior:
            return `<li>Arma: ${char.weapon}</li>
            <li>Destreza: ${char.dextery}</li>`;
        case char instanceof Advisor:
            return `<li>Asesora a: ${char.lord}</li>`;
    }
};

const unorderedL = document.querySelector("ul");

const emojier = (char) => {
    if (char.category === "King") {
        return "👑";
    }
    if (char.category === "Squire") {
        return "🛡";
    }
    if (char instanceof Warrior) {
        return "🗡";
    }
    if (char.category === "Advisor") {
        return "🎓";
    }
};

export const characterSheet = (char) => {
    return `
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
                        ${specialSpecs(char)}
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
                <i class="emoji">${emojier(char)}</i>
            </div>`;
};

export const fillChSheet = (char) => {
    const line = document.createElement("li");
    line.className = "character col";
    line.innerHTML = characterSheet(char);
    unorderedL?.appendChild(line);
    const shoutOutBtn = document.querySelector(`#comunicate${char.name}`);
    shoutOutBtn?.addEventListener("click", () => {
        char.shoutOut(char.motto);
    });
    const toDieBtn = document.querySelector(`#die${char.name}`);
    toDieBtn?.addEventListener("click", () => {
        char.toDie();
    });
};
