/* ARRAYS
    se denomina tambien 'matriz', vector (de una sola dimensión) o formación (en inglés array)​ a una zona de almacenamiento contiguo que contiene una serie de elementos del mismo o diferentes tipos, los elementos de la matriz
    TEMAS:
        - Arrays simple
        - Arrays Asocitivos
        - Arrays multidimensionales
*/
// Arrays Simples
console.log("Arrays Simples");
    // 1era forma
        var mis_frutas = new Array('manzan', 'pera', 'naranja');
        console.log(mis_frutas);
    // 2da forma
        var mis_objetos = ['Celular', 'Lapiz', 4, false, 'Audifonos'];
        console.log(mis_objetos);
    // 3ra forma
        var mis_amigos = [];
        mis_amigos[0] = 'Joel';
        mis_amigos[1] = 'Scoot';
        mis_amigos[2] = 'Pedro';
        console.log(mis_amigos);
// Arrays Asociativos
console.log('Arrays Asociativos');
    // 1era forma
        var mis_elementos = new Array({Elemento1 : 15, Elemento2 : 'Mario', Elemento3 : false});
        console.log(mis_elementos);
    // 2da forma
        var mis_elementos2 = {
            Elemento1 : 15,
            Elemento2 : 'Mario',
            Elemento3 : false
        };
        console.log(mis_elementos2);
    // 3ra forma
        var mis_elementos3 = []; // esto se puede omitir
        mis_elementos3["Elemento1"] = 15;
        mis_elementos3["Elemento2"] = 'Raul';
        mis_elementos3["Elemento3"] = null;
        console.log(mis_elementos3);
// Arrays Multidimencionales
console.log('Arrays Multidimensionales');
    // 1era forma
        var usuarios = new Array([
            {
                'nombre' : 'Jorge',
                'edad' : 23,
                'conectado' : true
            },
            {
                'nombre' : 'Marco',
                'edad' : 35,
                'conectado' : true
            }
        ]);
        console.log(usuarios)
        var usuarias = [
            {
                'nombre' : 'Matilda',
                'edad' : 23,
                'conectado' : true
            },
            {
                'nombre' : 'Lorena',
                'edad' : 15,
                'conectado' : false
            }
        ];
        console.log(usuarias);
    // 2da forma
        var usuarios2 = [];
        usuarios2[0] = {
            'nombre' : 'Steve',
            'edad' : 34,
            'conectado' : false
        };
        usuarios2[1] = {
            'nombre' : 'bill',
            'edad' : 46,
            'conectado' : true
        };
        console.log(usuarios2);
    // 3ra forma
        var usuarios3 = [];
        usuarios3[0] = [];
        usuarios3[0]['nombre'] = 'Calvin';
        usuarios3[0]['edad'] = 19;
        usuarios3[0]['conectado'] = false;
        usuarios3[1] = [];
        usuarios3[1]['nombre'] = 'Steve';
        usuarios3[1]['edad'] = 21;
        usuarios3[1]['conectado'] = true;
        console.log(usuarios3);