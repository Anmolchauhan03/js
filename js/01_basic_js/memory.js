// there are two types of memory : 1) stack(use in premitive) 2) heap mem.(non-premitive)

let myYoutubename = "anmol chauhan"


let anotherName = myYoutubename
anotherName="rajput"

console.log(myYoutubename);
console.log(anotherName);

let userOne ={
    email:"user123@gamil.com",
    name: "anmol",
    password:123456

}
let userTwo= userOne
userTwo.email = "anmolchauna@gmail.com"
console.log(userTwo);