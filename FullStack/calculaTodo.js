// Función que carga un ejemplo de números en el input

function ejemplo(){
    return document.getElementById('numerosinput').value = '3,5,6'
};


function sumaTodo(){
    var sumaTotal = 0
    var media = 0
   

    var numeros = document.getElementById('numerosinput').value; 
    const listNumeros = numeros.split(',')
    const mapList = listNumeros.map(function(element){
        return Number(element)
    });
    for (let i = 0; i < mapList.length; i ++) {
        sumaTotal += mapList[i];
    };

    media = sumaTotal/mapList.length; 


    var Valormax = mapList[0];
    var Valormin = mapList[0];

    for (let i = 0; i < mapList.length; i ++) {
        var numero = mapList[i]; 
        if (numero > Valormax){
            Valormax = numero
        }
        else if(numero < Valormin){
            Valormin = numero
        }

    }

    return document.getElementById('solucion1').innerHTML = `La suma de los números es ${sumaTotal}`, 
    document.getElementById('solucion2').innerHTML = `La media de los números es ${media}` , 
    document.getElementById('solucion3').innerHTML = `El Valor máximo es ${Valormax}`,
    document.getElementById('solucion4').innerHTML = `El Valor mínimo es ${Valormin}`
   
};

function resetApp(){
    return document.getElementById('solucion1').innerHTML = '', document.getElementById('solucion2').innerHTML = '', 
    document.getElementById('solucion3').innerHTML = '', document.getElementById('solucion4').innerHTML = '', document.getElementById('numerosinput').value = '';

};

// Esta función se puede usar sólo una vez debido al uso del remove y que en la función de la suma no estamos creando elementos p al momento de printear el resultado. Simplemente usamos elementos ya existentes 

// function resetApp(){
//     return document.getElementById('solucion1').remove(), document.getElementById('solucion2').remove(), 
//     document.getElementById('solucion3').remove(), document.getElementById('solucion4').remove(), document.getElementById('numerosinput').value = '';

// };


// Conseguir el máximo y el módulo Math de javascript

// var max = Math.max(...listNumeros)
// var min = Math.min(...listNumeros)