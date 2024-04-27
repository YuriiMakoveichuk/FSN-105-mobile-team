// * Масиви: літерал масиву, елементи, індексація, довжина
//  Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Джаз', 'Блюз'];
// console.log(styles);

// styles.push('Рок-н-рол');
// console.log(styles);
// // styles.unshift('Реп');
// // styles[1] = 'Класика';
// const index = styles.indexOf('Блюз');
// if (index !== -1) {
//     styles[index] = 'Класика';
// }
// const newStylesArr = ['Реп', 'Реггі'];
// const concatStyles = newStylesArr.concat(styles);
// console.log(index);
// console.log(concatStyles);

// console.log(concatStyles.join(', ').split(','));

// // concatStyles.splice(1, 4);
// console.log(concatStyles.includes('Рок-н-рол'));

//TODO:=========task-1=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const wordsArray = ['JavaScript', 'HTML', 'CSS', 'React'];
// const substring = 'S';

// const newArr = [];
// for (const item of wordsArray) {
//     // if (item.toLocaleLowerCase().indexOf(substring.toLocaleLowerCase()) !== -1) {
//     //     newArr.push(item);
//     // }
//     if (item.toLocaleLowerCase().includes(substring.toLocaleLowerCase())) newArr.push(item);

// }
// console.log(`Масив елементів, що містять підстроку: ${substring} - ${newArr.join(', ')}`);

//TODO:=========task-2=================
// Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.

// const wordsArray = ['JavaScript', 'HTML', 'CSS'];
// const item = 'CSS';
// const index = wordsArray.indexOf(item);
// // if (wordsArray.includes(item)) {
// //     const index = wordsArray.indexOf(item);
// //     wordsArray.splice(index, 1);
// // } else {
// //     wordsArray.push(item);
// // }
// wordsArray.includes(item) ? wordsArray.splice(index, 1) : wordsArray.push(item);

// console.log(wordsArray);

//TODO:=========task-03=================
//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage() {

//     let sum = 0;
//     for (const item of arguments) {
//         if (typeof item === 'number') sum += item;
//     }
//     let average = sum / arguments.length;
//     return average;
// }

// console.log(calculateAverage(1, 2, 3));


// * Літерал об'єкта
//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'


// const human = {
//     userName: "Valentyn",
//     hobby: "It",
//     age: 27,
//     greet() {
//         console.log(`hello, ${this.userName}`);
//     }
// }

// human.mood = "happy";

// human.hobby = 'skydiving';

// console.log(human["age"]);

// human.greet();

// const human1 = Object.create(human);
// human1.userName = "Mango";

// console.log(human1.greet());


// * Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-2======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };

// function getBool(obj, key) {
//     return Object.keys(obj).includes(key);

// }
// console.log(getBool(obj, "Model"));


//TODO:============task-3======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// function totalSalary(obj) {
//     let sum = 0;
//     const valuesArray = Object.values(obj);
//     for (const i of valuesArray) {
//         sum += i;
//     }
//     return sum
// }

// console.log(totalSalary(salaries));

//TODO:============task-3======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function multiplyNumeric(obj) {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key) && typeof obj[key] === "number") {
//             obj[key] *= 2;
//         }
//     } return obj
// }

// console.log(multiplyNumeric(menu));

//TODO:============task-6==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.

// const store = { 
//     products: [],
//     hasPpoduct(name) {
//         return this.products.includes(name);
//     },
//     addProduct(product) {
//         this.products.push(product);
//     }
    
// }

// store.addProduct('Tomato');
// store.addProduct('Banana');


// console.log(store);

// console.log(store.hasPpoduct("Tomato"));


