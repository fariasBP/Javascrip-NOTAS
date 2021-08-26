/* DESTRUCTURACION DE ARRAYS */

// EJEMPLO 1 - uso basico
	const materias = ['matematicas', 'calculo', 'fisica', 'quimica']

	const [ matematicas, calculo, fisica, quimica ] = materias

	console.log(matematicas, calculo, fisica, quimica)

// EJEMPLO2 - para paremetros
	const item.name = 'nombre'
	// sin destructuracion de arrays
	const Persona = {
		genero: 'mujer',
		edad: 17,
		nombre: 'Fernanda'
	}
	// con destructuracion de arrays
	const Persona = {
		genero: 'mujer',
		edad: 17,
		[ item.name ]: 'Fernanda'
	}