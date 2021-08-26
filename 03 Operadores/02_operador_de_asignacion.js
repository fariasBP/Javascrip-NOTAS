/* OPERADORES DE ASIGNACION
	Son aquellos operadores que asignan valores
	TEMAS:
		- = ---> Asignacion 
		- += ---> Asignacion mas o cacantenacion
		- -= ---> Asignacion menos
		- *= ---> Asignacion por
		- /= ---> Asignacion dividido
		- %= ---> Asignacion de resto
*/

// Asignacion
	// - asigna un valor
	var mi_numero = 10;
    console.log(mi_numero); // out: 10
    // - asigna un valor
    var mi_texto = "hola";
    console.log(mi_texto); // out: 'hola'
    
// Asignacion mas
	// - aumenta su valor
	mi_numero += 5;
    console.log(mi_numero); // out: 15
    // - cocatena valores si es de tipo STring
    mi_texto += " a todos";
    console.log(mi_texto); // out: 'hola a todos'
    
// Asignacion menos
	// - disminuye su valor
	mi_numero -= 3;
    console.log(mi_numero); // out: 12
    mi_texto -= "la";
    console.log(mi_texto); // out: NaN

// Asignacion por
	// - multiplica su valor
	mi_numero *= 2;
	console.log(mi_numero); // out: 24

// Asignacion dividido
	// - divide su valor
	mi_numero /= 4;
	console.log(mi_numero); // out: 6

// Asigancion de Resto
	// - Halla el resto de una division
	mi_numero %= 4;
	console.log(mi_numero); // out: 2