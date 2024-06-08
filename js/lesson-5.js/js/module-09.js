// ## 1. Theme switcher
// localStorage.setItem("test", JSON.stringify([1, 2]));
// localStorage.setItem("test1", true);
// console.log(JSON.parse(localStorage.getItem("test")));

// // localStorage.removeItem("test");
// // localStorage.clear();
// console.log(localStorage.length);
import { body, checkBox } from "./refs.js";
import LS_KEY from "./refs.js";
checkBox.addEventListener("click", (event) => {
  if (event.currentTarget.checked) {
    body.classList.replace("light", "dark");
    localStorage.setItem(LS_KEY, "dark");
  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem(LS_KEY, "light");
  }
});

function renderPage() {
  const lsData = localStorage.getItem(LS_KEY);
  if (lsData === "dark") {
    body.classList.replace("light", "dark");
    checkBox.checked = true;
  } else {
    body.classList.replace("dark", "light");
  }
}

document.addEventListener("DOMContentLoaded", renderPage);
