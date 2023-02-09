function comprobar() {
// Capturar frase de usuario 
    var fraseUsuario = document.getElementById('frase').value; 
    console.log(fraseUsuario)
    var fraseMayus = fraseUsuario.toUpperCase(); 
    var fraseMinus = fraseUsuario.toLowerCase();

// Comprobar si la frase es mayúscula
    if (fraseUsuario === fraseMayus) {
        document.getElementById('resultado').innerHTML = 'Está en mayúscula'; 

// Comprobar si la frase es minúscula 
    } else if (fraseUsuario === fraseMinus){
        document.getElementById('resultado').innerHTML = 'Está en minúscula'; 

// Si esta en minúscula y mayúscula
    } else {
        document.getElementById('resultado').innerHTML = 'La frase está en mayúscula y en minúscula';
    }

};

// var inputFrase = document.getElementById('input'); 
// console.log(inputFrase.keyCode);
// var teclaActiva = inputFrase.addEventListener('keydown', valorTecla); 
// var mayusOn;

// function valorTecla(evento){
//     console.log(evento.key)
//     let teclaPulsada = evento.key;
//     if (teclaPulsada == 'CapsLock'){
//         mayusOn = 1;
//     } else {
//         mayusOn = 0;

//     }
// }

// var botonactivar = document.getElementById('informa'); 

// function comprobar (){
//     if (mayusOn == 1){
//     document.getElementById('informa').innerHTML = 'El texto tiene una mayúscula'; 
//     } else {
//         document.getElementById('informa').innerHTML = 'El texto tiene una mayúscula';

//     }
// }

// function comprobar (){
//     var inputFrase = document.getElementById('frase').value;
//     if (inputFrase === fraseMayus) {
//         document.getElementById('informa')

//     } else {

//     }
// }
// function mayusON (evento){
//     if (evento.CapsLock == true){
//         console.log('hola')
//         getElementById('informa').innerHTML = 'Es mayus'
//     } 
// }