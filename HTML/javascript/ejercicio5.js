const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']

const mesesLargos = meses
    .filter(meses => meses.length > 7)
    .map(meses => meses.toUpperCase()); 

console.log(mesesLargos)

const numMesesLargos = mesesLargos.length; 

console.log(`Hay ${numMesesLargos} meses largos`)