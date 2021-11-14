//var array = [1,2,3,4,5,"último"]

// console.log (array);

// console.log (array.length);
// console.log (array.length[5]);


// console.log (array.length - 1);


// Ejercicio 01  *****************
/*
function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  // for (let i = 0; i < array.length; i++){
  // console.log (array.length);
  // }
  console.log (array[array.length - 1]);


}

devolverUltimoElemento(array);
*/


// Ejercicio 02 *****************
/*
var array = [1,2,3,4,5]

function incrementarPorUno(array) {
// "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  newArray = []

  for (let i = 0; i < array.length; i++) {
    // 👇Solución opción 1👇
    // let sum = (array[i] + 1);
    // newArray.push(sum);

    // 👇Solución opción 2👇
    newArray.push(array[i]+1);
  }

  console.log (newArray);

}

incrementarPorUno(array)

*/


// Ejercicio 03 *****************

/*
var array = [1,2,3,4,5]
var elemento = "agregado";
console.log (elemento)
console.log (array)



function agregarItemAlFinalDelArray(array, elemento) {
   // Añade el "elemento" al final del array
   // y devuelve el array
   // Tu código:
console.log (array.push(elemento))
console.log (array)

}


agregarItemAlFinalDelArray(array, elemento);
*/


// Ejercicio 04 *****************

/*
var palabras = ["me","gusta","aprender","JavaScript","!!"]

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var string = "";
  for (let i = 0; i < palabras.length; i++) {
    if (i === palabras.length - 1){
      string = string + palabras[i];
    } else string = string + palabras[i] + " ";
  }
  console.log (string)

}

dePalabrasAFrase(palabras);
*/



// Ejercicio 05 *****************
/*
numeros = [10, 10, 16];

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sumatoria = 0;
  
  for (let i = 0; i < numeros.length; i++){
    let valores = numeros[i];
    sumatoria = sumatoria + valores;
  }

  console.log (sumatoria);
}

agregarNumeros(numeros)
*/


// Ejercicio 06 *****************

// resultadosTest = [97, 100, 80, 55, 72, 94]; // 83

// function promedioResultadosTest(resultadosTest) {
//   // "resultadosTest" debe ser una matriz de enteros (int/integers)
//   // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
//   // Tu código:
//   let sumatoria = 0;

//   for (let i = 0; i < resultadosTest.length; i++){
//     let valores = resultadosTest[i];
//     sumatoria = sumatoria + valores;
//   }
//   console.log (sumatoria/resultadosTest.length)

// }

// promedioResultadosTest(resultadosTest)



// Ejercicio 07 *****************

// numeros = [97, 100, 80, 55, 72, 94]; // 83

// function numeroMasGrande(numeros) {
//   // "numeros" debe ser una matriz de enteros (int/integers)
//   // Devuelve el número más grande
//   // Tu código:
// // console.log (Math.max(numeros[i]));
//   let numMayor = 0;

//   for (let i = 0; i < numeros.length; i++){
//      if(numeros[i] > numMayor){
//        numMayor = numeros[i];
//     }
//   }
//   console.log (numMayor);

// }

// numeroMasGrande(numeros)



// Ejercicio 08 *****************

// function tablaDelSeis(){
//   //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//   //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//   //Escribe tu código aquí
// let constante = 6
// let total = []
// let table = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < table.length; i++) {
//     let calculo = table[i] * constante;
//     total.push(calculo);
//   }
//   console.log (total)


// }

// tablaDelSeis()

/*
function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  
  // let total = []
  // let table = [0,1,2,3,4,5,6,7,8,9,10]
  
  // for (let i = 0; i < table.length; i++) {
    //     total.push(table[i] * 6);
    //   }
    //   console.log (total)
    
    
    var table = [];
    
    for (let i = 0; i < 11; i++) {
      table.push(i * 6);
    }
console.log (table);

}

tablaDelSeis()
*/

// Ejercicio 08 *****************

/*
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  // for (let i = 0; i < arguments.length; i++){
  //   if (arguments.length === 0) {
  //     console.log (0)
  //   }
  // }

let producto = 0;
for (let i = 0; i < arguments.length; i++){
  producto *= arguments[i];
}
console.log(producto)

}

multiplicarArgumentos(2, 3)
*/



// Ejercicio 08 *****************
/*
arreglo = [10, 10, 18, 21]

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let sumatoria = 0;
  for (let i = 0; i < arreglo.length; i++) {
    sumatoria += arreglo[i] > 18
  }
  console.log (sumatoria)
}
cuentoElementos(arreglo)
*/


// Ejercicio 09 *****************
/*
numeroDeDia = [1,2,3,4,5,6,7]
//Sabado y domingo son 1 y 7 respectivamente

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario. 
  //Escribe tu código aquí
  if (numeroDeDia === 1 || numeroDeDia === 7){
      console.log("Es fin de semana")
    } else {
      console.log ("Es laboral")
    }
} 
diaDeLaSemana(6)
*/


// Ejercicio 10 *****************

// n = 29;

// function empiezaConNueve(n) {
//   //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
//   //inicia con 9 y false en otro caso.
//   //Escribe tu código aquí
//   var numero = n.toString();

//   if (numero[0] == 9) {
//     console.log (true);
//   }else {
//     console.log (false);
//   } 

// }
// empiezaConNueve(n)



// Ejercicio 11 *****************

/*
arreglo = ["casa","casa"];
//  arreglo = ["casa","casa", 5, 6];

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aqui:
  let elemento = arreglo[0];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] !== elemento){
      console.log (false);
    }
  }
  console.log(true)
}
todosIguales(arreglo)

*/




// Ejercicio 12 *****************
/*
array = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero", "Agosto", "Septiembre"]
// array = ["Diciembre", "Abril", "Junio", "Julio","Mayo", "Febrero", "Agosto", "Septiembre"]

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let meses = [];
  for (let i = 0; i < array.length; i++) {
       if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre" ) {
       meses.push(array[i]);
       }
    }
    if (meses.length < 3 ){
      console.log ("No se encontraron los meses pedidos")
    } else {
      console.log (meses);
    }

}

mesesDelAño(array)
*/



// Ejercicio 13 *****************

/*
array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      newArray.push(array[i])
    }
  }
console.log (newArray)
}

mayorACien(array)
*/


// Ejercicio 14 *****************

numero = 52;

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let newArray = [];
  for (let i = 0; i < 10; i++) {
    numero += 2;
    if(numero === i){
      return "Se interrumpió la ejecución"
    }
    newArray.push(numero)
  }

  console.log (newArray)
}

breakStatement(numero)