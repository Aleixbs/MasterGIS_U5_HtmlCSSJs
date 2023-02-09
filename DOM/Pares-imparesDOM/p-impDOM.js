var evento = document.getElementById("btn").addEventListener('click',paresImpares);

function paresImpares() {
    let value = document.getElementById('inputvalue').value;
    if (value % 2 == 0) {
        document.getElementById('resultado').innerHTML = 'Es par';
    } else {
        document.getElementById('resultado').innerHTML = 'Es impar';
    }
}; 

function conKeycode(evento) {
    if (evento.keyCode == 13) {
        paresImpares();
    }
}


