// objetos

let harrinson = {
    nombre: "Harrinson",
    apellido: "Quintero",
    cedula: 12345678,
    pais: "Venezuela",
    metodo: function(){
        return ("Esto es una función")
    },
    hobbies: ["jugar", "estudiar", "conversar", "ver series"]
}

console.log (harrinson)


// bracket notation - va con string dentro de los corchetes
console.log ( harrinson ["cedula"] )


// dot notation - solo se coloca el nombre de la propiedad que se esta buscando
console.log ( harrinson.cedula )


// obtener las propiedades del objeto
console.log(Object.keys(harrinson))


// Si conozco el nombre de la propiedad uso Dot notation
// Sí NO conozco el nombre de la propiedad Bracket notation


// Para recorrer un objeto usamos for in
for (let propiedad in harrinson) {
    console.log(propiedad)
    console.log(harrinson[propiedad])
}

// como invocar una función ( que en estos caso se denomina metodo) de un objeto

// Forma incorrecta ❌
console.log(harrinson.metodo)

// Forma correcta ✅
console.log(harrinson.metodo())


// ****************
console.log(harrinson.hobbies)



// Ejercicio 1
let alumnos = [{
        nombre: "Emi",
        edad: 23,
        hobbies: ["correr", "dormir", "nadar"],
        amigos: [{
                nombre: "Martin",
                familia: [{
                    nombre: "familia 1"
                }]
            },
            {
                nombre: "Leo",
                familia: [{
                    nombre: "familia 2"
                }]
            }
        ],
    }, {
        nombre: "Franco",
        edad: 21,
        hobbies: ["futbol", "golf"],
        amigos: [{
                nombre: "Emi",
                familia: [{
                    nombre: "familia 3"
                }]
            },
            {
                nombre: "Jimmy",
                familia: [{
                    nombre: "familia 4"
                }]
            },
            {
                nombre: "Matias",
                familia: [{
                    nombre: "familia 5"
                }]
            }
        ],
    },

];

console.log(alumnos[1].amigos[0].familia[0].nombre)


// Ejercicio 2

function saludarPersona() {
    console.log ("Hola, " + this.nombre + " " + this.apellido);
}

let persona1 = {
    nombre: "Nohely",
    apellido:"Bermudez",
    saludar: saludarPersona
    // Podemos agregar una función que invoque el objeto
};

let persona2 = {
    nombre: "Maria",
    saludar: function() {
        console.log ("Hola, " + this.nombre);
        // la palabra this hace referencia al propio objeto
    }
};

persona1.saludar()
persona2.saludar()

