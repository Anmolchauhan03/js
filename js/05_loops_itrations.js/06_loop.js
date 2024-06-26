// const coding =["js","py","cpp","R"]

// const values =coding.forEach((item) => {
// // console.log(item);
// return item
// })

// console.log(values);

const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNum.filter((num)=> {
//     return num>5
// })
// console.log(newNums);

const books =[
   {
        title:'Book one', genre: 'friction', publish:1992, edition:2004
    },
   {
        title:'Book two', genre: 'non-friction', publish:1995, edition:2006
    },
   {
        title:'Book three', genre: 'history', publish:1998, edition:2008
    },
   {
        title:'Book four', genre: 'friction', publish:1997, edition:2004
    },
   {
        title:'Book five', genre: 'history', publish:1999, edition:2010
    },
   {
        title:'Book six', genre: 'friction', publish:2000, edition:2004
    },
   {
        title:'Book seven', genre: 'history', publish:2000, edition:2015
    },
   {
        title:'Book eight', genre: 'math', publish:2010, edition:2019
    },
   {
        title:'Book nine', genre: 'history', publish:2010, edition:2020
    },
];
// const userBooks= books.filter((bk)=> bk.genre==='history')
// const userBooks= books.filter((bk) => bk.publish<2000 )
const userBooks=books.filter((bk) => bk.edition<2020 && bk.genre==='history')
console.log(userBooks);