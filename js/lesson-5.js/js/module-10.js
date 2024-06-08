// console.log(new Date("2020-01-01"));

// console.log(Date.now());
import { calendar, ageBtn, ageInput, output } from "./refs.js";

const currentDate = new Date();
const month = currentDate.toLocaleDateString("uk-UA", { month: "long" });
const weekDay = currentDate.toLocaleDateString("uk-UA", { weekday: "long" });
const day = currentDate.toLocaleDateString("uk-UA", { day: "numeric" });
const year = currentDate.toLocaleDateString("uk-UA", { year: "numeric" });

calendar.querySelector(".js-month").textContent = month;
calendar.querySelector(".js-day-number").textContent = day;
calendar.querySelector(".js-day").textContent = weekDay;
calendar.querySelector(".js-year").textContent = year;

ageBtn.addEventListener("click", () => {
  const clientDate = new Date(ageInput.value);
  const currentDate = new Date();
  const diff = currentDate - clientDate;
  const result = getAge(diff);
  console.log(result);
  output.textContent = `Your age is ${result} year old`;
});

function getAge(ms) {
  return Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25));
}
