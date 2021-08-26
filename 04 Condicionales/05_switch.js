/* SWITCH
	La declaración switch evalúa una expresión, comparando el valor de esa
	expresión con una instancia case, y ejecuta declaraciones asociadas a ese
	case, así como las declaraciones en los case que siguen.

	SINTAXIS: 
		switch (expresión) {
		  case valor1:
		    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
		    [break;]
		  case valor2:
		    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
		    [break;]
		  ...
		  case valorN:
		    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
		    [break;]
		  default:
		    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
		    [break;] (NO ES NECESARIO EL BREACK DEL DEFAULT)
		}
*/
// EJMPLO 1 - BASICO
	switch (expr) {
	  case 'Naranjas':
	    console.log('El kilogramo de naranjas cuesta $0.59.');
	    break;
	  case 'Manzanas':
	    console.log('El kilogramo de manzanas cuesta $0.32.');
	    break;
	  case 'Platanos':
	    console.log('El kilogramo de platanos cuesta $0.48.');
	    break;
	  case 'Cerezas':
	    console.log('El kilogramo de cerezas cuesta $3.00.');
	    break;
	  case 'Mangos':
	  case 'Papayas':
	    console.log('El kilogramo de mangos y papayas cuesta $2.79.');
	    break;
	  default:
	    console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
	}

	console.log("¿Hay algo más que te quisiera consultar?");