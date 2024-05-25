//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const listBox = document.querySelector(".box-list");

// function creatBoxs(amount, rootSelector) {
//   const divContainer = document.createElement("div");
//   divContainer.classList.add("number-container");
//   for (let i = 0; i < amount; i++) {
//     // console.log(i);
//     const div = document.createElement("div");
//     div.classList.add("number");
//     div.textContent = randomNumber();
//     if (div.textContent % 2 === 0) {
//       div.classList.add("even");
//     } else {
//       div.classList.add("odd");
//     }
//     divContainer.appendChild(div);
//   }
//   rootSelector.after(divContainer);
// }
// creatBoxs(100, listBox);

function creatBoxs(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const li = document.createElement("li");
    li.classList.add("number");
    li.textContent = randomNumber();
    if (li.textContent % 2 === 0) {
      li.classList.add("even");
    } else {
      li.classList.add("odd");
    }
    fragment.appendChild(li);
  }
  listBox.append(fragment);
}
creatBoxs(100);

// console.log(divContainer);
//TODO:=========task-02=================
// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

const filmList = document.querySelector(".film-list");
function createMarkup(arr) {
  return arr
    .map(
      (el) => `<li class="film-item" id="${el.id}">
     <img src="${el.imgUrl}" alt="${el.title}" />
     <p>${el.title}</p>
</li>`
    )
    .join("");
}
filmList.innerHTML = createMarkup(films);
// Приклад елементу списку
{
  /* <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li> */
}

const watchedFilms = ["film_2", "film_4", "film_5"];

watchedFilms.forEach(
  (el) => (filmList.querySelector(`#${el}`).style.opacity = "0.5")
);

//TODO:=========task-03=================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на "Розкрити", у разі повторного натискання текст знову стає доступним і кнопка набуває початкового вигляду.

const btn = document.querySelector(".js-password-button");
const inputElem = document.querySelector(".js-password-input");
btn.addEventListener("click", handlerClick);
function handlerClick() {
  if (inputElem.type === "password") {
    inputElem.type = "text";
    btn.textContent = "Приховати";
  } else {
    inputElem.type = "password";
    btn.textContent = "Показати";
  }
}
//TODO:=========task-04=================
// Кнопка "Зменшити" робить квадрат меншим на 20 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.

const decreseBtn = document.querySelector(".js-decrease");
const increseBtn = document.querySelector(".js-increase");
const div = document.querySelector(".box");

decreseBtn.addEventListener("click", onclick);
increseBtn.addEventListener("click", onclick);

function onclick(event) {
  const currentSize = div.offsetWidth;

  if (event.target.id === "increase") {
    div.style.width = currentSize + 20 + "px";
    div.style.height = currentSize + 20 + "px";
  }
  if (event.target.id === "decrease") {
    div.style.width = currentSize - 20 + "px";
    div.style.height = currentSize - 20 + "px";
  }
}

//TODO:=========task-05=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу html та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const accardionList = document.querySelector(".js-accordion-list");

accardionList.addEventListener("click", (event) => {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  event.target.nextElementSibling.classList.toggle("active");
});

//TODO:=========task-06=======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу html для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */

const paginationList = document.querySelector(".pagination");

paginationList.addEventListener("click", (event) => {
  if (event.target.nodeName !== "LI") {
    return;
  }
  const currentBtn = event.target;
  const activeBtn = paginationList.querySelector(".active");

  if (currentBtn.dataset.type === "page") {
    activeBtn.classList.remove("active");
    currentBtn.classList.add("active");
  }

  if (
    currentBtn.dataset.type === "next" &&
    activeBtn.nextElementSibling.dataset.type === "page"
  ) {
    activeBtn.classList.remove("active");
    activeBtn.nextElementSibling.classList.add("active");
  }

  if (
    currentBtn.dataset.type === "prev" &&
    activeBtn.previousElementSibling.dataset.type === "page"
  ) {
    activeBtn.classList.remove("active");
    activeBtn.previousElementSibling.classList.add("active");
  }

  console.log(paginationList.querySelector(".active"));
});
