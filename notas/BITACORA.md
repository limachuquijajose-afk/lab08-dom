# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion                  | Que cambio en la pantalla                                                                               | Se mantiene al recargar (Si/No) |
| ---------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------- |
| textContent desde la consola | El título principal cambia al texto asignado (ej. "Hola desde la consola")                              | No                              |
| textContent desde app.js     | El título cambia al texto definido en el script (ej. "Hola TECSUP")                                     | Si                              |
| style.color                  | El color del texto del título cambia al color indicado (ej. azul)                                       | Si                              |
| classList.add                | Se añade la clase CSS al elemento, aplicando los estilos definidos (ej. fondo amarillo de `.destacado`) | Si                              |
| createElement + appendChild  | Se crea un nuevo elemento HTML (ej. un nuevo `<li>` con "JavaScript") y se añade al final de la lista   | Si                              |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara                              | Cuanto suma por accion |
| -------------- | -------------------------------------------------- | ---------------------- |
| click          | Un clic izquierdo (o toque) sobre el elemento      | 1                      |
| dblclick       | Un doble clic rápido sobre el elemento             | 1                      |
| mouseover      | Pasar el puntero del mouse por encima del elemento | 1                      |

El objeto `evento.type` mostró el tipo de evento registrado (por ejemplo, `"click"`), y `evento.target` mostró el elemento HTML exacto que recibió la acción (por ejemplo, `<button id="btnSumar">Sumar 1</button>`).

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Que paso en la pantalla                                                                              | Se recargo la pagina (Si/No) |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------- |
| Escribir en el campo nombre             | El texto "Hola, ..." cambia letra por letra en tiempo real                                           | No                           |
| Enviar sin preventDefault               | El texto "Enviado" aparece un instante y desaparece inmediatamente debido a que la página se recarga | Si                           |
| Enviar con preventDefault, correo sin @ | Aparece el mensaje de advertencia en rojo indicando "Correo no valido: falta @"                      | No                           |
| Enviar con preventDefault, correo con @ | Aparece el mensaje de éxito indicando "Enviado: " seguido del correo ingresado                       | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()      | conDescuento(0.25) |
| ------- | ------- | ------ | ------------------ | ------------------ |
| laptop  | Laptop  | 2500   | Laptop - S/2500.00 | 1875.00            |
| mouse   | Mouse   | 45     | Mouse - S/45.00    | 33.75              |
| teclado | Teclado | 120    | Teclado - S/120.00 | 90.00              |
| monitor | Monitor | 680    | Monitor - S/680.00 | 510.00             |

Usar una clase permite reutilizar la misma estructura y métodos lógicos para crear múltiples objetos de forma rápida, evitando duplicar código HTML a mano. Además, facilita el mantenimiento, ya que cualquier cambio en la presentación o lógica se actualiza automáticamente para todos los elementos generados.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina                               | Correcto (Si/No) |
| --------------- | --------------------------------------------------------- | ---------------- |
| Cuaderno 12.50  | 12.50                                                     | Si               |
| + Lapicero 3.20 | 15.70                                                     | Si               |
| + Mochila 89.90 | 105.60                                                    | Si               |
| Sin Number()    | El precio llegó como texto y no muestra el total correcto | No               |

| Pieza  | Linea de tu codigo donde aparece                              | Para que sirve                                                                                                         |
| ------ | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| DOM    | `const titulo = document.querySelector("#titulo");` (Línea 4) | Seleccionar y modificar elementos de la estructura HTML desde JavaScript para cambiar texto, estilos o agregar nodos.  |
| Evento | `btnSumar.addEventListener("click", (evento) => {` (Línea 16) | Escuchar las acciones del usuario (como clics, inputs o envíos) para ejecutar funciones específicas en respuesta.      |
| Objeto | `const laptop = new Producto("Laptop", 2500);` (Línea 68)     | Modelar datos y estructurar lógica mediante instancias creadas a partir de clases con sus propios atributos y métodos. |
