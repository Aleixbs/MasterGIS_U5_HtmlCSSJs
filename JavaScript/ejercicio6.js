const nombre = 'esri';
console.log(nombre[0].toUpperCase() + nombre.substring(1));


const empresa = 'environmental systems research institute'; 
const listaEmpresa = empresa.split(" "); 
const listMayus = [];
for (let i = 0; i<listaEmpresa.length; i++) {
    var mayusEmpresa = listaEmpresa[i][0].toUpperCase() + listaEmpresa[i].substring(1);
    listMayus.push(mayusEmpresa)
};
console.log(listMayus.toString().replaceAll(","," "))
