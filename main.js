import { catalogo } from "./datos.js";
import { venderEntradas, calcularTotalTaquilla } from "./operaciones.js";

console.log("CATALOGO INICIAL!!!");
console.table(catalogo);

console.log("Venta Exitosa!!!");
venderEntradas ("spider-man: brand new day", 5)

console.log("Venta que supera la calacidad");
venderEntradas("dandadan: the evil eyes" , 500)

console.log("CATALOGO ACTUALIZADA");
console.table(catalogo);

console.log("TOTAL RECAUDADO");
const total = calcularTotalTaquilla();
console.log("Total recaudado: " + total.toFixed(2));

 


