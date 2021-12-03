
function mayuscula(nombre) {
    //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
    //ej: Recibe "mario" ----> Devuelve "Mario"
    //Tu código:
    // let nombre = "mario";
    console.log (nombre.charAt(0))
    console.log (nombre.toUpperCase())
    console.log (nombre.charAt(0).toUpperCase())
    console.log (nombre.slice(1))
    console.log (nombre.charAt(0).toUpperCase() + nombre.slice(1));

  }

mayuscula("jose")


// ------------------------ 2

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var sumaEnteros = numeros.reduce(function(acumulador, item){
    acumulador = acumulador + item;
    return acumulador;
  })

  cb(sumaEnteros);

}

//------------------------- 3

// function forEach(array, cb) {
//   // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
//   // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
//   //Tu código:
//   array.forEach(
//     function(elemento, i){
//     return console.log("Hola desde el forEach " + elemento + " " + i)
// });
// }


//---------------------- 4
// let array = [5, 6, 9];
// function forEach(array, cb) {
//   // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
//   // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
//   //Tu código:
//   array.forEach(function(elemento){
//     cb(elemento);
// });

// }


// forEach(array)



//--------------------- 5


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  // array = ["reloj", "agua", "ropa"];
  let newArray = array.filter(function(elemento){
    if (elemento[0] === "a") {
      return elemento;
    }
  })
  return console.log (newArray);
}

filter()