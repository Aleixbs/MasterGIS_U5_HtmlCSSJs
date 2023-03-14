var numRandom = Math.floor(Math.random() * 100);
var contador = 0; 
var vidas = 10;
console.log(numRandom)


function comprobarNum(){
    var resultado = document.getElementById('resultado'); 
    const numero = document.getElementById('introducirNumero').value; 

    if (numRandom == numero){
        document.getElementById('resultado').innerHTML = 'Lo acertaste'
    } else {
        document.getElementById('resultado').innerHTML = 'Fallaste Sigue probando'
    }

    console.log(numero);

    contador++; 
    vidas--;

    
}
// input.addEventListener('keyup',function(event){
//     if (keyco)
// })
