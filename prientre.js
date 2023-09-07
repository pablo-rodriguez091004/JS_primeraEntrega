const productos = [
    { Nombre: "pan", precio: 500},
    { Nombre: "jugos", precio: 200},
    { Nombre: "cerveza", precio: 300},
    { Nombre: "leche", precio: 100},
    { Nombre: "zumo", precio: 50},
    { Nombre:"otro producto",precio: 0}
];

const NuevosProductos = [ "dulces", "goma", "paquetes", "vegetales",]
let nuevoMen = ("lo traeremos pronto")
let carrito = []

let selección = prompt("Hola, desea comprar algo si o no")

while (selección != "si" && selección != "no"){
    alert("por favor ingresa si o no")
    selección = propmt("Hola desea comprar algo si o no")
}

if (selección == "si"){
    alert("A continuación nuestra lista de productos")
    let todosLosProductos = productos.map(
        (producto) => producto.Nombre + " " + producto.precio + "$"
        );
    alert(todosLosProductos.join(" - "))
}   else if(selección == "no"){
    alert(" Gracias por venir, hasta pronto")
}

while (selección != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio =0

    if(producto == "pan" || producto == "jugos" || producto == "cerveza" || producto == "leche" || producto == "zumo" || producto == "otro producto"){
       switch(producto) {
        case "pan":
            precio = 500;
            break;
        case "jugos":
            precio = 200;
            break;
        case "cerveza":
            precio = 300;
            break;
        case "leche":
            precio = 100;
            break;
        case "zumo":
            precio = 50;
            break;  
        case "otro producto":
            if(producto ===  "otro producto"){
                if(NuevosProductos == "dulces" || NuevosProductos == "goma" || NuevosProductos == "paquetes" || NuevosProductos == "vegetales"){
                    switch(NuevosProductos){
                        case "dulce"
                            :console.log(nuevoMen)
                        case "goma"
                            :console.log(nuevoMen)
                        case "paquetes"
                            :console.log(nuevoMen)    
                        case "vegetales"
                            :console.log(nuevoMen)
                    }
                }
            }        
                        

        default:
            break;     
       }


       let unidades = parseInt(prompt("cuantas unidades quiere llevar"))
       carrito.push({producto,unidades,precio})
       console.log(carrito)
    } else {
        alert("No tenemos ese producto")
        
    }


    selección = prompt("¿Desea seguir comprando?")
    
    
    while(selección === "no"){
        alert("gracias por su compra, adiós")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto  ${carritoFinal.unidades * carritoFinal.precio} `);
        })
    break;    
    }

}


const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades, 0)
console.log(` El total a pagar por su compra es:  ${total} `)




