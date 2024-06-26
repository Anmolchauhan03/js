const coding =["js","py","cpp","R"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item , index,arr) =>{
//     console.log(item, index,arr);
// })

myCoding =[
    {
        languageName: 'javascript',
        languagefileName:'js'
    },
    {
        languageName: 'c++',
        languagefileName:'cpp'
    },
    {
        languageName: 'python',
        languagefileName:'py'
    }
]
myCoding.forEach(item => {
    console.log(item.languageName);
});