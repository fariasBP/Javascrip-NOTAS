/* OR vs Switch
	- OR es un operador logico que devuelve el valor verdadero mas proximo
		
		V o F = V
		F o V = V
		V o V = V
		F o V = F

		o tambien:

		DEFINED || UNDEFINED = DEFINED
		UNDEFINED || DEFINED = DEFINED
		DEFINED || DEFINED = DEFINED (el primer defined)
		UNDEFINDE || UNDEFINED = UNDEFINED
		
		donde definde es un valor definido
		
	este comportamiento puede ayudar para crear un pequeño codigo que tenga
	un funcionamiento similar a un switch
		
*/

// EJEMPLO 1 
	// con switch
		const numero = 3;
		let val;

		switch (numero) {
		  case 1:
		    val = 'uno';
		    break;
		  case 2:
		    val = 'dos';
		    break;
		  case 3:
		    val = 'tres';
		    break;
		  default:
		    val = 'cero';
		}

		console.log(val)

	// con OR
		const numero=5;
		const val = {
		  1: 'uno',
		  2: 'dos',
		  3: 'tres'
		}
		const defaultNumero = 'cero'

		console.log(val[numero] || defaultNumero);

// EJEMPLO 2
	// con Switch
		const español = 'saltar';
		let ingles;

		switch (español) {
		  case 'jugar':
		    ingles = 'play';
		    break;
		  case 'saltar':
		    ingles = 'jump';
		    break;
		  case 'caminar':
		    ingles = 'walk';
		    break;
		  default:
		    ingles = 'no traducido';
		}

		console.log(ingles)

	// con OR
		const español = 'saltar'
		const ingles = {
		  jugar: 'play',
		  saltar: 'juamp',
		  caminar: 'walk',
		}
		const defaultIngles = 'no traducido';

		console.log(ingles[español] || defaultIngles)