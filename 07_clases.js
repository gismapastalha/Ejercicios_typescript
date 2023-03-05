var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//crear una clase
var Persona = /** @class */ (function () {
    //constructor
    function Persona(nif, nombre, direccion) {
        //asignar los valores a los atributos
        //this.nif = nif //asignacion directa
        this.setNif(nif); //asignacion por delegación
        this.setNombre(nombre);
        this.setDireccion(direccion);
    }
    //getters y setters
    Persona.prototype.getNif = function () {
        return this.nif;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getDireccion = function () {
        return this.direccion;
    };
    Persona.prototype.setNif = function (nif) {
        if (nif.trim() == '') {
            throw new Error("Nif obligatorio");
        }
        this.nif = nif;
    };
    Persona.prototype.setNombre = function (nombre) {
        if (nombre.trim() == '') {
            throw new Error("Nombre obligatorio");
        }
        this.nombre = nombre;
    };
    Persona.prototype.setDireccion = function (direccion) {
        if (direccion.trim() == '') {
            throw new Error("Dirección obligatoria");
        }
        this.direccion = direccion;
    };
    //otros métodos
    Persona.prototype.mostrarDatos = function () {
        return "".concat(this.nif, " ").concat(this.nombre, " ").concat(this.direccion);
    };
    return Persona;
}());
//relación de herencia
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    //atributos
    //private curso:number
    //constructor
    function Alumno(nif, nombre, direccion, curso) {
        var _this = 
        //delegar en el constructor de la superclase el informar los atributos comunes
        _super.call(this, nif, nombre, direccion) || this;
        _this.curso = curso;
        _this.setCurso(curso);
        return _this;
    }
    //método getter y setter
    Alumno.prototype.getCurso = function () {
        return this.curso;
    };
    Alumno.prototype.setCurso = function (curso) {
        if (curso <= 0 || curso > 6) {
            throw new Error("Curso debe estar comprendido entre 1 y 6");
        }
        this.curso = curso;
    };
    //otros métodos
    Alumno.prototype.mostrarDatos = function () {
        //ampliar el método mostrarDatos de la superclase
        return _super.prototype.mostrarDatos.call(this) + ' ' + this.curso;
    };
    return Alumno;
}(Persona));
try {
    //instanciar un objeto de la clase Persona
    var persona = new Persona('    ', 'Connie Corleone', 'Sad Hill, 45');
    document.write(persona.mostrarDatos());
}
catch (error) {
    document.write(error);
}
document.write('<hr>');
try {
    //instanciar un objeto de la clase Persona
    var alumno = new Alumno('40000010H', 'Fredo Corleone', 'Sad Hill, 45', 7);
    document.write(alumno.mostrarDatos());
}
catch (error) {
    document.write(error);
}
