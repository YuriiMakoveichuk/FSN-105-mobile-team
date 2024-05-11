//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = "bcde";

// if ("a" === str[0]) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// str.startsWith("a") ? console.log("Yes") : console.log("No");

//TODO: 2 ===================================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

// const firstName = "Віктор";
// const lastName = "Сташко";

// const firstNameLength = firstName.length;
// const lastNameLength = lastName.length;

// const totalLetters = firstNameLength + lastNameLength;

// if (firstNameLength > 4 && lastNameLength > 5) {
//   console.log(totalLetters);
// } else {
//   console.log("неможливо виконати умову");
// }

// firstNameLength > 4 && lastNameLength > 5
//   ? console.log(totalLetters)
//   : console.log("неможливо виконати умову");

// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// function checkNumber(number) {
//     return number >= 55 && number <= 99 ? 'Yes' : 'No';
// }

// const result = checkNumber(60);
// console.log(result);

// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaxim = 10;
// if (ageMaxim >= 0 && ageMaxim <= 16) {
//     console.log('діти');
// } else if (ageMaxim >= 17 && ageMaxim <= 60) {
//     console.log('дорослі');
// } else if (ageMaxim >= 61 && ageMaxim <= 100) {
//     console.log('пенсіонери');
// } else {
//     console.log('горец)');
// }

// ageMaxim >= 0 && ageMaxim <= 16 ? console.log('діти') : ageMaxim >= 17 && ageMaxim <= 60 ? console.log('дорослі') : ageMaxim >= 61 && ageMaxim <= 100 ? console.log('пенсіонери') : console.log('горец)');

//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

//const drink = prompt("choose a drink");
// function orderDrink(drink) {
//   let price = 0;
//   switch (drink) {
//     case "tea":
//       price = 40;
//       break;

//     case "coffe":
//       price = 60;
//       break;

//     case "juce":
//       price = 50;
//       break;

//     default:
//       return "Drink is not exist";
//   }
//   return `Your order ${price} UAH`;
// }

// const result = orderDrink(drink);
// alert(result);

// let count = 0;

// while (count <= 100) {
//   console.log(count);
//   count += 1;
// }

// TODO: 5 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// let num = Number(prompt("Введіть число більше 100"));

// while (num < 100) {
//   num = Number(prompt("Введіть число більше 100"));
// }

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 0;
// const max = 100;
// let total = 0;
// for (let i = max; i >= min; i--) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }
// console.log(total);

// Знайдіть число 49  у проміжку чисел від 1 до 100 та вийдіть з циклу.

// for (let i = 1; i <= 100; i++) {
//   if (i === 49) {
//     console.log(i);
//     break;
//   }
// }

//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *****
// let star = "*";
// for (let i = 0; i < 7; i++) {
//   console.log(star);
//   star += "*";
// }

// Порахуйте суму чисел від 12 до 27

// let total = 0;

// for (let i = 12; i <= 27; i++) {
//     console.log(`${total} + ${i} = ${total+i}`);
//     total += i;
// }

// console.log(total);

//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// const number = 60;

// function fn(a){
// for (let index = 1; index <= a; index++) {
//     if (index % 3 === 0 && index % 5 === 0) {
//        console.log("fizzbuzz");
//    } else if (index % 5 === 0) {
//        console.log("buzz");
//    } else if (index % 3 === 0) {
//        console.log("fizz");
//     } else {
//         console.log(index);
//    }
//     }
// }

// fn(number);
