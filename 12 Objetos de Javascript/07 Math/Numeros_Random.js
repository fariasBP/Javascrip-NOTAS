/* NUMEROS RANDOM
    devolviendo numeros aleatoriamente
    TEMAS:
        - Math.random() >>> Devuelve un numero aleatorio
        - Math.floor(<int numeroX>) >>> Devuelve el numeroX redondeado
*/

// Devolviendo un numero aleatorio entre 0 y 10 incluyendo decimales
    var min = 1, max = 10;
    console.log(Math.random() * (max - min) + min);

// Devolviendo un numero aleatorio entre 0 y 10 incluyendo decimales
    var min = 1, max = 21;
    console.log(Math.floor(Math.random() * (max - min) + min));