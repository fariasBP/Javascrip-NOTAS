/*
Son espacios reservados en la memoria que, como su nombre indica, pueden 'cambiar' o 'variar' de contenido a lo largo de la ejecución de un programa.
Entonces se puede decir que es similar a var, pero tiene una diferencia y es el alcance de su scope.
*/

// Creacion y Uso de un Variable Let
    // instanciacion
    let hola;
    // asignacion
    hola = "Hola!!!";
    // Uso de la variable (en este caso devolviendo por consola)
    console.log(hola);
    // cambiar ('Variar') el valor de dicha variable
    hola = "Que tal";
    // Usar otra ves la variable (en este caso devolviendo por consola)
    console.log(hola);

// Se puede instanciar y asignar al mismo tiempo
    let miVariable = "Que tal";
    console.log(miVariable);

// Diferencia con var
	// su diferencia es el scope que se vera en el siguiente