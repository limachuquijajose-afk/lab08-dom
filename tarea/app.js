// Tarea: Registro de Rutina de Ejercicios - Versión 3 (Clases y Objetos)
console.log("app.js de tarea cargado");

// 1. Definición de la clase propia
class EjercicioItem {
  constructor(nombre, peso, repeticiones) {
    this.nombre = nombre;
    this.peso = peso;
    this.repeticiones = repeticiones;
  }

  calcularVolumen() {
    return this.peso * this.repeticiones;
  }

  descripcion() {
    return `${this.nombre} - ${this.peso} kg x ${this.repeticiones} reps (Volumen: ${this.calcularVolumen()} kg)`;
  }
}

// Clase gestora para el entrenamiento
class SesionEntrenamiento {
  constructor() {
    this.series = [];
  }

  agregarSerie(serie) {
    this.series.push(serie);
  }

  eliminarSerie(index) {
    this.series.splice(index, 1);
  }

  calcularVolumenTotal() {
    let total = 0;
    this.series.forEach((s) => {
      total += s.calcularVolumen();
    });
    return total;
  }
}

const sesion = new SesionEntrenamiento();

// Seleccionadores del DOM
const formEjercicio = document.querySelector("#formEjercicio");
const ejNombre = document.querySelector("#ejNombre");
const ejPeso = document.querySelector("#ejPeso");
const ejReps = document.querySelector("#ejReps");
const listaEjercicios = document.querySelector("#listaEjercicios");
const volumenTotalSpan = document.querySelector("#volumenTotal");
const mensajeValidacion = document.querySelector("#mensajeValidacion");

// Evento 1: input (validación en tiempo real del peso)
ejPeso.addEventListener("input", () => {
  const valor = Number(ejPeso.value);
  if (valor < 0) {
    mensajeValidacion.textContent = "El peso no puede ser negativo.";
    mensajeValidacion.className = "error";
  } else {
    mensajeValidacion.textContent = "Peso válido.";
    mensajeValidacion.className = "exito";
  }
});

// Evento 2: submit (procesar formulario y agregar objeto)
formEjercicio.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombreVal = ejNombre.value.trim();
  const pesoVal = Number(ejPeso.value);
  const repsVal = Number(ejReps.value);

  // Validación general antes de registrar
  if (pesoVal <= 0 || repsVal <= 0) {
    mensajeValidacion.textContent =
      "Error: El peso y las repeticiones deben ser mayores a 0.";
    mensajeValidacion.className = "error";
    return;
  }

  mensajeValidacion.textContent = "";

  // Crear objeto a partir de la clase
  const nuevaSerie = new EjercicioItem(nombreVal, pesoVal, repsVal);
  sesion.agregarSerie(nuevaSerie);

  renderizarLista();
  formEjercicio.reset();
});

// Función para renderizar el DOM dinámicamente y manejar el Evento 3 (click para eliminar)
function renderizarLista() {
  listaEjercicios.innerHTML = "";

  sesion.series.forEach((serie, index) => {
    const li = document.createElement("li");
    li.textContent = serie.descripcion();

    // Botón para eliminar elemento creado con createElement
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "eliminar";

    // Evento 3: click para eliminar una serie específica
    btnEliminar.addEventListener("click", () => {
      sesion.eliminarSerie(index);
      renderizarLista();
    });

    li.appendChild(btnEliminar);
    listaEjercicios.appendChild(li);
  });

  volumenTotalSpan.textContent = sesion.calcularVolumenTotal();
}
