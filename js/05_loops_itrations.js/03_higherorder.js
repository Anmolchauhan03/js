// for of

const arr =[1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
}

const greetings= "hello world!"
for (const greet of greetings) {
    // console.log("each char is : ", greet);

}

// maps

const map =new Map()
map.set('IN', "India ")
map.set('USA', " UNITED STATE  ")
map.set('FR', "FRANCE")
map.set('IN', "India ")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':',value);
}

const myObject = {
    game1 :'bike ride',
    game2 :'car racing'
}

// for (const [key, value] of myObject) {
//     console.log(key, '-',value);
// }

