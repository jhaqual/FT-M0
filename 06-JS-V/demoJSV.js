/** 
function crearUsuario() {
    // Crea una Clase de ES6 o una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:

    class Usuario {
        constructor(opciones) {
            this.usuario: opciones.usuario,
                this.nombre:opciones.nombre,
                this.email:opciones.email,
                this.password:opciones.password
        }

        saludar(){
          return  "Hola, mi nombre es " + this.nombre
        }
    }

    return Usuario;

}
*/




/**
function agregarMetodoPrototype(Constructor) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:
  
    Constructor.prototype.saludar = function (){
      return "Hello World!"
  }
  }

*/


/** 
function agregarStringInvertida(palabra) {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'toni'.reverse() => 'inot'
    // Pista: Necesitarás usar "this" dentro de "reverse"


     console.log(palabra.split("").reverse().join(""));

  }

  agregarStringInvertida("noble")
  agregarStringInvertida("paragaricutirimicuarito")
  agregarStringInvertida(" Este es un texto secreto")


   function reverse(s){
     return s.split("").reverse().join("");
 }

 var palabra = reverse("perro")
 console.log(palabra)

*/


// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//   Ej: { 
//       nombre: 'Juan',
//       apellido: 'Perez',
//       edad: 22,
//       domicilio: 'Saavedra 123'
//      }

    class Persona {
        constructor(nombre, apellido, edad, domicilio) {
            this.nombre = nombre,
                this.apellido = apellido,
                this.edad = edad,
                this.domicilio = domicilio
        }

        detalle() {
            return {
                nombre: this.nombre,
                apellido: this.apellido,
                edad: this.edad,
                domicilio: this.domicilio
            }
        }
    }

    function crearInstanciaPersona(nombre, apellido, edad, dir) {
        //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
        //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
        //Devolver la nueva persona creada
        let newPersona = new Persona(nombre, apellido, edad, dir);
        return (newPersona);
      
      }

      crearInstanciaPersona("Juan", "Perez", 22, "Saavedra 123");


      function agregarMetodo() {
        //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
        //Ej: "Juan, 22 años"
      

        Persona.prototype.datos = function() {
            console.log(this.nombre + ", " + this.edad + " años");
        }
      }

      agregarMetodo();