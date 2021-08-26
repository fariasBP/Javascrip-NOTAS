

var cadena = "redonda"
var numero = 1
var booleano = true;
var mi_array = [1,2,3,4];
var objeto = {1:2, "algo":2, 3:"tres"};
var miFuncion = new Function("5+2")
var fecha = new Date()
var indefinido
var indefinido2 = undefined
var vacio = null

console.log("TYPEOF:")
    console.log("\t"+ typeof cadena) // print: string
    console.log("\t"+ typeof numero) // print: number
    console.log("\t"+ typeof booleano) // print: boolean
    console.log("\t"+ typeof mi_array) // print: object
    console.log("\t"+ typeof objeto) // print: object
    console.log("\t"+ typeof miFuncion) // print: function
    console.log("\t"+ typeof fecha) // print: object
    console.log("\t"+ typeof indefinido) // print: undefined
    console.log("\t"+ typeof indefinido2) // print: undefined
    console.log("\t"+ typeof vacio) // print: object

console.log("INSTANCEOF:")
