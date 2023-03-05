var alumno = {
    nombre: "Joan",
    edad: 25
};
function saludar(nombre, edad) {
    console.log("Hola ".concat(nombre)); //aparecería Hola [object]
    console.log("Hola ".concat(edad));
}
saludar(alumno.nombre, alumno.edad); //le pasamos el objeto
