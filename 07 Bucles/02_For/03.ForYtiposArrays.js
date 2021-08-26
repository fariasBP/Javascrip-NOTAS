/* BUCLE FOR Y LOS TIPOS DE ARRAYS
    Ya se dijo que los bucles for a diferencia de los demas bucles, esta se usa mas para recorrer
     arrays a continuacion veremos como trabajan los distintos tipoos de bucle for con lo arrays
     y cual es mejor usar dependiendo del tipo de array.
    TEMAS:
        - Simple 
            l> for      +
            l> for in   ++
            l> for of   +++
            l> forEach  +++
        - Asocitivos
            l> for      -
            l> for in   +++
            l> for of   -
            l> forEach  -
        - Multidimensional
            l> for      -
            l> for in   ++  cuando no sabes ninguno de los parametros del objeto o Array
            l> for of   ++  cuando tienes que saber minimo uno de sus parametros del objeto o Array
            l> forEach  ++  cuando tienes que saber minimo uno de sus parametros del objeto o Array
*/
// Array simple
    var colegios = ['Central', 'Mariana', 'Hispanoamericana', 'francia'];
// Array asociativo
    var profesores = {
        Quimica : 'Maria',
        Fisica : 'Esteban',
        Matematica : 'Sandra',
        Biologia : 'Luis',
        Informatica : 'Franco'
    }
// Array multidimensional
    var alumnos = [
        {   nombre : 'Julio',
            edad : 14,
            aprobado : false },
        {   nombre : 'Sergio',
            edad : 15,
            aprobado : false },
        {   nombre : 'Aron',
            edad : 14,
            aprobado : true }
    ]
// BUCLE FOR
console.log('\nBUCLE FOR');
    // con array simple
    console.log('\tARRAY SIMPLE');
        for (let i = 0; i < colegios.length; i++) {
            console.log(`\t\t${i} -> ${colegios[i]}`);
        }
    // con array asociativo
    console.log('\tARRAY ASOCIATIVOS');
        console.log('\t\taun no se puede');
    // con array multidimensional
    console.log('\tARRAY MULTIDIMENSIONAL');
        console.log('\t\taun no se puede');
// BUCLE FOR IN
console.log('BUCLE FOR IN');
    // con array simple
    console.log('\tARRAY SIMPLE');
        for (let key in colegios) {
            console.log(`\t\t${key} -> ${colegios[key]}`);
        }
    // con array asociativo
    console.log('\tARRAY ASOCIATIVOS');
        for (let key in profesores) {
            console.log(`\t\t${key} -> ${profesores[key]}`);
        }
    // con array multidimensional
    console.log('\tARRAY MULTIDIMENSIONAL');
        for (let key in alumnos) {
            for(let key2 in alumnos[key]) {
                console.log(`\t\t${key} - ${key2} -> ${alumnos[key][key2]}`);
            }
        }
// BUCLE FOR OF
console.log('BUCLE FOR OF');
    // con array simple
    console.log('\tARRAY SIMPLE');
        for (let key of colegios) {
            console.log(`\t\t${key}`);
        }
    // con array asociativo
    console.log('\tARRAY ASOCIATIVOS');
        console.log('\t\tNo se puede');
    // con array multidimensional
    console.log('\tARRAY MULTIDIMENSIONAL');
        for (let key of alumnos) {
            console.log(`\t\t${key} -> ${key['nombre']}`);
        }
// BUCLE FOREACH
console.log('BUCLE FOREACH');
    // con array simple
    console.log('\tARRAY SIMPLE');
        colegios.forEach(key => {
            console.log(`\t\t${key}`);
        });
    // con array asociativo
    console.log('\tARRAY ASOCIATIVOS');
        console.log('\t\tNo se puede');
    // con array multidimensional
    console.log('\tARRAY MULTIDIMENSIONAL');
        alumnos.forEach(key => {
            console.log(`\t\t${key} -> ${key['aprobado']}`);
        })
