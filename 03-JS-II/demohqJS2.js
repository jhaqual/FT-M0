// ---- For -----

/*
if(condición)
{
    Código a ejecutarse
    si la condición se cumple
}
*/

/*    ***** NOTA IMPORTANTE *****
Si no proporcionamos las llaves "{“ y "}” después del if (condición, entonces, de forma predeterminada, la condición if considerará únicamente la siguiente declaración inmediata. Por ejemplo:


if(condition)
    declaración1;
    declaración2;

Aquí si la condición if es verdadera considerará solo la declaración1
*/

/* EJEMPLO  FOR

for (var i = 0; i <= 500; i++) {
    if (i === 100)
        console.log("Vamos por el ", i);
    else if (i === 200)
        console.log("Vamos por el ", i);
    else if (i === 250)
        console.log("La mitad es el numero ", i);
    else if (i === 300)
        console.log("Vamos por el ", i);
    else if (i === 400)
        console.log("Vamos por el ", i);
    else if (i === 500)
        console.log("Es el número final ", i);
    else if (i < 250)
        console.log("Número menor a 250", i);
    else console.log("Número mayor a 250", i);
}
*/


// ---- While -----

/*
while (condición)
    {
        Instrucciones a ejecutar; //true
        Incrementa/decrementa ;
    }
*/

/* ---- Do While -----

do
sentencia
while (condición);

*/


// --- Switch ----

/*
switch (expresión) {
    case valor1:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      [break;]
    case valor2:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      [break;]
    ...
    case valorN:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      [break;]
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      [break;]

*/


// EJEMPLO  FOR

/*
expr = "Mangos"

switch (expr) {
    case 'Naranjas':
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzanas':
      console.log('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 'Platanos':
      console.log('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cerezas':
      console.log('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Mangos':
    case 'Papayas':
      console.log('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  
  console.log("¿Hay algo más que quisiera consultar?");
  */


// Ejercicios de prueba
// num1 = "n"
// num2 = "m"
// num3 = 9


// if (num1 < 0 || num2 < 0 || num3 < 0) {
//   console.log ("Hay negativos");
// }
// else if (num1 === 0 || num2 === 0 || num3 === 0){
//   console.log ("Error");
// }
// else if (num1 > 0 && num1 > num2 && num3){
//   console.log ("Número 1 es mayor y positivo");
// }
// else if (num3 > num2 && num1) {
//   console.log (++num3);
// }
// else {
//   console.log (false)
// }


// Ejercicio # 2

// numero = 1


//   if (numero == 0 || numero == 1 || numero == 4) return false;
// 	for (let x = 2; x < numero / 2; x++) {
  // 		if (numero % x == 0) return "false";
  // 	}
  // 	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
  // 	return true;
  
  
// Ejercicio # 3

// numero = 5234
// numero = numero.toString()

// if (numero.length === 3){
//   console.log (typeof numero)
// } else {
//   console.log (false)

// }

// for (let i=0; i < numero.length; i++){
//   if (numero.length === 3){
//   console.log (typeof numero)
//   }
// //   if(numero.toString().length; === 3){
// //   console.log ("Tengo 3 digitos");
// //  }
// }
// return false;

// for (let i=0; i < numero; i++){
//   numero.toString().length;
//   if(numero.toString().length; === 3){
//   console.log ("Tengo 3 digitos");
//  }
// }
// return false;

// for (let i=0; i < numero; i++){
//   numero.toString().length;
//   if(numero.length === 3){
//   console.log (true);
//  }
// }
// return false;



// Ejercicio # 4

numero = 1


do {
  numero += 1;
  console.log (numero + 5);
  
}while (numero < 9);