import { format } from "path";
import {
    Joff,
    Jaime,
    Daenerys,
    Tyrion,
    Bronn,
    theGang,
    characterSheet,
    fillChSheet,
    buttonTalk,
} from "./app.js";

/*document.addEventListener("DOMContentLoaded", () => {
    const slots = document.querySelectorAll("slot");
    slots.forEach((item, i) => (item.outerHTML = characterSheet(theGang[i])));
});*/

theGang.forEach((char) => fillChSheet(char));
buttonTalk();
