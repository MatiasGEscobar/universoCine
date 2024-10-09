const {CarritoCompra, producto} = require("../index");

describe("la clase CarritoCompra", () => {
    it("Debe ser una clase",() => {
        expect(typeof CarritoCompra).toBe("function")
    });

    it("el valor del carrito debe ser un arreglo", () => {
        const carritoCompra = new CarritoCompra();
        expect(Array.isArray(carritoCompra.carrito)).toBe(true);
    })

    it("Debe tener un metodo agregarProducto", () => {
        const carritoCompra = new CarritoCompra();
        expect(carritoCompra.agregarProducto).toBeDefined();
    });

    it("Debe recibir un objeto representando un producto y agregarlo al carrito", () =>{
        const carritoCompra = new CarritoCompra();
        carritoCompra.agregarProducto({nombre: "papas fritas", precio: 15});
        carritoCompra.agregarProducto({nombre: "gaseosa", precio: 20});
        expect(carritoCompra.carrito).toEqual([{nombre: "papas fritas", precio: 15}, {nombre: "gaseosa", precio: 20}]);
    })

    it("Debe tener un metodo calcularTotal", () => {
        const carritoCompra = new CarritoCompra();
       expect(carritoCompra.calcularTotal).toBeDefined();
    });

    it("Debe calcular el total de la compra sumando los precios de todos los productos en el carrito", () => {
        const carritoCompra = new CarritoCompra();
        carritoCompra.agregarProducto({nombre: "papas fritas", precio: 15});
        carritoCompra.agregarProducto({nombre: "gaseosa", precio: 20});
        expect(carritoCompra.calcularTotal()).toEqual(35);
    })

    it("Debe tener un metodo aplicarDescuento", () => {
        const carritoCompra = new CarritoCompra();
        expect(carritoCompra.aplicarDescuento).toBeDefined();
    });

    it("Debe aplicar un descuento al total de la compra según el porcentaje especificado", () => {
        const carritoCompra = new CarritoCompra();
        carritoCompra.agregarProducto({nombre: "papas fritas", precio: 15});
        carritoCompra.agregarProducto({nombre: "gaseosa", precio: 20});
        expect(carritoCompra.aplicarDescuento(10)).toEqual(31.5);
    });
 
});