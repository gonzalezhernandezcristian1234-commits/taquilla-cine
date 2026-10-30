import { catalogo } from "./datos.js";

export function venderEntradas(titulo, cantidad) {
    const pelicula = catalogo.find(function (p) {
        return p.titulo === titulo;
    })
    if (!pelicula) {
        console.log("ERROR: la pelicula no existe en el catalogo");
        return
    }
}

const disponible = pelicula.capacidad - pelicula.vendidas;

if (cantidad > disponible) {
    console.log("Venta rechazada: solo quedad" + disponible + "para" + pelicula.titulo);
    return;
}
pelicula.vendidas = pelicula.vendidas + cantidad;
console.log("Venta exitosa" + cantidad + "boletos para" + pelicula.titulo);



