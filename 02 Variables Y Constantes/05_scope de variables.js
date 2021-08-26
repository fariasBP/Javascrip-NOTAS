/* SCOPE DE LA VARIABLE
	es el alcance que tiene una variable
*/



// DIFERENCIA ENTRE VAR Y LET
	// scope con var
		var alumno = 'Fernando';

		if (alumno) {
			var alumno = 'Gabriel'
			console.log('dentro del if: ', alumno)
		}

		console.log('fuera del if: ', alumno)

		/* SALIDA DE LA CONSOLA:
			dentro del if: Gabriel
			fuera del if: Gabriel
		*/

	// scope con let
		let alumna = 'Lili';

		if (alumna) {
			let alumna = 'Alex';
			console.log('dentro del if: ', alumna)
		}

		console.log('fuera del if: ', alumna)

		/* SALIDA DE LA CONSOLA
			dentro del if: Alex
			fuera del if: Lili
		*/
