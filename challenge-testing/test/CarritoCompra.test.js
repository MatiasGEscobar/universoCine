const {CarritoCompra} = require("../index");


describe("la clase CarritoCompra", () => {
    let carritoCompra;

    beforeEach(() => {
        carritoCompra = new CarritoCompra();                                            // Reinicia el carrito antes de cada prueba
    });

    it("Debe ser una clase",() => {
        expect(typeof CarritoCompra).toBe("function")
    });

    it("el valor del carrito debe ser un arreglo", () => {
        expect(Array.isArray(carritoCompra.carrito)).toBe(true);
    })

    it("Debe tener un metodo agregarProducto", () => {
        expect(carritoCompra.agregarProducto).toBeDefined();
    });

    it("Debe recibir un objeto representando un producto y agregarlo al carrito", () =>{
        carritoCompra.agregarProducto({nombre: "papas fritas", precio: 15});
        carritoCompra.agregarProducto({nombre: "gaseosa", precio: 20});
        expect(carritoCompra.carrito).toEqual([{nombre: "papas fritas", precio: 15}, {nombre: "gaseosa", precio: 20}]);
    })

    it("Debe tener un metodo calcularTotal", () => {
       expect(carritoCompra.calcularTotal).toBeDefined();
    });

    it("Debe calcular el total de la compra sumando los precios de todos los productos en el carrito", () => {
        carritoCompra.agregarProducto({nombre: "papas fritas", precio: 15});
        carritoCompra.agregarProducto({nombre: "gaseosa", precio: 20});
        expect(carritoCompra.calcularTotal()).toEqual(35);
    })

    it("Debe tener un metodo aplicarDescuento", () => {
        expect(carritoCompra.aplicarDescuento).toBeDefined();
    });

    it("Debe aplicar un descuento al total de la compra según el porcentaje especificado", () => {
        carritoCompra.agregarProducto({nombre: "papas fritas", precio: 15});
        carritoCompra.agregarProducto({nombre: "gaseosa", precio: 20});
        expect(carritoCompra.aplicarDescuento(10)).toEqual(31.5);
    });
 
});