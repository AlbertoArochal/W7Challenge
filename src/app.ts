export const app = () => {
    console.log("App");
    const today = new Date();
    const h1 = document.querySelector("h1");
    if (!h1) return;
    h1.innerHTML += `<h1> Esto es nuevo de hoy ${today.toLocaleString()} </h1>`;
    const greetings = document.querySelector(".saludo");
    if (!greetings) return;
    greetings.innerHTML = `saludos compadre`;
};
app();
