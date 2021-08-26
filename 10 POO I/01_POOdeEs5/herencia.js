// Primera clase
    Persona = (nombre) => {
        this.nombre = nombre;
    }
    Persona.prototype.getNombre = function() {
        return this.nombre;
    }
// Segunda clase
    function Estudiante(nombre, carrera) {
        Persona.call(this, nombre); // llamamos al constructor padre
        this.carrera = carrera;
    }
    Estudiante.prototype = Object.create(Persona.prototype);
    Estudiante.prototype.constructor = Estudiante; // al llamar al constructor padre este pierde su contructor y le decimos que lo recupere
    Estudiante.prototype.getEstudiante = function() {
        console.log(`El estudiante: ${this.getNombre()} estudia ${this.carrera}`); 
    }
// instanciacion de clase
    var x = new Persona("Alex");
    console.log(x.getNombre());

    var y = new Estudiante("Franco", "Ingenieria Electronica");
    y.getEstudiante();