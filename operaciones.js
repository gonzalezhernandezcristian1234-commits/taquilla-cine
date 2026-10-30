import { catalogo } from "./datos.js";

export function venderEntradas(titulo, cantidad) {
    const pelicula = catalogo.find(function (p) {
        return p.titulo === titulo;
    });

    if (!pelicula) {
        console.log("ERROR: la película no existe en el catálogo");
        return;
    }

    const disponible = pelicula.capacidad - pelicula.vendidas;

    if (cantidad > disponible) {
        console.log("Venta rechazada: solo quedan " + disponible + " asientos para " + pelicula.titulo);
        return;
    }

    pelicula.vendidas = pelicula.vendidas + cantidad;
    console.log("Venta exitosa: " + cantidad + " boletos para " + pelicula.titulo);
}

export function calcularTotalTaquilla() {
    let total = 0;

    for (const pelicula of catalogo) {
        const ingresos = pelicula.vendidas * pelicula.precio;
        total = total + ingresos;
    }

    return total;
}