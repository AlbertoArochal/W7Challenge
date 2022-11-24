import { theGang, fillChSheet, } from "./app.js";
/*document.addEventListener("DOMContentLoaded", () => {
    const slots = document.querySelectorAll("slot");
    slots.forEach((item, i) => (item.outerHTML = characterSheet(theGang[i])));
});*/
theGang.forEach((char) => fillChSheet(char));
