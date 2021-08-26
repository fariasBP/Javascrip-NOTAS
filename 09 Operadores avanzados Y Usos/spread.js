/* OPERADOR SPREAD
	obtiene todos lo items de un array u objeto
*/
// USO DE REST - EJEMPLO BASICO
	// sin spread
	let ingredientes1 = ['pollo', 'pescado', 'arroz']
	console.log(ingredientes1[0], ingredientes1[1], ingredientes1[2])
	/* output: pollo pescado arroz */

	// con spread
	let ingredientes2 = ['pollo', 'pescado', 'arroz']
	console.log(...ingredientes2)
	/* output: pollo pescado arroz */

// EJEMPLO 2 - uniendo dos arrays
	let amigosHombres = ['Martin', 'Alex', 'Jose']
	let amigosMujeres = ['Estela', 'Laura', 'Avril']

	let amigosTotal = [...amigosMujeres, ...amigosHombres]
	console.log(amigosTotal)

// EJEMPLO 3 - actualizando datos
	// sin spread operator
		let datos = {
			dato1: 'contenido1',
			dato2: 'contenido2',
			dato3: 'contenido3'
		}
		console.log(datos)
		/*output: {dato1:'contenido1', dato2:'contenido2',dato3:'contenido3'}*/
		datos = {
			dato1: 'contenido1',
			dato2: 'contenido2',
			dato3: 'contenido3 actualizado' 
		}
		console.log(datos)
		/* output: {dato1:'contenido1', dato2:'contenido2',dato3:'contenido3 actualizado'} */
		
	// con spread operator
		let datos2 = {
			dato1: 'contenido1',
			dato2: 'contenido2',
			dato3: 'contenido3'
		}
		console.log(datos2)
		/* output: {dato1:'contenido1', dato2:'contenido2',dato3:'contenido3'} */
		datos2 = {
			...datos2,
			dato3: 'contenido3 actualizado' 
		}
		console.log(datos2)
		/* output: {dato1:'contenido1', dato2:'contenido2',dato3:'contenido3 actualizado'} */