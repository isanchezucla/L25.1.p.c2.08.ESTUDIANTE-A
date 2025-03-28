export default class Cl_estudiante {
    constructor(nombre, acumuladoNotas, cantidadMaterias) {
        this.nombre = nombre;
        this.acumuladoNotas = acumuladoNotas;
        this.cantidadMaterias = cantidadMaterias;
    }
    notaPromedio(){
        return this.acumuladoNotas / this.cantidadMaterias;
    }
}