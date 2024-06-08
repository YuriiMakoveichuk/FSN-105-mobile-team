//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return 'hello world';
// }
// function greet() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Hello world')
//     }, 2000)
//   })
// }
// greet().then( res => {console.log(res)});
//TODO:====================02==========================
/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

const getData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 1;
      //   console.log(data);
      res(data);
    }, 1000);
  });

const getNewData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 2;
      //   console.log(data);
      res(data);
    }, 1000);
  });

const getAnotherData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 3;
      //   console.log(data);
      res(data);
    }, 1000);
  });

const getLastData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 4;
      //   console.log(data);
      res(data);
    }, 1000);
  });

//TODO:====================03==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

const value = prompt('Paste value:');

function checkValue(value) {
  return new Promise((res, rej) => {
    if(isNaN(value)) {
      return rej('Error')
    } 

    if(value%2 === 0) {
      setTimeout(() => {
       return  res('Even')
      }, 1000)
    } else {
      setTimeout(() => {
       return res('Odd')
      }, 2000)
    }
  })
}

checkValue(value).then((res) => console.log(res, ':then')).catch((err) => console.log(err, ': catch'));