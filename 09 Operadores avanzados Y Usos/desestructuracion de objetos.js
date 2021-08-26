/* DESESTRUTURACION DE OBJETOS */

// EJEMPLO 1 - uso general
	let persona = {
		nombre: 'Gabriel',
		genero: 'hombre',
		edad: 25
	}
	//con desustructuracion
	let nombre = persona.nombre
	let genero = persona.genero
	let edad = persona.edad
	console.log(nombre, genero, edad)

	// sin desustructuracion
	let { nombre, genero, edad } = persona
	console.log( nombre, genero, edad)

// EJEMPLO 2 - desestructuracion en los parametros de una funcion
	let usuario = {
		nombre: 'Alejandro',
		contrasena: '0000'
	}
	// sin desestructuracion
	function imprimirPersona(user) {
		const nombre = user.nombre
		const contrasena = user.contrasena
		console.log(nombre, contrasena)
	}
	imprimirPersona(usuario)

	// con desestructuracion
	function imprimirPersona(user) {
		const { nombre, contrasena } = user
		console.log(nombre, contrasena)
	}
	imprimirPersona(usuario)

	// con desestructuracion (codigo optimizado)
	function imprimirPersona({ nombre, contrasena }) {
		console.log(nombre, contrasena)
	}
	imprimirPersona(usuario)

// EJEMPLO 3 - desestructuracion anidada
	const programador = {
		nombre: 'Raul',
		edad: 28,
		proyectos: {
			frontend: 4,
			backend: 7
		}
	}
	const { nombre, edad, proyectos:{ frontend, backend} } = programador
	//console.log(nombre, edad, proyectos, frontend, backend) // output: error 'proyectos' no es definido
	console.log(nombre, edad, frontend, backend)
