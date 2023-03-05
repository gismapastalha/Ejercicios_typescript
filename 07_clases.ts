//crear una clase
class Persona {
    //atributos
    private nif:string
    private nombre:string
    private direccion:string

    //constructor
    public constructor(nif:string, nombre:string, direccion:string) {
        //asignar los valores a los atributos
        //this.nif = nif //asignacion directa
        this.setNif(nif) //asignacion por delegación
        this.setNombre(nombre) 
        this.setDireccion(direccion)
    }

    //getters y setters
    public getNif():string {
        return this.nif
    }
    public getNombre():string {
        return this.nombre
    }
    public getDireccion():string {
        return this.direccion
    }

    public setNif(nif:string):void {
        if (nif.trim() == '') {
            throw new Error("Nif obligatorio");
        }
        this.nif = nif
    }
    public setNombre(nombre:string):void {
        if (nombre.trim() == '') {
            throw new Error("Nombre obligatorio");
        }
        this.nombre = nombre
    }
    public setDireccion(direccion:string):void {
        if (direccion.trim() == '') {
            throw new Error("Dirección obligatoria");
        }
        this.direccion = direccion
    }

    //otros métodos
    public mostrarDatos():string {
        return `${this.nif} ${this.nombre} ${this.direccion}`;
    }
}

//relación de herencia
class Alumno extends Persona {
    //atributos
    //private curso:number

    //constructor
    public constructor(nif:string, nombre:string, direccion:string, private curso:number) {
        //delegar en el constructor de la superclase el informar los atributos comunes
        super(nif, nombre, direccion)

        this.setCurso(curso)
    }

    //método getter y setter
    public getCurso():number {
        return this.curso
    }
    public setCurso(curso:number):void {
        if (curso <= 0 || curso > 6) {
            throw new Error("Curso debe estar comprendido entre 1 y 6");
        }
        this.curso = curso
    }

    //otros métodos
    public mostrarDatos(): string {
        //ampliar el método mostrarDatos de la superclase
        return super.mostrarDatos() + ' ' + this.curso
    }
}

try {
    //instanciar un objeto de la clase Persona
    let persona = new Persona('    ', 'Connie Corleone', 'Sad Hill, 45')

    document.write(persona.mostrarDatos())
} catch (error) {
    document.write(error)
}


document.write('<hr>')

try {
    //instanciar un objeto de la clase Persona
    let alumno = new Alumno('40000010H', 'Fredo Corleone', 'Sad Hill, 45', 7)

    document.write(alumno.mostrarDatos())
} catch (error) {
    document.write(error)
}
