//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].
// const getNewArray = (arr) => arr.map((number) => number ** 2);

// const res = getNewArray([1, 2, 3, 4, 5]);

// console.log("getNewArray :>> ", res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// const flatArray = (arr) => arr.flatMap((item) => item.values);

// const res = flatArray(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];
// const checkAge = (arr) => arr.some((item) => item.age < 20);
// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const checkEvenArray = (arr) => arr.every((el) => el % 2 === 0);

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const oddNumberInArray = (arr) => arr.find((el) => el % 2 !== 0);

// console.log("oddNumber: ", oddNumberInArray(numbers));

//TODO:=========task-06=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const arr = [1, 2, 3, 4, 5];

// const getNumber = (arr, value) => arr.find((el) => el > value);

// const res = getNumber(arr, 3);
// console.log("object :>> ", res);

//TODO:=========task-07=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 20, 5, 1, 3];

// const sortedArray = (array) => array.toSorted((a, b) => b - a);

// const res = sortedArray(numbersArray);
// console.log(res);

//TODO:===============task-08===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const sortedArray = (array) => array.toSorted((a, b) => b.localeCompare(a));

// const res = sortedArray(stringArray);
// console.log(res);
//
//TODO:===============task-09===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const ageSortedUsers = (array) =>
//   array.toSorted((a, b) => a.name.localeCompare(b.name));

// const res = ageSortedUsers(users);
// console.log(res);

//TODO:=========task-10=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const getAge = (array, value) =>
//   array
//     .filter((item) => item.age > value)
//     .map((item) => item.name)
//     .toSorted((a, b) => a.localeCompare(b));
// const res = getAge(user, 20);
// console.log("object :>> ", res);

//TODO:=========task-11=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const sum = (array) => array.reduce((acc, el) => acc + el, 0);
// const res = sum(numbers);
// console.log(res);

//TODO:=========task-12=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

// const arr = [1, 2, 3, 4, 5];
// const averageValue = (array) =>
//   array.reduce((acc, el) => acc + el / array.length, 0);
// const res = averageValue(arr);
// console.log(res);

//* Модуль 6. Прототипи та класи
//TODO:=========task-01=================
/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

// class Calculator {

//   constructor() {
//     this.result = 0;
//   }
//   number(value) {
//     this.result = value;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }

//   add(num) {
//     this.result += num;
//     return this;
//   }

//   substruct(num) {
//     this.result -= num;
//     return this;
//   }

//   divide(num) {
//     this.result /= num;
//     return this;
//   }

//   multiply(num) {
//     this.result *= num;
//     return this;
//   }
// }

// const calc = new Calculator();
// console.log(calc.result);

// const res = calc.number(10).add(5).substruct(10).multiply(2).divide(5).getResult();
// console.log(res);



//! Приватні властивості
//TODO:=========task-02=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#email = email;
//     this.#login = login;
//   }

//   get login() {
//     return this.#login;
//   }

//   set changeLogin(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client('mango', 'mango@gmail.com');

// client.changeLogin = 'kiwi';
// console.log(client.login);


// client.changeEmail = 'kiwi@gmail.com';
// console.log(client.email);

//! Статичний метод
//TODO:=========task-03=================
/**
 * Напиши клас Notes який управляє колекцією нотаток у властивості items.
 * Нотатка - це об'єкт із властивостями text і priority.
 * Додай класу статичний метод Priopity, який буде повертати об'єкт із пріоритетами.
 * Додай методи
 * - addNote(note),
 * - removeNote(text)
 * - updatePriority(text, newPriority)
 */

// const note1 = new Notes();
// console.log(note1);
// note1.addNote({ text: 'Купити хліб', priority: Notes.Priority().LOW });
// note1.addNote({
//   text: 'Сходити на практику',
//   priority: Notes.Priority().HIGHT,
// });
// console.table(note1.items);

// note1.removeNote('Купити хліб');
// console.table(note1.items);

// note1.updatePriority({
//   text: 'Сходити на практику',
//   newPriority: Notes.Priority().LOW,
// });
// console.table(note1.items);
// console.log(note1);

//! Практика наслідування у класах.
//TODO:=========task-04=================
/**
  |============Person================
  | Cтворіть клас `Person`, який містить наступні властивості:
  |  - `name` - ім'я людини;
  |  - `age`- вік людини;
  |  - `gender` - стать людини;
  |  - `email`- електронна пошта людини.
  |
  | ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
  |============================
*/

// const person = new Person('John', 30, 'male', 'john@hmail.com');

/**
  |=============Employee===============
  |Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  |  - salary - зарплата співробітника;
  |  - department - відділ, в якому працює співробітник.
  |  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
  |============================
*/

// const employee = new Employee(
//   5000,
//   'developer',
//   'Bob',
//   45,
//   'male',
//   'bob@hmail.com'
// );
// console.log(employee.getEmployeeDetails());
