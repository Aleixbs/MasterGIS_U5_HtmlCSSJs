
function listaTareas(){
    var valorLista = document.getElementById('textoEntrada').value;
    var listaTareasAfter = document.getElementById('listaTareas'); 
    var crearli = document.createElement('li');
    var checkbox = document.createElement('input'); 
    checkbox.type = 'checkbox'; 
    checkbox.id = 'checkboxElement'; 
    // checkbox.name = 'name'; 
    // checkbox.value = 'value'; 

    // var label = document.createElement('label'); 
    // label.htmlFor = 'checkboxElement'; 
    // label.appendChild(valorLista); 
    // crearli.append(checkbox)

    crearli.appendChild(checkbox)
    crearli.append(valorLista)
    listaTareasAfter.appendChild(crearli)

    clear()

}

var inputText = document.getElementById('textoEntrada')
inputText.addEventListener('keyup',checkEnter)

function checkEnter(evento){
    console.log('evento',evento)
    if(evento.keyCode === 13){
        return listaTareas()
    }
};

function clear(){
    var valorLista = document.getElementById('textoEntrada').value = ''
}