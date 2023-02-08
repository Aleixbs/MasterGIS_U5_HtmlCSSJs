const users = [
    {username: 'pablo', age: 20, premium: false},
    {username: 'josefina4', age: 30, premium: false},
    {username: 'shark34', age: 24, premium: true},
    {username: 'pepe90', age: 23, premium: false},
    {username: 'pacopaquete10', age: 37, premium: true},
    {username: 'marialuz9', age: 31, premium: false}
];

users.map(user => console.log(`El usuario ${user.username} tiene ${user.age} años`))

const noPremium = users.filter(user => user.premium == false); 
console.log(noPremium); 

const noPremiumextra = users.filter(user => !user.premium); 
console.log(noPremiumextra);


// users.map(function(user){
//     if (user.premium == true)
//     return console.log(`${user.username} bienvenido a nuestro plan Premium`) ; 
//     else {
//         return console.log(`${user.username} usted aún no disfruta de nuestro plan Premium`)
//     }
// });
