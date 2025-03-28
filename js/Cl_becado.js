import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_becado extends Cl_estudiante {
    constructor(nombre, acumuladoNotas, cantidadMaterias, beca) {
        super(nombre, acumuladoNotas, cantidadMaterias);
        this.beca = beca;
    }
    calcularBeca() {
        if (super.notaPromedio() > 15) {
            this.beca = 30;
        } else if (super.notaPromedio() >= 10) {
            this.beca = 20;
        } else {
            this.beca = "";
        }
        return this.beca;
    }
    convertirBecaString() {
        if (this.notaPromedio() >= 10) {
            return "recibe una beca de:";
        } else {
            return "no le corresponde beca.";
        }
    }
}