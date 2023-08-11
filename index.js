/*class Compra {
    constructor(cantidad, precio) {
        this.cantidad = cantidad;
        this.precio = precio;
 } 

calcularPrecio() {
    return this.cantidad * this.precio;
 } 

calcularDescuento() {
    if(this.cantidad == 2) {
        return this.precio * 0.90;
 } else if (this.cantidad >=3) {
  return this.precio * 0.75;
  } else {
    return this.precio
  }
 }
}    

function ingresarCompra() {

    const stockProductos = ["camisetas" , "camperas" , "pantalones" , "medias"];
    console.log("Productos en stock: " + stockProductos)

    let ProductoSeleccionado = prompt("ingrese su producto");
    let cantidad = Number(prompt ("ingrese cantidad"));
    let precio = Number(prompt ("ingrese precio"));
    return new Compra(cantidad, precio);
    
}

let i = 1
while (i < 5) {
    i++
    let compra = ingresarCompra();
    let precioTotal = compra.calcularPrecio;
    let precioConDescuento = compra.calcularDescuento;

}*/
