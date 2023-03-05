var decimal = 23;
var hex = 0xff0d;
var continuar = true;
var myName = "Eduardo";
var ArrayNum = [15, 17, 6, 84];
var myArray = [15, 17, 6, 84];
/* los dos son equivalentes y los valores tienen que  ser homogéneos (del mismo tipo)*/
//Tuplas (semejante a un vector pero aquí los elementos pueden  ser de diferente tipo):
var myTup = ["Juan", 8, true];
//Vector con cualquier tipo de valor:
var vectArray = [15, 'a', true];
//any:
var cantidad = 8; //acepta cualquier valor. Ojo  porque se pierden las ventajas del tipado
cantidad = "ocho";
//Void (utilizado para indicar que una función no retorna ningún  valor):
function miFuncion() {
}
//null y undefined:
/* No mucho más podemos asignar a este tipo de  variables! */
var u = undefined; //variable no existe  
var n = null; //variable sin valor
var telefono = null;
//función que espera un string y no devuelve valor
var decirHola = function (nombre) {
    alert('Hola, ' + nombre);
};
//función que espera un string y devuelve un string
/*var decir = function (nombre: string): string {  return 'Hola, ' + nombre ;
};*/
