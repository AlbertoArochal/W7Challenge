import { format } from "path";
import {
    Joff,
    Jaime,
    Daenerys,
    Tyrion,
    Bronn,
    theGang,
    listUl,
    characterSheet,
    shoutMotto,
} from "./app.js";

document.addEventListener("DOMContentLoaded", () => {
    const slots = document.querySelectorAll("slot");
    slots.forEach((item, i) => (item.outerHTML = characterSheet(theGang[i])));
});
