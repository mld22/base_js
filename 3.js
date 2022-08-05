'use strict'
// 1 задание
let i = 0;
while(i <= 100 && i >= 0 ){
 console.log(i);
    i++;
}

// 2 и 3 задание
let basket = [
    {
product: "skirt",
size: "S",
price: 2500
    },
    
    {
        product: "jeans",
        size: "S",
        price: 1500
    },
    
    {
        product: "T-shit",
        size: "S",
        price: 500
    },

]



function countBasketPrice(arr){
let a = 0;
arr.forEach(function(index) {
  a = a + index["price"];
});
    
return (a) ;
}

console.log(countBasketPrice(basket));
