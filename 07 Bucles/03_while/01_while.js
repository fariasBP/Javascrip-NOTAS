/* WHILE
    crea un bucle en donde repite el codige hasta que la condicion se falsa
    TEMAS:
        - while
    FORMA:
        while([condicion]) {
            #codigo a ejecutar si la condicion es true
        }
*/

// EJEMPLO DEL BUCLE WHILE
console.log("EJEMMPLO DE BUCLE WHILE")
    var contrasena = 0000;

    var usuario = [];
    usuario[0] = 0000;
    usuario[1] = 1234;
    usuario[2] = 5555;
    usuario[3] = 4321;

    var i = 0;
    while(usuario[i] == contrasena) {
        console.log("Entraste con while")
        i++
    }

    // pero esto igual se puede hacer con un bucle for
    for (var i=0; usuario[i]==contrasena; i++) {
        console.log("Entraste con for")
    }

// EJEMPLO 2
    //  03_otro_ejemplo_de_while.js