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
