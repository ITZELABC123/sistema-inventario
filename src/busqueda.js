function buscarProductos(productos, termino) {
const texto = termino.trim().toLowerCase();
return productos.filter(p =>
p.codigo.toLowerCase().includes(texto) ||
p.nombre.toLowerCase().includes(texto)
);
}

module.exports = buscarProductos;
