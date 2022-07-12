// Receta para crear una funcion

// Declarar mi funcion
// Indicar dentro de las llaves las indiciaciones
// LLamar a nuestra funcion
// function resta (num1,num2) {
//   var total = num1 - num2;
//   return 'La resta de ' + num1 + " - " + num2 + " es: "+ total;
// }

// console.log(resta(65, 3))


// Funciones anidadas
// Una funcion puede llamar a otra funcion

// function ObtenerMarcador (golesPartido1, golesPartido2) {
//   var partido1 = golesPartido1;
//   var partido2 = golesPartido2;

//   function Agregar() {
//     var nombre = "Juanito el goleador";
//     var sumaGoles = partido1 + partido2;
//     var texto = nombre + " anoto " + sumaGoles + " goles";
//     return texto;
//   }

//   return Agregar()
// }

// var resultado = ObtenerMarcador(5,2)

// console.log(resultado)

// Funciones Puras

// function sumaUnoAlNumero (numero) {
//   return numero + 1;
// }

// Funciones Impuras
// function sumaNumeroRandom(numero) {
//   return numero + Math.random();
// }

// console.log(sumaUnoAlNumero(4))
// console.log(sumaNumeroRandom(4))

// Ambito o Scope Global


var nombre = "Juanito Bananas"

function MayorEdad(){
  // Scope Local
  var edad = 19;
  if(edad >= 18){
    return nombre + " es mayor de edad";
  } else if(edad < 18){
    return nombre + " es menor de edad";
  }
}



