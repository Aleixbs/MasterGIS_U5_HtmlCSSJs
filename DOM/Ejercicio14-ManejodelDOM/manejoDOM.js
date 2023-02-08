
// Obtener los enlaces del documento
var enlaces = document.getElementsByTagName('a'); 
console.log(enlaces);
console.log(`En la página hay ${enlaces.length}`)

var enlaces2 = document.links.length;
console.log(`En la página hay ${enlaces2} otro método`)
//Dirección del penúltimo enlace
var direccion = enlaces[enlaces.length-2].href
console.log(direccion)

// var parrafos = document.getElementsByTagName('p'); 
// console.log(parrafos)

//Contar enlaces del 3r párrafo
var parrafo3 = document.getElementById('third-paragraph'); 
console.log(parrafo3);
var hijosparrafo = parrafo3.childNodes; 
console.log(hijosparrafo);
var enlacesp3 = [hijosparrafo[1],hijosparrafo[3]]
console.log(enlacesp3.length)

//Crear nodo
const para = document.createElement('p'); 
//Crear info para el nodo (texto)
const info = document.createTextNode(`En la página hay ${enlaces.length} enlaces, la dirección a la que enlaza el penúltimo 
enlace es: ${direccion}, y hay ${enlacesp3.length} en el tercer párrafo`); 
//Añadir la info al nodo
para.appendChild(info);
// Añadir el nodo creado al documento
document.body.appendChild(para);

// El elemento que me interesa es el primer h1 para modificarlo cómo mi title principal y lo formateo de esta forma desde javascript
const title = document.getElementsByTagName('h1')[0]; 
title.style.color = 'red'; 
title.style.fontSize = '50px'; 

// Seleccionar un elemento para alterar sus propiedades de Css
const title2 = document.getElementsByTagName('h2'); 
console.log(title2);

// Seleccionamos el, elemento al cuál queremos eliminar la clase de CSS (La clase ha debido de ser añadida con anterioridad cómo etiqueta de HTML)
title2[1].classList.remove('afuego'); 

// Seleccionamos el elemento al cuál queremos añadir la clase de CSS (La clase debe ser creada con anterioridad dentro del archivo CSS)
title2[2].classList.add('afuego');




