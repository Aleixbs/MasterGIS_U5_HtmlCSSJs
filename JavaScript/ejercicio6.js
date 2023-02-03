const nombre = 'esri';
console.log(nombre[0].toUpperCase() + nombre.substring(1));


const empresa = 'environmental systems research institute'; 
const listaEmpresa = empresa.split(" "); 
for (let i = 0; i<listaEmpresa.length; i++) {
    console.log(listaEmpresa[i][0].toUpperCase() + listaEmpresa[i].substring(1));
};
