/* CONSTRUCTORES INTEGRADOS
    Veremos los constructores y sus datos nativos. Asi comparandoles para ver cual se debe utilizar
*/

// String:
    var cadena1 = new String(); // No Utilizar
    var cadena2 = 'mi texto'; // Utilizar
// Number:
    var num1 = new Number();
    var num2 = 32;
// Boolean:
    var bool1 = new Boolean();
    var bool2 = true;
// Array:
    var arr1 = new Array();
    var arr2 = [];
// RegExp:
var re1 = new RegExp();
    var re2 = /aqui viene la ER/;
// Function:
    var fun1 = new Function();
    var fun2 = function (){};
// Date:
    var dt1 = new Date /// este no tinen dato primitivo si o si se tiene que declarar con new (instanciar)
// Math:
    var math1 = Math.PI; // este no se instancia por que sus metosos y propiedades son estaticos
// Object:
    var obj1 = new Object();
    var obj2 = {};