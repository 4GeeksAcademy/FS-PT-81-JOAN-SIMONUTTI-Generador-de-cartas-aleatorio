//Arrays
const palos = ["♦", "♥", "♠", "♣"];
const valor = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

//Localizacion de elementos en el archivo html
const paloSup = document.querySelector("#paloSup");
const valorCarta = document.querySelector("#valorCarta");
const paloInf = document.querySelector("#paloInf");
const boton = document.getElementById("boton1");

//Variable para generar valores aleatorios
const obtenerValRandom = arr => arr[Math.floor(Math.random() * arr.length)];

//La variable de arriba aplicada a los arrays de más arriba
const nuevoPalo = obtenerValRandom(palos);
const nuevoValorCarta = obtenerValRandom(valor);

//Ponerle el color rojo a los corazones y rombos, o sacarlo si son picas o treboles
const colorRojo = nuevoPalo => {
  if (nuevoPalo === "♥" || nuevoPalo === "♦") {
    paloSup.classList.add("red");
    paloInf.classList.add("red");
    valorCarta.classList.add("red");
  } else {
    paloSup.classList.remove("red");
    paloInf.classList.remove("red");
    valorCarta.classList.remove("red");
  }
};

//Nueva carta con el color rojo en funcionamiento
const nuevaCarta = () => {
  const palo = obtenerValRandom(palos);
  paloSup.innerText = palo;
  valorCarta.innerText = obtenerValRandom(valor);
  paloInf.innerText = palo;
  colorRojo(palo, valorCarta.innerText);
};

//Evento al recargar la pagina
window.onload = nuevaCarta;

//Generar nueva carta en intervalos de 10 segundos
setInterval(nuevaCarta, 10000);

//Boton de nueva carta
boton.addEventListener("click", () => {
  nuevaCarta();
});
