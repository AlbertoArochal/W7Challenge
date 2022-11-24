"use strict";
const app = () => {
    console.log("App");
    const today = new Date();
    const h1 = document.querySelector("h1");
    if (!h1)
        return;
    h1.innerHTML += `<h1> Esto es nuevo de hoy ${today.toLocaleString()} </h1>`;
    const greetings = document.querySelector(".saludo");
    if (!greetings)
        return;
    greetings.innerHTML = `saludos compadre hoy dia ${today.toLocaleString()}`;
    const handleclick = (event) => {
        const element = event.target;
        console.log("click", element.dataset.value);
    };
    const nodelist = document.querySelectorAll("section button");
    nodelist.forEach((item) => item.addEventListener("click", handleclick));
    const form = document.querySelector("form");
    if (!form)
        return;
    const handleForm = (event) => {
        event.preventDefault();
        const element = event.target;
        const inputs = element.querySelectorAll("input");
        const values = [...inputs].map((item) => item.value);
        element.querySelector("output").value = ` hola ${values[0]} tienes ${values[1]} anos`;
    };
    form.addEventListener("submit", handleForm);
};
app();
