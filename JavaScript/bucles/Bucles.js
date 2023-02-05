// Ejercicio 6: Bucles
const notas = [6,7,2,9,3,4,5,8,2];
var valorTotFor = 0;
var valorTotForOf = 0 ;


for (let i = 0; i < notas.length; i++){
    valorTotFor += notas[i]
};
console.log(`Valor Total Bucle for: ${valorTotFor}`);

for (const nota of notas) {
    valorTotForOf += nota;
};
console.log(`Valor total Bucle for... of :${valorTotForOf}`);
alert(`Valor Total ${valorTotFor}`);