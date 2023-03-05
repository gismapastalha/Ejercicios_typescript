let decimal: number = 23;  
let hex: number = 0xff0d;
let continuar: boolean = true;  
let myName: string = "Eduardo";

let ArrayNum: number[] = [15, 17, 6, 84];
let myArray: Array<number> = [15, 17, 6, 84];
/* los dos son equivalentes y los valores tienen que  ser homogéneos (del mismo tipo)*/

//Tuplas (semejante a un vector pero aquí los elementos pueden  ser de diferente tipo):
let myTup: [string, number, boolean] = ["Juan", 8, true];
//Vector con cualquier tipo de valor:
let vectArray: any[] = [15, 'a', true];

//any:
let cantidad: any = 8; //acepta cualquier valor. Ojo  porque se pierden las ventajas del tipado
cantidad = "ocho";


//Void (utilizado para indicar que una función no retorna ningún  valor):
function miFuncion(): void { //no retorna ningún valor  console.log(Math.PI * 3);
}

//null y undefined:
/* No mucho más podemos asignar a este tipo de  variables! */
let u: undefined = undefined; //variable no existe  
let n: null = null; //variable sin valor

let telefono:string|null = null


//función que espera un string y no devuelve valor
var decirHola = function (nombre: string): void {  alert( 'Hola, ' + nombre );
};
//función que espera un string y devuelve un string
/*var decir = function (nombre: string): string {  return 'Hola, ' + nombre ;
};*/





