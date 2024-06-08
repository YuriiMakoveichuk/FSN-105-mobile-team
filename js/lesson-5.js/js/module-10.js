// console.log(new Date("2020-01-01"));

// console.log(Date.now());
import { calendar } from "./refs.js";

const currentDate = new Date();
const month = currentDate.toLocaleDateString("uk-UA", { month: "long" });
const weekDay = currentDate.toLocaleDateString("uk-UA", { weekday: "long" });
const day = currentDate.toLocaleDateString("uk-UA", { day: "numeric" });
const year = currentDate.toLocaleDateString("uk-UA", { year: "numeric" });

calendar.querySelector(".js-month").textContent = month;
calendar.querySelector(".js-day-number").textContent = day;
calendar.querySelector(".js-day").textContent = weekDay;
calendar.querySelector(".js-year").textContent = year;

