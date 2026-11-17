const Producto = require("./producto");

const productos = [
  new Producto("P001", "Teclado", 350, 10),
  new Producto("P002", "Mouse", 180, 5),
];

console.log("Sistema de Inventario");
console.log("Productos registrados: " + productos.length);

for (const producto of productos) {
  console.log("------------------------------");
  producto.mostrarInformacion();
}
