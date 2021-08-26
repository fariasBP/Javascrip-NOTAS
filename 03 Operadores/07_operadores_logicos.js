/* OPERADORES LOGICOS
    son aquellos operadores que trabajan con datos a travez de expresiones logicas
    TEMAS:
        - && ---> AND
        - || ---> OR
        - ! ---> NOT
*/
// Operador AND (&&)
console.log("Operador AND (&&)");
    console.log(1<3 && 3>2); // print: true
    console.log(7<8 && 4>7); // print: false
    console.log(8==="8" && 3!=3); // print: false

// Operador OR (||)
console.log("Operador OR (||)");
    console.log(1<3 || 3>2); // print: true
    console.log(7<8 || 4>7); // print: true
    console.log(8==="8" || 3!=3); // print: false

// Operador NOT (!)
console.log("Operador NOT (!)");
    console.log(!(1<3)); // print: false
    console.log(!(7>8)); // print: true
    console.log(!(8==="8")); // print: true