/*Перебираемые ключи
Мы хотели бы получить массив ключей map.keys() в переменную и 
далее работать с ними, например, применить метод .push.

Но это не выходит:
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");*/

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
console.log(keys);