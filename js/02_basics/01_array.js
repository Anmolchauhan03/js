//Array

const myArr=[0,1,2,3,4,5,6]
// const myHeros=["anmol","arsh","nikhil"]

// const myArr2= new Array(1,2,3,4,5)
// console.log(myArr);
// console.log(myArr2);
// console.log(myHeros);

// array methods

// myArr.push(89)        // push mehtod
// myArr.pop()           // remove last element
// console.log(myArr);

// myArr.unshift(9)        // it add the value in starting and shift all the value of array
// myArr.shift()           // remove unshift value
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// slice or splice   :-
console.log("A",myArr);

const mynewArr1= myArr.slice(1,3)      // it not be included last range 
console.log(mynewArr1);

console.log("b",myArr);

const mynewArr2=myArr.splice(1,3)      // it manipulate the real data (remove 1,2,3, from array)
console.log("c",myArr);
console.log(mynewArr2);



