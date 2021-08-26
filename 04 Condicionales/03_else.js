/* ELSE
	instruccion que acompana a la instruccion if, y este se ejecuta se la condicion del if es falsa
	TEMAS:
		- if-else
	FORMA DE ESCRITURA:
		if ([condicion]) {
			#instrucciones a ejecutar si la condicion es verdadera (true)
		} else {
			#instrucciones a ejecutar si la condicion es falsa (false)
		}
*/
var nota = 79;
var nota2 = 40;
if (nota > 51) { // rendering: Evaluando 'SI' el valor de nota es mayor a 51
    console.log("Has Aprobado");
} else { // rendering: De otro modo || Si no es asi
    console.log("Has Reprobado");
}

if (nota2 > 51) { // rendering: Evaluando 'SI' el valor de nota2 es mayor a 51
    console.log("Has Aprobado");
} else { // rendering: De otro modo || Si no es asi
    console.log("Has Reprobado");
}