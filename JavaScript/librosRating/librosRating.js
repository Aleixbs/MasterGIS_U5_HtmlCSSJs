const books = [
    { title : 'El Quijote', avg_rating: 4.5}, 
    { title : 'Don Juan', avg_rating: 3.8}, 
    { title : 'Cien años de soledad', avg_rating: 4.7}, 
    { title : 'Matar a un ruiseñor', avg_rating: 5}, 
    { title : 'El gran Gatsby', avg_rating: 3.6}
]; 

const result = books.filter(book => book.avg_rating > 4); 
console.log(result); 
const resultado = result.map(function(book){
    return {title : book.title , rating : book.avg_rating}
}); 
console.log(resultado); 

var resultados = books .filter(book => book.avg_rating > 4).map(book => ({title : book.title , rating : book.avg_rating})); 
console.log(resultados);