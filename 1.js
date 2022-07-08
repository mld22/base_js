'use strict'
//задание1

Tc = +prompt('укажите температуру')
Tf = (9 / 5) * Tc + 32
alert(Tf)

//задание2
let result0 = 10 + 10 + '10' // 2010
let result1 = 10 + '10' + 10 // 101010
let result2 = 10 + 10 + +'10' // 30
let result3 = 10 / -'' // -Infinity
let result4 = 10 / +'2.5' // Nan

console.log(result0)
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
