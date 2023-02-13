function mostrarmas(){
    var puntos = document.getElementById('breakpuntos'); 
    var vermas = document.getElementById('mas');
    var boton = document.getElementById('mostrar');

    if (puntos.style.display === "none") {
    puntos.style.display = "inline";
    boton.innerHTML = "Read more"; 
    vermas.style.display = "none";
  } else {
    puntos.style.display = "none";
    boton.innerHTML = "Read less"; 
    vermas.style.display = "inline";
  }
}
