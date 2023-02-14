// Boton y enter hacen el submit
function enviar(){
    textUser = document.getElementById('textArea').value; 
    document.getElementById('resultado').innerHTML = textUser
}


//
var textare = document.getElementById('textArea')
textare.addEventListener('keyup',checkEnter)

function checkEnter(evento){
    console.log('evento',evento)
    if(evento.keyCode === 13){
        return enviar()
    }
};