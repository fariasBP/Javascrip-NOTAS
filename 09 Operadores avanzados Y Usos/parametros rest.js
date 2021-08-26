/* PARAMETRO REST*/

// USO DE REST - EJEMPLO BASICO
// ejemplo sin parametros rest
function materiasSinRest(materia1, materia2, materia3, materia4, materia5) {
	console.log(materia1)
	console.log(materia2)
	console.log(materia3)
	console.log(materia4)
	console.log(materia5)
}
// con parametros rest
function materiasConRest(...materias) {
	console.log(materias)
}

materiasSinRest()
materiasConRest()
