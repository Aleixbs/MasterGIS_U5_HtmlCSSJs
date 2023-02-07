// var lista = prompt("Introduce una lista de números separados por comas"); 
var lista = [5,8,2,6,9,4];
var mayor = lista[0];

for (let i = 0; i < lista.length; i++) {
    var numero = lista[i]; 
    if (numero > mayor){
        mayor = numero
    }
}
console.log(`El valor mas grande del array es ${mayor}`)