const marvelHeros = ["thor", "ironman","spiderman"]
const dcHeros = ["superman", "flash"]

marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

const bothHeros = marvelHeros.concat(dcHeros)
// console.log(bothHeros);
// console.log(marvelHeros[2]);

const newHeros =[...marvelHeros,...dcHeros]
// console.log(newHeros);


console.log(Array.isArray("badal"));
// console.log(Array.from("badal"));
console.log(Array.from({name:"badal"}))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
