/* TIPOS DE WHILE
    Veremos los tipos de for que existen
    TEMAS:
        - while
        - dowhile
    NOTACION:
        -  while ([condicion]) {
                // codigo a ejecutar
            }
        -   do {
                // condigo a ejecutar
            } while ([condicion])
*/
// BUCLE WHILE
console.log("BUCLE WHILE")
    var contador = 0;
    console.log("\tentrando al bucle while");
    while (contador < 3) { // El codigo se ejecuta mientras la condicion sea cierta
        console.log(`\tContador en: ${contador}`);
        contador++;
    }
    console.log("\tsaliendo del bucle while");

// BUCLE DO WHILE
console.log("BUCLE DO-WHILE")

    console.log("\tEJEMPLO 1")
    var contador1 = 0;
    console.log("\tentrando al bucle do-while");
    do { // El codigo se ejecuta al menos una vez
        console.log(`\tContador1 en: ${contador1}`);
        contador1++;
    } while (contador1 < 3)
    console.log("\tsaliendo del bucle do-while");

    console.log("\tEJEMPLO 2")
    var contador2 = 0;
    console.log("\tentrando al bucle do-while");
    do { // El codigo se ejecuta al menos una vez
        console.log(`\tContador2 en: ${contador2}`);
        contador2++;
    } while (contador2 > 3)
    console.log("\tsaliendo del bucle do-while");