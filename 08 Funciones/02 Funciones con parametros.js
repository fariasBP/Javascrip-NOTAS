/* FUNCIONES CON PARAMETROS

*/
// EJEMPLO 1
  var Actor1 = 'Jose',
      Actor2 = 'Alex';
  function hablar(actor, dialogo) {
    console.log(actor, ':', dialogo)
  }
  hablar(Actor1, `Hola ${Actor2}`)
  hablar(Actor2, `Hola ${Actor1} como estas`)
  hablar(Actor1, 'Bien gracia, y tu ¿Como estas?')
  hablar(Actor2, 'Estoy bien, bien hasta luego')
  hablar(Actor1, 'Si adios')

// EJEMPLO 2
  function suma(numero1, numero2) {
    console.log(numero1 + numero2)
  }
  suma(1, 2)
  suma(1, 5)