/* Este es el primer ejercicio que he realizado

function CalcularPromedio(){
    var v1 = document.getElementById("n1").value;
    var v2 = document.getElementById("n2").value;
    var v3 = document.getElementById("n3").value;
    var v4 = document.getElementById("n4").value;
    var pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3)+parseFloat(v4))/4;
    document.getElementById("promedio").innerHTML = pro;

}*/

/*Este es el segundo ejercicio que he realizado


const productos = [
    { Nombre: "pan", precio: 500},
    { Nombre: "jugos", precio: 200},
    { Nombre: "cerveza", precio: 300},
    { Nombre: "leche", precio: 100},
    { Nombre: "zumo", precio: 50},
];

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

    if(producto == "pan" || producto == "jugos" || producto == "cerveza" || producto == "leche" || producto == "zumo"){
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
console.log(` El total a pagar por su compra es:  ${total} ` )
*/

//he realizado 2 codigos para ver cual estaba mejor e intentar comprender todo un poco mejor













































/*let NA = prompt("Ingrese su nombre");
let AA = prompt("Ingrese su apellido")
let CA = prompt("Ingrese su curso")

alert( " Hola " + NA  + " " +  AA  + " del curso " +  CA );

let Ms = true

if (Ms == true){
    console.log("Vamos a pedirte tus calificaciones a continuación");
}else{
    console.log("ingresa tus datos otra vez");
}

let N1 = prompt("Ingresa tu primera calificación");     
let N2 = prompt("Ingresa tu segunda calificación");
let N3 = prompt("Ingresa tu tercera calificación");
let N4 = prompt("Ingresa tu cuarta calificación");

let sumaDeCalificaciones = N1 + N2 + N3 + N4;
let notaFinalDeLaMateria = sumaDeCalificaciones / 4;

if (notaFinalDeLaMateria <=2.9){
        console.log("pierdes la materia");
    }
    else if(notaFinalDeLaMateria >=30){
        console.log("Has pasado con ayuda del yisus");
    }
    else if(notaFinalDeLaMateria >=36){
        console.log("Pasas tranquilo");
    }
    else if(notaFinalDeLaMateria >=40){
        console.log("pasas muy tranquilo");
    }
    else if(notaFinalDeLaMateria >=45){
        console.log("sos un pro en esta materia");
    }














    /*if (notaFinalDeLaMateria <=2.9){
        console.log("pierdes la materia");
        }
        else if(notaFinalDeLaMateria >=3.0 <=3.5) {
            console.log("Has pasado con ayuda del yisus");
        }
        else if (notaFinalDeLaMateria >= 3.6 <=3.999){
            console.log("has pasado tranquilo");
        }
        else if (notaFinalDeLaMateria >=4.0 <=4.5){
            console.log("Pasas muy tranquilo");
        }
        else if (notaFinalDeLaMateria >=4.6 <=5.0){
            console.log("sos un pro en esta materia");
        }*/