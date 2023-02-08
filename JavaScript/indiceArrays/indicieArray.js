const heros = [
    { name : 'Spider-Man'},
    { name : 'Thor'}, 
    { name : 'Black Panther'}, 
    { name : 'Captain Marvel'}, 
    { name : 'Silver Surfer'}, 
]; 


//Método 1
const resultado0 = heros.map(function(hero,index){
    return {id : index , hero: hero.name}
})
console.log(resultado0)
//Método 2
const resultado = heros.map(hero => ({id : heros.indexOf(hero), hero: hero.name }));
console.log(resultado);
//Método 2.1
const resultado2 = heros.map((hero,index) => ({id : index, hero: hero.name }) );
console.log(resultado2);