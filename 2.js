'use strict'
//задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2. Инкремент в префиксной форме ++ увеличивает переменную а на 1 и их сумма записываеться в переменную с. а = 2.
d = b++; alert(d); // 1. Инкремент ++ в постфиксной форме, поэтому сначала записывается b в d, а потом в переменную b записывается(+1) 2.
c = (2+ ++a); alert(c); /* 5. В переменную а ранее после применения префиксного инкремента было записано значение 2. В этом выражении а вновь 
увеличивается префиксной формой инкремента на 1 (2 + 2+1 = 5). a=3 */
d = (2+ b++); alert(d); /* 4. В переменную b ранее после применения префиксного инкремента было записано значение 2. (2 + 2 = 4). b=3 */
alert(a); // 3. К переменной а дважды применялась префиксная форма инкремента, поэтому а = 1+1+1.
alert(b); // 3.  К переменной b дважды применялась постфиксная форма инкремента, поэтому а = 1+1+1.


//задание 2
var a = 2;
var x = 1 + (a *= 2); // 5. Сокращенная арифметика с присваиванием (1+(а= 2*2)=5)


//задание 3

let a = Number.parseInt(prompt("Введите целочисленное значение"));
let b = Number.parseInt(prompt("Введите целочисленное значение"));

function calcul(a, b){
 if ( (a >= 0) && (b >= 0) ) {
  return a - b ;  
 }
 else if ((a < 0) && (b < 0)) {
  return a * b ; 
 } 
 else {
  return a + b ;  
 }
}

console.log(calcul(a, b));

//задание 4


let a = getRandomInt(0, 16);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


switch (a) {
  case 0:
    alert( 0);
  case 1:
    alert( 1 );
  case 2:
    alert( 2 );
  case 3:
    alert( 3);
  case 4:
    alert( 4 );
  case 5:
    alert( 5 );
  case 6:
    alert( 6 );
  case 7:
    alert( 7);
  case 8:
    alert( 8 );
  case 9:
    alert(9);
  case 10:
    alert( 10 );
  case 11:
    alert( 11 );
  case 12:
    alert( 12);
  case 13:
    alert( 13);
  case 14:
    alert( 14 );
  case 15:
    alert( 15 );
    break;
    
  default:
    console.error( "ошибка" );
}



//задание 5

let a = Number.parseInt(prompt("Введите целочисленное значение"));
let b = Number.parseInt(prompt("Введите целочисленное значение"));

function calculSub(a, b){
 if ( (a >= 0) && (b >= 0) ) {
  return a - b ;  
 }
 }

function calculSum(a, b){
 if ((a < 0) && (b < 0)) {
  return a + b ;  
 }
 }

function calculMul(a, b){
 if (a > b) {
  return a * b ;  
 }
 }

function calculMul(a, b){
 if (a < b) {
  return b / a ;  
 }
 } 

//задание 6 

let a = Number.parseInt(prompt('Введите целочисленное значение'))
let b = Number.parseInt(prompt('Введите целочисленное значение'))
let operation = String(prompt('Введите название операции'))

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'Сложение':
      return calculSum(arg1, arg2)

    case 'Вычитание':
      return calculSub(arg1, arg2)

    case 'Умножение':
      return calculMul(arg1, arg2)

    case 'Деление':
      return calculDiv(arg1, arg2)

    default:
      alert('Неверное название операции')
  }
}

alert(mathOperation(a, b, operation))
 
//задание 7*

console.log(null===0); //false Так как при строгом сравнении сравниваються типы, а в данном случае два разных типа.

//задание 8*

let a = Number.parseInt(prompt('Введите целочисленное значение'))
let b = Number.parseInt(prompt('Введите степень'))
function power (val, pow) {
  return(pow==1)? val : (val * power(val, pow -1));
}
alert(power (a, b));
