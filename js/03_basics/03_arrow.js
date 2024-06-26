const user= {
    username:"anmol",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to my website!!`);
        // console.log(this);    
    }

}
// user.welcomeMessage()
// user.username="payal"
// user.welcomeMessage()

// console.log(this);

// function farming() {
//     let username="anmol"
//     // console.log(this);
// // console.log(this.username);            // this cannot work on funcition, it works only object.
// }
// farming()


// const  farming = function(){
//     let username="anmol"
//     console.log(this);
// }

const  farming =() =>{
    let username="anmol"
    console.log(this.username);      // same as function
}
farming()

// arrow function (basic syntax): ()=>{}
     // basic 
// const addTwo=(num1, num2)=>{         
// return num1 + num2
// }

// implict run : remove ({} and return )
// const addTwo=(num1, num2)=> (num1 + num2)
const addTwo=(num1, num2)=> ({username:"anmol"})     // for object
    
console.log(addTwo(8,9));

