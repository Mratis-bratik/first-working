// let inventory = [
//     { id: 1, name: "Apple", price: 0.50, quantity: 200 },
//     { id: 2, name: "Banana", price: 0.30, quantity: 150 },
//     { id: 3, name: "Cherry", price: 0.90, quantity: 50 }
// ]

// ЗАДАЧА 1: Отображение названий продуктов Получите все продукты и вывести их названия на консоль.

// Вариант решения 1

// inventory.forEach((item) => {console.log(item.name)})

// Вариант решения 2

// for (let i = 0; i <=     inventory.length; i++) {
// let one = inventory[i]
// console.log(one.name)}

// Вариант решения 3

// for (let sss of inventory) {
// let inven = sss.name
// console.log(inven)
// }

// ЗАДАЧА 2: Обновление инвентаря Напишите функцию updateInventory(productId, amount), которая обновляет количество определенного ID товара. Количество может быть положительной (добавление к инвентарю) или отрицательной (вычитание из инвентаря). Убедитесь, что функция не позволяет инвентарю опуститься ниже 0.

// Вариант решения 1

// function updateInventory(productId, amount) {
// let product = inventory.find((i) => i.id === productId)

// if (!product) {
//   console.log("Такого товара нет")
//   return
// }

// let name = product.name
// let newQuantity = product.quantity + amount
// product.quantity += amount

//  if (newQuantity < 0) {
//    console.log("Число товара не может быть отрицательным")
//  }
//   else { console.log (`Число товара ${name} стало ${product.quantity}`)
//   }
// }
// updateInventory(2, -10)
// console.log(inventory)

// Вариант решения 2

// function updateInventory(productId, amount) {
//   let product = inventory.find(item => item.id === productId)

//   if (product) {
//   product.quantity += Math.max(0, product.quantity + amount)
//     console.log(`Товара с ID ${productId} стало ${product.quantity}`)
//   }
//   else {

//     console.log(`Товара с ID ${productId} нет в инвентаре`)
//   }
// }

// updateInventory(2, 1000)
// console.log(inventory)
