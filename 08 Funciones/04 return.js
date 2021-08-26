/* RETURN
  La sentencia return finaliza la ejecución de la función y especifica
  un valor para ser devuelto a quien llama a la función.
*/

// USOS
  // para devolver algun valor
    function suma(num1, num2) {
      return num1 + num2;
    }
    var resultado = suma(2, 5)
    console.log(resultado)
  
  // para finalizar la ejecucion de una funcion
    function mayorDeEdad(edad) {
      
      if (edad < 18) {
        console.log('soy menor de edad')
        return;
      }

      console.log('soy mayor de edad')
    }
    mayorDeEdad(10)
    // mayorDeEdad(20)