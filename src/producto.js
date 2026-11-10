class Producto {
constructor(codigo, nombre, precio, existencia) {
this.codigo = codigo;
this.nombre = nombre;
this.precio = precio;
this.existencia = existencia;
}

mostrarInformacion() {
console.log("Codigo: " + this.codigo);
console.log("Nombre: " + this.nombre);
console.log("Precio: $" + this.precio.toFixed(2));
console.log("Existencia: " + this.existencia);
}
}

module.exports = Producto;
(
