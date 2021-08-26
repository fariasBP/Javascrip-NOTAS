/* OBJETO STRING - CADENA DE TEXTO
    Un objeto que representa una serie de caracteres dentro de una cadena.
    TEMAS:
        - Instanciacion de un String
        - Concatenacion e Interpolacion
    NUEVO:
        - `data ${<any data>} data` >>> para interpolacion
*/

// Instanciacion:
    var mi_texto = 'Este es mi texto';
    var mi_texto2 = new String('Este es mi segundo texto');
    console.log(mi_texto + ' -> ' + typeof(mi_texto));
    console.log(mi_texto2 + ' -> ' + typeof(mi_texto2));

// Concatenacion e Interpolacion:
    var txt1 = 'Hola a todos';
    var txt2 = 'Franco';

    console.log(txt1 + ' mi nombre es ' + txt2);
    console.log(`${txt1} mi nombre es ${txt2}`);
// propiedades del objeto String
    // length devuele la longitud de una cadena
    console.log(`La longitud de txt2 es ${txt2.length}`);
