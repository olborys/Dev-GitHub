// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
//     <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// ----------------------------------- | ------------------------------------- | --------------------------------------

const userInput = document.querySelector("#name-input");
const userOutput = document.querySelector("#name-output");

userInput.addEventListener("input", (event) => {
  userOutput.textContent = event.currentTarget.value;
});
