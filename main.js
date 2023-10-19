console.log('hola')

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles() {
        console.log(this.nombre, this.edad, this.genero)
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero)
        this.grupo = grupo;
        this.curso = curso;
    }
    registrar() {
        console.log(this.nombre, this.edad, this.genero, this.curso, this.grupo)
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        console.log(this.nombre, this.edad, this.genero, this.asignatura, this.nivel)
    }
}