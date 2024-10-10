class CarritoCompra {
    constructor(){
        this.carrito = [];
    }

    agregarProducto(producto){
        this.carrito.push(producto);
    }

    calcularTotal(){
        let totalPrecio = 0;
        for (const producto of this.carrito) totalPrecio += producto.precio;
        return totalPrecio;
    }

    aplicarDescuento(porcentaje){
        const totalPrecio = this.calcularTotal();
        const descuento = totalPrecio * (porcentaje / 100);
        return totalPrecio - descuento;
    }
};

module.exports = {CarritoCompra};