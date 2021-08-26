/* OPERADORES DE INCREMENTO PRO-POST, DECREMENTO PRE-POST
	Son aquellos operadores que aumentan o disminuye el valor
	TEMAS:
		- ++ ---> incremento
		- -- ---> decremento
*/

var mi_numero

// Incremento
	// Pre incremento - incrementa en una unidad (el efecto se vera inmediato)
        mi_numero = 14;
        console.log(++mi_numero); // print: 15

    // Post incremento - incrementa en una unidad (el efecto se vera a la accion siguiente)
        mi_numero = 14;
        console.log(mi_numero++); // print: 14
        console.log('->'+mi_numero); // print: '->15'

// Decremento
    // Pre Decremento - decrementa en una unidad (el efecto es inmediato)
        mi_numero = 18;
        console.log(--mi_numero); // print: 17

    // Post Decremento - decrementa una una unidad (el efecto se vera a la accion siguiente)
        mi_numero = 18;
        console.log(mi_numero--); // print: 18
        console.log('->'+mi_numero); // print: '->17'
