const Producto = require("../src/producto");

function capturarSalida(producto) {
  const lineas = [];
  const espia = jest.spyOn(console, "log").mockImplementation((texto) => {
    lineas.push(texto);
  });
  producto.mostrarInformacion();
  espia.mockRestore();
  return lineas;
}

describe("Clase Producto", () => {
  test("CP01 - Crear un producto con los datos proporcionados", () => {
    const producto = new Producto("P001", "Teclado", 350, 10);
    expect(producto.codigo).toBe("P001");
    expect(producto.nombre).toBe("Teclado");
    expect(producto.precio).toBe(350);
    expect(producto.existencia).toBe(10);
  });

  test("CP02 - Mostrar el código", () => {
    const producto = new Producto("P001", "Teclado", 350, 10);
    expect(capturarSalida(producto)).toContain("Codigo: P001");
  });

  test("CP03 - Mostrar el nombre", () => {
    const producto = new Producto("P001", "Teclado", 350, 10);
    expect(capturarSalida(producto)).toContain("Nombre: Teclado");
  });

  test("CP04 - Mostrar el precio", () => {
    const producto = new Producto("P001", "Teclado", 350, 10);
    expect(capturarSalida(producto)).toContain("Precio: $350.00");
  });

  test("CP05 - Mostrar la existencia", () => {
    const producto = new Producto("P001", "Teclado", 350, 10);
    expect(capturarSalida(producto)).toContain("Existencia: 10");
  });

  test("CP06 - Mostrar información completa", () => {
    const producto = new Producto("P001", "Teclado", 350, 10);
    expect(capturarSalida(producto)).toEqual([
      "Codigo: P001",
      "Nombre: Teclado",
      "Precio: $350.00",
      "Existencia: 10",
    ]);
  });

  test("CP07 - Crear un segundo producto sin confundir sus datos", () => {
    const primero = new Producto("P001", "Teclado", 350, 10);
    const segundo = new Producto("P002", "Mouse", 180, 5);
    expect(primero.codigo).toBe("P001");
    expect(primero.nombre).toBe("Teclado");
    expect(segundo.codigo).toBe("P002");
    expect(segundo.nombre).toBe("Mouse");
    expect(segundo.precio).toBe(180);
    expect(segundo.existencia).toBe(5);
    expect(capturarSalida(segundo)).toEqual([
      "Codigo: P002",
      "Nombre: Mouse",
      "Precio: $180.00",
      "Existencia: 5",
    ]);
  });
});
