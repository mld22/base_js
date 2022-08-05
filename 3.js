'use strict'
// 1 задание
let i = 0
while (i <= 100 && i >= 0) {
  console.log(i)
  i++
}

// 2 и 3 задание
let basket = [
  {
    product: 'skirt',
    size: 'S',
    price: 2500,
  },

  {
    product: 'jeans',
    size: 'S',
    price: 1500,
  },

  {
    product: 'T-shit',
    size: 'S',
    price: 400,
  },
]

function countBasketPrice(basket) {
  let total_sum = 0
  basket.forEach(function (item) {
    total_sum = total_sum + item['price']
  })

  return total_sum
}

console.log(countBasketPrice(basket))

// 4 задание
for (let i = 0; i < 10; console.log(i++)) {

}
