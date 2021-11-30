// Creamos la plantilla o clase
function EstudianteHenry(nombre, apellido){
    this.firstName = nombre || "nombre no enviado",
    this.lastName = apellido || "apellido no enviado",
    this.esEstudiante = true,
    this.materias = ["HTML", "CSS", "GIT", "JavaScript"]
}

// Agregamos la funcionnalidad "presentarHenryChallenge"
EstudianteHenry.prototype.presentarHenryChallenge = function (){
    return console.log ("El estudiante " + this.firstName + " " + this.lastName + " presentó el Henry Challenge" )
}

// Creamos nuevos objetos (hacemos uso de la palabra "new")
let estudiante1 = new EstudianteHenry("Harrinson", "Quintero");
let estudiante2 = new EstudianteHenry("Nohely", "Bermudez");

// llamando los nuevos objetos
estudiante1
estudiante2


estudiante1.presentarHenryChallenge()
estudiante2.presentarHenryChallenge()

// ------------------- ** --------------

// A partir de ECMASCRIPT 6

class EstudianteHenry2{
    constructor(nombre, apellido){
        this.firstName = nombre || "nombre no enviado",
        this.lastName = apellido || "apellido no enviado",
        this.esEstudiante = true,
        this.materias = ["HTML", "CSS", "GIT", "JavaScript"]
    }

    presentarHenryChallenge2(){
        return console.log ("El estudiante " + this.firstName + " " + this.lastName + " presentó el Henry Challenge" )
    }

}

let estudiante3 = new EstudianteHenry2("Jesús", "Diaz");
let estudiante4 = new EstudianteHenry2("Maria", "Tovar");

estudiante3.presentarHenryChallenge2()
estudiante4.presentarHenryChallenge2()


// Herencia de clases "extends"

class EstudianteGraduado extends EstudianteHenry2 {
    constructor(nombre, apellido,esEstudiante, materias){
        super(nombre, apellido,esEstudiante, materias)
        this.esGraduado = true;
    }
}

let EstudianteGraduado1 = new EstudianteGraduado("Wilkerman", "Caltel")

console.log(EstudianteGraduado1)