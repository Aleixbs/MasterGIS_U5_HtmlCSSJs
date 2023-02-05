// EJERCICIO 5: LA LETRA DE TU DNI

const letrasDNI = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
let numeroDNI = prompt("Por favor introduce el número de tu DNI, recuerda son 8 cifras","99999999");
var resultadoDNI = 0;
var letraDNI = letrasDNI[resultadoDNI];

if (numeroDNI < 0 || numeroDNI > 99999999) {
    alert("El número especificado no es válido");
}   else if (numeroDNI.length !=  8) {
    alert("El número especificado no es válido");
}   else {
    var resultadoDNI = numeroDNI%23;
    var letraDNI = letrasDNI[resultadoDNI]
    console.log(resultadoDNI)
}

console.log(letraDNI)
alert(letraDNI)
console.log(`El DNI completo es ${numeroDNI}${letraDNI}`)
alert(`El DNI completo es ${numeroDNI}${letraDNI}`)