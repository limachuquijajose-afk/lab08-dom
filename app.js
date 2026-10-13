// Laboratorio 08: DOM, eventos y objetos
console.log("app.js cargado");
// Ejercicio 2: seleccionar y modificar el DOM
const titulo = document.querySelector("#titulo");
titulo.textContent = "Hola TECSUP";
titulo.style.color = "blue";

const mensaje = document.querySelector(".mensaje");
mensaje.classList.add("destacado");

const lista = document.querySelector("#lista");
const nuevo = document.createElement("li");
nuevo.textContent = "JavaScript";
lista.appendChild(nuevo);
// Ejercicio 3: evento click
const btnSumar = document.querySelector("#btnSumar");
const btnReiniciar = document.querySelector("#btnReiniciar");
const contador = document.querySelector("#contador");
let clics = 0;
btnSumar.addEventListener("click", (evento) => {
  clics = clics + 1;
  contador.textContent = clics;
  console.log(evento.type, evento.target);
});
btnReiniciar.addEventListener("click", () => {
  clics = 0;
  contador.textContent = clics;
});
// Ejercicio 4: eventos input y submit
const nombre = document.querySelector("#nombre");
const saludo = document.querySelector("#saludo");

nombre.addEventListener("input", () => {
  saludo.textContent = "Hola, " + nombre.value;
});

const formulario = document.querySelector("#formulario");
const correo = document.querySelector("#correo");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
  resultado.textContent = "Enviado: " + correo.value;
});
