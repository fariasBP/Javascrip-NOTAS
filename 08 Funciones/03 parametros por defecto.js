/* PARAMETROS POR DEFECTO 

*/
// EJEMPLO
  function estudio(estudiante, carrera) {
    console.log('El estudiante', estudiante, 'esta estudiando', carrera)
  }
  estudio('Alex el león', 'Gastronomia')

  /* pero ¿que sucede si no enviamos parametros? */

  estudio() // en consola: El estudiante undefined esta estudiando undefined

  /* da un resultado no deseado, entoces se usara parametros por defecto
  para que el resultado sea mejor */

  function estudioDefault(estudiante='Anonimo', carrera='una carrera desconocida') {
    console.log('El estudiante', estudiante, 'esta estudiando', carrera)
  }
  estudioDefault('Gloria', 'Ingenieria Quimica') // en consola: El estudiante Gloria esta estudiando Ingenieria Quimica
  estudioDefault() // en consola: El estudiante Anonimo esta estudiando una carrera desconocida