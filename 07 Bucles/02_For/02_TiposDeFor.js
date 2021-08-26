/* TIPOS DE FOR
    Veremos los tipos de for que existen
    TEMAS:
        -   for([expresion inicial], [condicion], [operador incremento|decremento]){
                #codigo a ejecutar hasta que la condicion se falsa (false)
            }
        -   for(<any variable_llave> in <obj|Array objeto>) {
                #codigo a ejecutar segun los elemento del objeto
            }
        -   for(<any variable_llave> of <obj|Array objeto>) {
                #codigo a ejecutar segun los elementos del objeto
            }
        -   obj|Array.forEach([callback])
                                l>  <any variable_llave> => {
                                        #codigo a ejecutar
                                    }  
*/
// for
console.log('\nBUCLE FOR');
    var amigos = ['Brian', 'Bernardo', 'Bladimir'];
    for (let i = 0; i < amigos.length; i++) {
        console.log(amigos[i]);
    }
// for in
console.log('\nBUCLE FOR IN');
    var profesores = {
        matematica : 'Jose',
        quimica : 'Antonio',
        fisica : 'Amanda'
    }
    for (let key in profesores) {
        console.log(`${key} es de : ${profesores[key]}`);
    }
// for of 
console.log('\nBUCLE FOR OF');
    for (let key of amigos) {
        console.log(key);
    }
// forEach
console.log('\nBUCLE FOREACH');
    amigos.forEach(key => {
        console.log(key);
    })