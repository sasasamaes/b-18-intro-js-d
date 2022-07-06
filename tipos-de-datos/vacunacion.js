// Persona mayores a 18 que residen en municipio fronterizo del norte del pais

// Embarazadas mayores de 18 anis con mas de 9 semanas de gestacion

// Personas que cumplen 30 anios o mas en este anio

// var edad = 15;
var zona = prompt('Vives en la frontera? //Responde true o false');
var embarazada = prompt('Estas embarazada? //Responde true o false');
var semanasGestacion = prompt('¿Cuantas semanas tienes de gestacion? //Responde con un numero');
var nacimiento = prompt('¿En que anio naciste? //Responde con un numero');
var anio = prompt('¿En que anio estamos? //Responde con un numero');

var edad = parseInt(anio) - parseInt(nacimiento) ;

if(edad > 18 && zona == 'true'){
  console.log("Se puede vacunar 👨🏾‍🔬")
} else if (edad > 18 && embarazada =='true' && semanasGestacion >= 9){
  console.log("Se puede vacunar 🤱🏽")
} else if(edad >= 30){
  console.log("Se puede vacunar 🤷🏽‍♂️")
} else {
  console.log("No se puede vacunar 🤷🏽‍♂️")
}



