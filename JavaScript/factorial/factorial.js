var factorial = prompt("Escribe un número para calcular su factorial");
let resultado = 1

if (factorial == null) {
    alert(`Por favor, introduzca un valor válido`)
}
else if (factorial == 0) {
    alert(`El factorial de ${factorial} es 1`)
}
else if (factorial < 0) {
    alert(`El número ${factorial} es negativo, los números negativos no tienen valores factoriales`)
}
else {
    for (let i = factorial; i > 0; i--) { 
    resultado = resultado * i
};
alert(`El factorial de ${factorial} es ${resultado}`)

};