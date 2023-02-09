// Haz que cuando se haga click sobre el botón "Guardar", salte una alerta con un mensaje guardado
var eject = document.getElementsByTagName('button'); 
console.log(eject)
eject[0].addEventListener('click',guardado)

function guardado (){
    alert('El mensaje está guardado')
}
// Cuando hagamos foco sobre este input se pondrá de color amarillo y cuando se lo quitemos cambiará de color
var inputs  = document.getElementsByTagName('input'); 
console.log(inputs);

inputs[0].onfocus = function(){
    estilo()
}
inputs[0].addEventListener('focusin',estilo)
inputs[0].addEventListener('focusout',estilofuera)
function estilo() {
    inputs[0].style.backgroundColor = 'yellow';
}
function estilofuera() {
    inputs[0].style.backgroundColor = '';
}
// Dependiendo si escribimos una vocal o una consonante el contenido del input aparecerá de distinto color
var letra = inputs[1].addEventListener('keypress',vocCons)

console.log(inputs[1].childNodes)

function vocCons(evento){
    var vocales = [97,101,105,111,117,65,69,73,79,85]
    console.log(evento.keyCode)
    if (vocales.includes(evento.keyCode) == true){
        inputs[1].style.color = 'red';
    }
    else {
        inputs[1].style.color = 'green';
    }
}