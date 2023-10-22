// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// ----------------------------------- | ------------------------------------- | --------------------------------------

const userInput = document.querySelector("#validation-input");
userInput.addEventListener("blur", checkInput);

function checkInput() {
  const inputValue = Number(userInput.value.trim().length);
  const dataLength = Number(userInput.dataset.length);

  if (inputValue === dataLength) {
    userInput.classList.remove("invalid");
    userInput.classList.add("valid");
  } else {
    userInput.classList.remove("valid");
    userInput.classList.add("invalid");
  }
}
