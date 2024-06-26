// for loop 
for (let i = 0; i <=10; i++) {
    const element = i;
 if (element==5) {
    // console.log("5 is best number");
 }
// console.log(element);
}
// console.log(element); // out of scope it will not be run


// table print
for (let i = 1; i <=10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
        const element = j;
        // console.log(`inner loop value ${j} and inner loop ${i}`);
    // console.log(i + '*' + j +'=' + i*j);
  
    }
    const element = i;
    
}
let myarray=["anmol","payal", "mansi"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}

// break and continue
for (let i = 1; i <=20; i++) {
    const element =i;
    if (i==5) {
        // console.log("detected:5");
        // break;                                  // break   
    }
    // console.log(element);
    
}
for (let i = 1; i <=20; i++) {
    const element =i;
    if (i==5) {
        console.log("detected:5");
        continue;                         // continue 
    }
    console.log(element);
    
}