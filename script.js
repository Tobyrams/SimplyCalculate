"use strict";

const display = document.getElementById("display");
const ansDisplay = document.getElementById("ansDisplay");
let currentVal = "";

//Button Operations
const btnDiv = document.querySelector(".operation-Div");
const btnTimes = document.querySelector(".operation-Times");
const btnMinus = document.querySelector(".operation-Minus");
const btnAdd = document.querySelector(".operation-Add");
const button = document.querySelector(".calButton");
const btnANS = document.querySelector(".ANS-Btn");

const buttons = document.querySelectorAll(".button");

// Adds the clicked buttons value to the display
function appendToDisplay(value) {
  currentVal += value;
  display.value = currentVal;
  btnDiv.classList.remove("operationActive");
  btnTimes.classList.remove("operationActive");
  btnMinus.classList.remove("operationActive");
  btnAdd.classList.remove("operationActive");
}

//Clears the display
function clearDisplay() {
  currentVal = "";
  display.value = currentVal;
  ansDisplay.value = currentVal;
  btnDiv.classList.remove("operationActive");
  btnTimes.classList.remove("operationActive");
  btnMinus.classList.remove("operationActive");
  btnAdd.classList.remove("operationActive");
}

//Removes the last value from the display
function Del() {
  currentVal = currentVal.slice(0, -1); // Remvoes the last value in the display
  display.value = currentVal;
  btnDiv.classList.remove("operationActive");
  btnTimes.classList.remove("operationActive");
  btnMinus.classList.remove("operationActive");
  btnAdd.classList.remove("operationActive");
}

btnDiv.addEventListener("click", function () {
  btnDiv.classList.toggle("operationActive");
});

btnTimes.addEventListener("click", function () {
  btnTimes.classList.toggle("operationActive");
});

btnMinus.addEventListener("click", function () {
  btnMinus.classList.toggle("operationActive");
});

btnAdd.addEventListener("click", function () {
  btnAdd.classList.toggle("operationActive");
});

function calculate() {
  // Using eval to evaluate the mathematical expression (currentValue).
  currentVal = eval(currentVal).toString();
  ansDisplay.value = currentVal;
  currentVal = "";
}

//DarkMode
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  //Add the class to the body
  document.body.classList.add("darkmode");
  document
    .querySelector(".themeIcon")
    .classList.remove("bi-brightness-low-fill");
  document.querySelector(".themeIcon").classList.add("bi-moon-fill");
  // Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  document.querySelector(".themeIcon").classList.add("bi-brightness-low-fill");
  document.querySelector(".themeIcon").classList.remove("bi-moon-fill");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});
