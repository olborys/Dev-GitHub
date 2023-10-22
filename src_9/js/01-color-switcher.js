const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
let timerId;

startButton.addEventListener("click", () => {
  if (!timerId) {
    timerId = setInterval(() => {
      function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")}`;
      }
      const randomColor = getRandomHexColor();
      document.body.style.backgroundColor = randomColor;
    }, 1000);
    startButton.disabled = true;
  }
});

stopButton.addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  startButton.disabled = false;
});
