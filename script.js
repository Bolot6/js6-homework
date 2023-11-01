// let a = []
// let b = []
// console.log(a===b) // always false

// let a = {
//     name: 'Ivan',
//     age: 20,
//     city: 'Bishkek'
// }
// console.log(a.age)
// console.log(Object.values(a))
// console.log(Object.keys(a))
// console.log(Object.keys(a))

// let a = {
//     name: 'Ivan',
//     age: 20,
//     city: 'Bishkek'
// }
// a.name = 'Afanasii'
// console.log(a['name']) //console.log(a['name']) === console.log(a.name)

// let a = {}
// let b = {}
// console.log(a===b)  //always false

// let arr = [
//     {
//         name: 'John',
//         age: 20,
//         job: 'developer',
//         salary: 50000
//     },
//     {
//         name: 'Kenneth',
//         age: 45,
//         job: 'HR',
//         salary: 40000
//     },
//     {
//         name: 'Maggy',
//         age: 33,
//         job: 'developer',
//         salary: 80000
//     },
//     {
//         name: 'Eugene',
//         age: 28,
//         job: 'waiter',
//         salary: 30000
//     },
// ]
// console.log(arr.map(el =>{
//     return{...el, job: 'QA', married: false}
// }))  //(...el)- copies all the elements inside the array - []

// console.log(arr.filter(el => el.age > 30))

// console.log(arr.map(el => el.job === 'developer' ? {...el, salary: +5000}))
// console.log(arr.map(el => el.job === 'developer' ? {...el, salary: ((el.salary / 100) * 25) + el.salary} : el)) //salary increase in %
// console.log(arr.map(el => el.job === 'developer' ? {...el, salary: el.salary + 5000} : el))
// console.log(arr.map(el => el.job !== 'HR' ? : el))

// let a = [1, 2]
// let b = ['Hello', 'world']
// // let c = [...a, ...b]
// // let c = [...a, ...b.join('').split('')]
// let c = [...a, ...b.join('').split('')].join()
// console.log(c)

// let a = [2,3,5,8,6,1,4,9]
// let b = ['f', 's', 'a', 'g', 'b', 'k', 'c', 'l']
// console.log(a.sort((a, b) => a-b))
// console.log(b.sort((a, b) => a > b ? 1 : -1))

//Homework

// [1, 2, 3] => [3, 2, 1]
// let a = [1, 2, 3]
// console.log(a.sort((a, b) => b-a))

//[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// let a = [0, 1, false, 2, undefined, '', 3, null]
// console.log(a.filter(el => typeof el === 'number' && el > 0))

//* Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
// let a = [1, 2, 3, 1, 2]
// console.log([...new Set(a)])

//Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// let a =  ['a', 'b', 'c']
// let b = [1, 2, 3]
// let c = [...a, ...b]
// console.log(c)

//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let a = [1, 2, 3]
// a.push(4, 5, 6)
// console.log(a)

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let a = [1, 2, 3]
// let b = [4, 5, 6]
// console.log([...b, ...a])

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let a = [1, 2, 3, 4, 5]
// a.splice(1, 3, 4 )
// console.log(a)

//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// let a = {
//     js:'test', jq: 'hello', css: 'world'
// }
// console.log(Object.keys(a))

//Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой.
// ['Капуста', 'Репа', 'Редиска', 'Морковка']
// let a = ['Капуста', 'Репа', 'Редиска', 'Морковка']
// console.log([...a].join())

//1 фильтровать по цене. от 40000 до 60000 и год до 2019
// 2 марка
// let arr = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2019,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 60000
//     }
// ]
// console.log(arr.filter(el => el.price >= 40000 && el.price <= 60000))
// console.log(arr.filter(el => el.make === 'Mercedes'))

//Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]
function font (input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let currentFont = input.charAt(i);
        if (currentFont === currentFont.toLowerCase()) {
            result += currentFont.toUpperCase();
        } else {
            result += currentFont.toLowerCase();
        }
    }
    return result;
}

let input = 'КаЖдЫй ОхОтНиК';
let output = font(input);
console.log(output);









