/* ELSE IF
	condicional que fusiona if y else. Asi extendiendo la funcionalidad if
	TEMAS:
		- else if
	FORMA DE ESCRITURA:
		if ([condicion1]) {
			#instruccion si la condicion1 es cierta
		} else if([condicion2]) {
			#instruccion si la condicion2 es cierta
		} else if([condicion3]) {
			#instruccion si la condicion3 es cierta
		}
*/

var edad_de_Mario = 43;
var edad_de_Luigi = 17;

if (edad_de_Mario >= 15 && edad_de_Mario < 27) { // rendering: Evaluando 'SI' el valor de 'edad_de_mario' es 'MAYOR O IGUAL' que  15 'Y' 'edad_de_mario' es 'MENOR' que 27
	console.log("Es Adolescente");
} else if (edad_de_Mario >=27) { // rendering: 'DE OTRO MODO SI' el valor de 'edad_de_mario' es 'MAYOR O IGUAL' que 27
	console.log("Es Adulto");
} else if (edad_de_Mario <=14) { // rendering: 'DE OTRO MODO SI' el valor de 'edad_de_mario' es 'MENOR O IGUAL' que 14
	console.log("Es un nino");
}

if (nota_de_Luigi >= 15 && nota_de_Luigi < 27) { // rendering: Evaluando 'SI' el valor de 'edad_de_mario' es 'MAYOR O IGUAL' que  15 'Y' 'edad_de_mario' es 'MENOR' que 27
	console.log("Es Adolescente");
} else if (edad_de_Luigi >=27) {
	console.log("Es Adulto");
} else {
	console.log("Es un nino");
}