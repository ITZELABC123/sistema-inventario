const Producto = require("./producto");
const { calcularValorInventario } = require("./inventario");

const productos = [
  new Producto("P001", "Teclado", 350, 10),
  new Producto("P002", "Mouse", 180, 5),
  new Producto("P003", "Monitor", 2500, 3),
];

console.log("Sistema de Inventario v1.1.0");
console.log("Productos registrados: " + productos.length);

for (const producto of productos) {
  console.log("------------------------------");
  producto.mostrarInformacion();
}

console.log("Valor total del inventario: $" + calcularValorInventario(productos).toFixed(2));
