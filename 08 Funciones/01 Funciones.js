/* FUNCIONES
	Es un conjunto de instrucciones que se  puede invocar a traves de un
  nombre clave, su mayor uso es para evitar duplicidad en el codigo
  


*/
// EJEMPLO 1
/* usaremos funciones para ejecutar instrucciones cada ves que deseemos
sin volver a crear desde cero esas instrucciones */
console.log('EJEMPLO 1')
  function saludar() {
    var saludo = 'hola'
    console.log(saludo)
  }

  saludar()  // es como si aqui escribimos 2 lineas de codigo
  saludar()  // es como si aqui escribimos 2 lineas de codigo
  saludar() // es como si aqui escribimos 2 lineas de codigo

// EJEMPLO 2
  // Codigo sin funciones
  
    var Actor1 = 'Jose',
        Actor2 = 'Alex';

    console.log('-----------------------------------------------')
    console.log(Actor1, ':', `Hola ${Actor2}`)
    console.log('-----------------------------------------------')
    console.log(Actor2, ':', `Hola ${Actor1} como estas`)
    console.log('-----------------------------------------------')
    console.log(Actor1, ':', 'Bien gracia, y tu ¿Como estas?')
    console.log('-----------------------------------------------')
    console.log(Actor2, ':', 'Estoy bien, bien hasta luego')
    console.log('-----------------------------------------------')
    console.log(Actor1, ':', 'Si adios')
    console.log('-----------------------------------------------')

  // Codigo con funciones - Evitando duplicidad de codigo con funciones
  /* Observamos que usamos demasiado el codigo "console.log('-------')"
  entonces usamos funciones para evitar su duplicidad y asi tener
  un codigo mas facil de leer */

    var Actor1 = 'Jose',
    Actor2 = 'Alex';

    function separacion() {
      console.log('-----------------------------------------------')
    }

    separacion()
    console.log(Actor1, ':', `Hola ${Actor2}`)
    separacion()
    console.log(Actor2, ':', `Hola ${Actor1} como estas`)
    separacion()
    console.log(Actor1, ':', 'Bien gracia, y tu ¿Como estas?')
    separacion()
    console.log(Actor2, ':', 'Estoy bien, bien hasta luego')
    separacion()
    console.log(Actor1, ':', 'Si adios')
    separacion()
