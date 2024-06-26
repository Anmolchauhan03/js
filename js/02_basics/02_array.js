const marvels_heros= ["thors", "ironman", "spiderman"]
const dc=["batmen", "superman","flash"]

// marvels_heros.push(dc)
// console.log(marvels_heros[3][1]);

// const allHeros=marvels_heros.concat(dc)
// console.log(allHeros);

const all_heros = [...marvels_heros, ...dc]

// console.log(all_heros);

const another_arr = [1,2,3,[,4,5,6],8,9,9,[5,2,5,2,52,5],25,25,58,42,[45,65,652,6521]]
const real_another_array=another_arr.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("anmol"));
console.log(Array.from("anmol"));
console.log(Array.from({name: "anmol"})); 


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
