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