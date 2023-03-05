var alumno = {
    nombre: "Joan", //objeto con una propiedad
    edad:  25
    }
    
    function saludar(nombre:string, edad) {
    console.log(`Hola ${nombre}`); //aparecería Hola [object]
    console.log(`Hola ${edad}`);
    }
    saludar(alumno.nombre, alumno.edad); //le pasamos el objeto
    