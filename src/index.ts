import { Warrior } from "./warrior.js";
import { Squire } from "./squire.js";
import { Advisor } from "./advisor.js";
import { King } from "./king.js";

const theGang = [
    new King("Joffrey", "Baratheon", 14, "King", 2),
    new Warrior("Jaime", "Lannister", 34, "Warrior", "Sword", 8),
    new Warrior("Daenerys", "Targaryen", 16, "Warrior", "Pyromania", 6),
    new Advisor("Tyrion", "Lannister", 27, "Advisor", "Daenerys"),
    new Squire("Bronn", "Stokeworth", 32, "Squire", "Jaime", 6),
];

document.addEventListener("DOMContentLoaded");

const listUl: HTMLElement | null = document.querySelector("ul");

const characterSheet = (array) => {
    theGang.forEach((char) => {
        function createchar(char) {
            const listElement = document.createElement("li");
            listElement.innerHTML += `
        <div class="card character__card">
                        <img
                            src="./img/${char.name}.jpg"
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
                            </div>`;
        }
        createchar(char);
    });
};
/*                            <div class="character__overlay">
                                <ul class="list-unstyled">
                                    <li>Años de reinado: </li>
                                    <li>Arma: XXX</li>
                                    <li>Destreza: X</li>
                                    <li>Peloteo: X</li>
                                    <li>Asesora a: X</li>
                                    <li>Sirve a: X</li>
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
                    </div>`;
    });
};*/

characterSheet(theGang);
