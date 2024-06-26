const myNum=[1,2,3,4,5,6]

// const mytotal=myNum.reduce(function(accmulator, currentvalue){
//     console.log('acc value :', accmulator ,'currval:',currentvalue);
//     return accmulator + currentvalue
// },0)

// arrow function
const mytotal=myNum.reduce((acc,curr) => acc+curr,0)

// console.log(mytotal);

const shoopingcart=[
    {
        itemName:'js course ',
        price:2999
    },
    {
        itemName:'py course ',
        price:3999
    },
    {
        itemName:'cpp course ',
        price:4999
    },
    {
        itemName:'data course ',
        price:6999
    },
]

const pricetopay=shoopingcart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay);

