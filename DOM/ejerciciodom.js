// Explicación de cómo se utiliza el DOM

var primeraOp = document.getElementById('first-option'); 
console.log('primeraOp',primeraOp);

var parrafo = document.getElementsByTagName('p'); 
parrafo[0].innerHTML = 'hola'
console.log('parrafo', parrafo); 

var labels = document.getElementsByTagName('label'); 
console.log('labels', labels); 

var clases = document.getElementsByClassName('label-input'); 
console.log(clases)

var nombre = "Nombre"
document.getElementById('titulo').innerHTML = nombre