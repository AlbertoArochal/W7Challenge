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
            return `<li>AÃ±os de reinado: ${char.reignDuration}</li>`;
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
        return "ð";
    }
    if (char.category === "Squire") {
        return "ð¡";
    }
    if (char instanceof Warrior) {
        return "ð¡";
    }
    if (char.category === "Advisor") {
        return "ð";
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
                            <button class="character__action btn" id="talk">
                                habla
                            </button>
                            <button class="character__action btn" id="die">
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
    const buttonTalk = () => {
        const buttonTalk = document.querySelector("button");
        if (!buttonTalk) return;
        buttonTalk.addEventListener("click", () => {
            console.log(`${char.motto}`);
        });
    };
    buttonTalk();
};
