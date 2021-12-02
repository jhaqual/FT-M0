// Callbacks

/**
function holaUsuario(usuario){
    return console.log("Hola " + usuario + "!");
}

function adiosUsuario(usuario){
    return console.log("Adiós " + usuario + "!");
}


function saludoUsuario(usuario, callback){
    return callback(usuario);
}

// Comprobando las 2 primeras funciones
holaUsuario("Harrinson")
adiosUsuario("Harrinson")

// Ejecutando el callback
saludoUsuario("Luis", holaUsuario);
saludoUsuario("Pedro", adiosUsuario);

*/


// Método para arreglos con callbacks

var alumnos = ["Leo", "Harry", "Nohe", "Libia", "Humber", "Darwin"];
var edades = [15, 25, 60, 34, 78, 41];

function verAlumnos(alumno){
    console.log("Hola " + alumno)
}



// Método forEach
alumnos.forEach(
    function(elemento, i){
    return console.log("Hola desde el forEach " + elemento + " " + i)
});


// Método map => Nota: El map retorna un nuevo arreglo
var resultadoMap = alumnos.map(function(alumno, i){
    return console.log ("Hola desde map " + alumno + " " + i)
})

// Método reduce => Reduce los valores que encuentre en un solo valor
// Nota: Si no tiene un valor inicial comienza a reducir desde el primer elemento del array
var resultadoReduce = edades.reduce(function(acumulador, item, i){
    acumulador = acumulador + item
    return acumulador
})

console.log(resultadoReduce);