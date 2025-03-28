/*ESTUDIANTE-A
El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
Se tiene de todo becado su nombre, acumulado notas y cantidad materias.
Un becado becado recibe una beca mensual de $30 si su promedio de notas es superior a
15, ó recibe $20 si es al menos de 10; si el promedio es menor de 10, no recibe beca.
Diseñe las clases Cl_becado y Cl_becado, usando herencia, de manera que procese un
becado y reporte el monto de la beca, o si no le corresponde beca.
Ejemplos de la corrida:

Nombre del becado: Mary
Acumulado de notas: 132
Cantidad de materias: 8
Nota promedio: 16.50
Mary recibe una beca de $30.00

Nombre del becado: Alirio
Acumulado de notas: 315
Cantidad de materias: 35
Nota promedio: 9.00
Alirio no le corresponde beca
*/

import Cl_becado from "./Cl_becado.js";

let becado = new Cl_becado("Mary", 132, 8);
let becado2 = new Cl_becado("Alirio", 315, 35);

salida.innerHTML = `Nombre del becado: ${becado.nombre}<br>
Acumulado de notas: ${becado.acumuladoNotas}<br>
Cantidad de materias: ${becado.cantidadMaterias}<br>
Nota promedio: ${becado.notaPromedio().toFixed(2)}<br>
${becado.nombre} ${becado.convertirBecaString()} ${becado.calcularBeca().toFixed(2)}<br><br>`;

salida.innerHTML += `Nombre del becado: ${becado2.nombre}<br>
Acumulado de notas: ${becado2.acumuladoNotas}<br>
Cantidad de materias: ${becado2.cantidadMaterias}<br>
Nota promedio: ${becado2.notaPromedio().toFixed(2)}<br>
${becado2.nombre} ${becado2.convertirBecaString()} ${becado2.calcularBeca()}<br>`;
