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
//ЗАДАНИЕ 4
//ВАРИАНТ РЕШЕНИЯ 1

// function totalInventoryValue() {
//   return inventory.reduce((x, y) => {
//     return x + (y.price * y.quantity)
//   }, 0)
// }
// console.log(totalInventoryValue())