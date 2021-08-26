/* CONSTANTES
	En programación, una constante es un valor que no puede ser alterado/modificado durante la ejecución de un programa, únicamente puede ser leído
	NOTACIÓN:
		- const (<any valor>) ---> para crear una constante
*/


// CREACION Y USO DE UNA CONSTANTE
    // instanciacion y asignacion (a diferencia de las variables esta si o si se debe instaciar y crear al mismo tiempo)
    const hola = "Hola!!!";
    // Uso de la variable (en este caso devolviendo por consola)
    console.log(hola);

// ESTO NO SE PUEDE (mandara un error)
    // instanciacion
    const adios;
    // asignacion
    adios = "adios!!!";
    // Uso de la variable (en este caso devolviendo por consola)
    console.log(adios);
    // cambiar ('Variar') el valor de dicha variable
    adios = "Que tal";
    // Usar otra ves la variable (en este caso devolviendo por consola)
    console.log(adios);