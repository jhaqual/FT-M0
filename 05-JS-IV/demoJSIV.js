/**
 * Ejercicio 1

function crearGato(nombre, edad) {

let objeto = {
    nombre: nombre,
    edad: edad,
    meow: "Meow!"
  }

console.log (objeto)

}

crearGato("harrinson", 41)
crearGato("Nohely", 45)
*/

/** 
 * Ejercicio 2


function agregarPropiedad(objeto, property) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
    // Tu código:
    objeto[property] = null;
    console.log (objeto)
}

  agregarPropiedad("Luis","edad")

*/



/** 
 * Ejercicio 3


let objeto = {
    metodo: function() {
        return ("Es un metodo");
    }
}

console.log(objeto["metodo"]())

 function invocarMetodo(objeto, metodo) {
    // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
    // Invoca ese método
    // Nada necesita ser devuelto ("returned")
    // Tu código:
    objeto[metodo]();
  }
*/


/** 
 * Ejercicio 4


let objetoMisterioso = {
    numeroMisterioso: 6
}

let resultado = 0;
let datos = objetoMisterioso.numeroMisterioso;
resultado = datos * 5;
console.log (resultado)


// for (let i in objetoMisterioso) {
//     if (objetoMisterioso.numeroMisterioso;
        
//     }
// }

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
    // Multiplica el numeroMisterioso por 5 y devuelve el producto
    // Tu código:
    let resultado = 0;
    let datos = objetoMisterioso.numeroMisterioso;
    resultado = datos * 5;
    return resultado;
}
*/


/** 
 * Ejercicio 5
 
 
 function eliminarPropiedad(objeto, unaPropiedad) {
    // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
    // tip: tenes que usar bracket notation
    // Devuelve el objeto
    // Tu código:
    // delete nuevoObjeto.eliminarEstaPropiedad;

    delete objeto[unaPropiedad];
    return objeto;
  }
*/



/** 
 * Ejercicio 6
 
 function nuevoUsuario(nombre, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    let newObject = {
        nombre: nombre,
        email: email,
        password: password
    }

    console.log (newObject);
    return newObject;
  }

  nuevoUsuario("Harrinson", "telo@dije.com", 46843246)

*/



/**
 * Ejercicio 7

usuario = {
    // email: "telo@dije.com"
    email: "telo@dije.com"
}

console.log(usuario.email)
console.log(usuario["email"])

if (usuario.email != undefined) {
    console.log (true)
    return true
} else {
    console.log (false)
    return false;
}

function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:
    if (usuario.email != undefined) {
        return true;
    } else {
        return false;
    }
}
*/



/**
 * Ejercicio 8
 password = "ab"

 usuario = {
     password: "ab"
 }

 console.log(usuario["password"])

 if (password === usuario["password"]) {
     console.log(true)
     return true
 } else {
     console.log(false)
     return false
 }

 function verificarPassword(usuario, password) {
     // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
     // Devuelve "true" si coinciden
     // De lo contrario, devuelve "false"
     // Tu código:
     if (password === usuario["password"]) {
         return true
     } else {
         return false
     }

 }

 */

 /**
  * Ejercicio 9



usuario = {
    password:"oldPassword"
}

usuario.password = "nuevaPassword"

console.log (usuario)

function actualizarPassword(usuario, nuevaPassword) {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
    usuario.password = nuevaPassword
    return usuario
  }

*/


/**
 * Ejercicio 10


usuario = {
    amigos: ["jose", "maria", "pedro"]
}

usuario.amigos.push("nuevoAmigo")

console.log (usuario)

 function agregarAmigo(usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // Tu código:
    usuario.amigos.push(nuevoAmigo);
    return usuario;
  }

 */




/**
 * Ejercicio 11
 
usuario = {
    esPremium: false
}

usuarios = [{usuario}, {usuario}, {usuario} ]

console.log (usuarios[0].usuario.esPremium);

console.log (usuario)
console.log (usuarios)


for (let i in usuarios) {
    usuarios[i].usuario.esPremium = true
  }

for (let i in usuarios) {
    console.log(i)
    console.log(usuarios[i])
    console.log(usuarios[i].esPremium = true)
    console.log(usuarios[i])
}
console.log(usuarios)


 function pasarUsuarioAPremium(usuarios) {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
  }

*/




/**
 * Ejercicio 12

 post = {
     likes: 1
 }
console.log(post)

usuario = {
     posts: [{post}, {post}, {post}, {post}]
 }
// console.log(usuario)
// console.log(usuario.posts)
// console.log(usuario.posts[0])
console.log(usuario.posts[0].post.likes = 5)
console.log(usuario)

let sumatoria = 0;

for (let i = 0; i < usuario.post[i].length; i++) {
    arrayPost = usuario.posts[i].post.likes;
    sumatoria = sumatoria + arrayPost;
}

console.log (sumatoria);


function sumarLikesDeUsuario(usuario) {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
  }
  */



/**
 * Ejercicio 13
 */

// producto = {
//     metodo: function calcularPrecioDescuento () {
    
//     }
// }

 function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:

  }

producto = {
    precio: 1000,
    porcentajeDeDescuento: 0.5
}

// console.log (producto.precio)
// console.log (producto.porcentajeDeDescuento)

//  console.log (producto.precio * producto.porcentajeDeDescuento)
calcularPrecioDescuento = function () {
    let resta = 0;
        if (producto.porcentajeDeDescuento > 0) {
            calculoDescuento = producto.precio * producto.porcentajeDeDescuento;
            resta = producto.precio - calculoDescuento;
        }
    }
    producto.calcularPrecioDescuento
    console.log (producto);

calcularPrecioDescuento()

producto.nuevaPropiedad = "Soy una nueva propiedad"

console.log (producto)

/**
 * Ejercicio 14
 */
/**
 * Ejercicio 15
 */
