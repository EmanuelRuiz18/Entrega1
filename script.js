alert('Almacen TecnoSoluciones');
let desicion = parseInt(prompt('1. Ver productos disponibles \n2. Agregar productos'));
while((desicion !== 2) && (desicion !== 1)) {
    desicion = parseInt(prompt('1. Ver productos disponibles \n2. Agregar productos'));
}

const iterar = (array) => {
    for (i = 0; i <= array.length; i++) {
        array[i];
    }
}
const suma = (arg1, arg2) => {
    return arg1 + arg2;
}
const resta = (arg1, arg2) => {
    return arg1 - arg2;
}
const multiplicacion = (arg1,arg2) => {
    return arg1 * arg2;
}
const division = (arg1,arg2) => {
    return arg1 / arg2;
}
const iva = (precio,porcentaje) => {
return precio + (precio * porcentaje);
}



class Producto {
    constructor(nombre, marca, modelo, precio, stock){
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = false;
    }
    modificarPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
    }
    modificarModelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
    modificarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}

const productos = [];


const usb = new Producto('usb', 'generico', '1.1', 100, true);
const motherboard = new Producto('motherboard', 'Gigabyte', 'B450', 2000, true);
const ssd = new Producto('ssd 512gb', 'Adata', '2.0', 900, true);
const hdd = new Producto('ssd 1tb', 'seagate', '2.0', 800, true);

productos.push(usb, motherboard, ssd, hdd);

iterar(productos);

console.log(productos);

/* sumaObjetos = suma(usb.precio, motherboard.precio);
console.log(sumaObjetos);
 */
/* if (desicion == 1) {~
    console.log(productos.nombre);
}
else if(desicion === 2) {
    agregar = agregar;
} */