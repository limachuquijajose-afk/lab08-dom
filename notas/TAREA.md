# Tarea: Mi componente interactivo

## Componente elegido

**Registro de Rutina de Ejercicios:** Una aplicación web orientada al fitness que permite registrar series de musculación ingresando el nombre del ejercicio, el peso en kilogramos y las repeticiones. Calcula automáticamente el volumen total de entrenamiento, valida los datos de entrada en tiempo real y permite eliminar registros de forma dinámica.

## Versión 1: solo DOM

- **Qué agregué:** La estructura base en HTML con formularios, inputs, contenedores de listas (`<ul>`) y textos estáticos, junto con manipulación inicial estática del DOM mediante `document.querySelector` y creación de nodos de prueba con `createElement` y `appendChild`.
- **Por qué:** Para asegurar que la interfaz visual tuviera todos los elementos necesarios antes de agregar interactividad y lógica de programación.
- **Qué cambió en el comportamiento de la página:** Se visualiza el formulario y los contenedores en pantalla, pero los botones aún no responden a las acciones del usuario ni calculan datos de forma dinámica.

```javascript
// Versión 1: Estructura y prueba básica del DOM
const listaEjercicios = document.querySelector("#listaEjercicios");
const liPrueba = document.createElement("li");
liPrueba.textContent = "Ejemplo: Sentadillas - 60 kg x 10 reps";
listaEjercicios.appendChild(liPrueba);
```

## Versión 2: con eventos

- **Qué agregué:** Implementación de controladores de eventos (`addEventListener`) para capturar el evento `submit` del formulario, prevenir la recarga con `preventDefault()`, capturar eventos `input` en tiempo real y validar que los números ingresados no sean negativos.

- **Por qué:** Para hacer que la interfaz reaccione interactivamente a lo que escribe y envía el usuario, mostrando mensajes de validación visibles sin usar alertas molestas (`alert`).

- **Qué cambió en el comportamiento de la página:** Al escribir en el campo de peso, se muestra un mensaje de validación dinámico en pantalla, y al enviar el formulario se recogen los valores introducidos sin recargar la página.

```javascript
// Versión 2: Incorporación de eventos input y submit
const formEjercicio = document.querySelector("#formEjercicio");
const ejPeso = document.querySelector("#ejPeso");
const mensajeValidacion = document.querySelector("#mensajeValidacion");

ejPeso.addEventListener("input", () => {
  if (Number(ejPeso.value) < 0) {
    mensajeValidacion.textContent = "El peso no puede ser negativo.";
    mensajeValidacion.className = "error";
  } else {
    mensajeValidacion.textContent = "Peso válido.";
    mensajeValidacion.className = "exito";
  }
});

formEjercicio.addEventListener("submit", (evento) => {
  evento.preventDefault();
  mensajeValidacion.textContent = "Formulario enviado correctamente.";
});
```

## Versión 3: con clases y objetos

- **Qué agregué:** La creación de la clase `EjercicioItem` (con constructor, atributos y los métodos `calcularVolumen()` y `descripcion()`), la clase gestora SesionEntrenamiento, la integración completa con el DOM para renderizar listas dinámicas y la adición de un botón de eliminación con evento `click` por cada ítem.

- **Por qué:** Para modelar la información de manera orientada a objetos, estructurar el código limpiamente y permitir operaciones escalables como calcular el volumen total de la sesión y eliminar registros específicos.

- **Qué cambió en el comportamiento de la página:** Cada vez que el usuario registra una serie, se crea un objeto que calcula automáticamente su volumen, se añade a una lista interactiva con botón de borrado individual y se actualiza en tiempo real el volumen total acumulado en la sesión.

```javascript
// Versión 3: Clases, objetos y lógica completa
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
```

## Donde uso DOM, eventos y objetos

| Pieza      | Línea de tu código donde aparece                                                | Para qué sirve                                                                                                     |
| :--------- | :------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| **DOM**    | `const formEjercicio = document.querySelector("#formEjercicio");` (Línea 47)    | Seleccionar elementos HTML, modificar sus clases, crear nodos con `createElement` y renderizar la interfaz.        |
| **Evento** | `formEjercicio.addEventListener("submit", (evento) => {` (Línea 68)             | Escuchar las interacciones del usuario (submit, input, click) para disparar funciones de control y actualización.  |
| **Objeto** | `const nuevaSerie = new EjercicioItem(nombreVal, pesoVal, repsVal);` (Línea 86) | Modelar las entidades de la aplicación mediante instancias con atributos propios y métodos de cálculo específicos. |

## Pruebas realizadas

| Acción                                                             | Resultado esperado                                                 | Resultado obtenido                                         | ¿Cumple? (Sí / No) |
| :----------------------------------------------------------------- | :----------------------------------------------------------------- | :--------------------------------------------------------- | :----------------: |
| Escribir un número negativo en el campo de peso                    | Mostrar texto de aviso en rojo indicando que no puede ser negativo | Se muestra el mensaje de error correspondiente en rojo     |         Sí         |
| Enviar el formulario con datos válidos (ej. "Press banca", 80, 10) | Agregar la serie a la lista y calcular el volumen (800 kg)         | La serie aparece listada y se actualiza el volumen total   |         Sí         |
| Enviar el formulario dejando campos vacíos o con ceros             | Mostrar mensaje de validación impidiendo el registro               | Muestra mensaje de error y detiene el flujo de envío       |         Sí         |
| Hacer clic en el botón "Eliminar" de una serie de la lista         | Borrar únicamente ese elemento de la lista y recalcular el volumen | El elemento desaparece y el volumen total disminuye acorde |         Sí         |
| Recargar la página después de registrar series                     | Restablecer el estado inicial de la aplicación                     | La página se limpia correctamente                          |         Sí         |

## Por qué diseñé así mi clase

Diseñé la clase `EjercicioItem` estructurándola con los atributos `nombre`, `peso` y `repeticiones` porque representan las métricas esenciales que un deportista registra al hacer seguimiento de sus series de fuerza. Incluí el método `calcularVolumen()` para automatizar la multiplicación matemática de la carga por las repeticiones (una métrica clave en hipertrofia y Smart Fit), y el método `descripcion()` para centralizar el formato visual del texto que se inyecta directamente en el DOM, logrando un código más ordenado, limpio y fácil de mantener.
