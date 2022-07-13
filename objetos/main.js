// Sintaxis de un objeto literal
let mascota = {
  nombre: "Scott",
  tipo: "canino",
  edad: 5,
  macho:true,
  colores: ['rojo', 'blanco']
}

// console.log(mascota['colores'][1])

// for(let i=0; i < mascota.colores.length; i++) {
//   console.log(mascota.colores[i])
// }

// Acceder a una propiedad del objeto mas
// console.log(mascota.tipo) //canino
// console.log(mascota['edad'])

// Modificar una propiedad del objeto
// mascota.tipo = "gato"
// mascota['edad'] = 7

// console.log(mascota.tipo)
// console.log(mascota['edad'])

// Como eliminar una propiedad
// delete mascota.tipo
// delete mascota['edad']
// console.log(mascota.tipo)

let { nombre:nuevoNombre , colores } = mascota

nuevoNombre = "Wally"

console.log(mascota.nombre)
