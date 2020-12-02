// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const order = document.getElementById("js-order"),
  myRange = document.getElementById("myRange"),
  guessForm = document.getElementById("js-guess"),
  myGuess = document.querySelector(".myGuess"),
  resultdesc = document.getElementById("js-resultdesc"),
  result = document.getElementById("js-result"),
  play = document.getElementById("play");

// describe slider range
let val1 = myRange.min,
  val2 = myRange.value,
  mysubmit = "not yet submitted",
  answer = Math.floor(Math.random() * (val2 - val1) + val1);

function loadInitScreen() {
  order.innerText = `Generate number between ${val1} and ${val2}`;
  resultdesc.innerText = `Your choice: ${mysubmit}`;
}

function handleChangeSlider(e) {
  e.preventDefault();
  val1 = myRange.min;
  val2 = myRange.value;
  order.innerText = `Generate number between ${val1} and ${val2}`;
  answer = Math.floor(Math.random() * (val2 - val1) + val1);
  console.log(answer);
}

// my guess submit
function handleSubmitGuess(e) {
  e.preventDefault();
  const currentValue = myGuess.value;
  mysubmit = parseInt(currentValue);
  resultdesc.innerText = `Your choice: ${mysubmit}`;
  answer === mysubmit
    ? (result.innerText = "You WIN!")
    : (result.innerText = "You LOSE");
  console.log(answer, mysubmit);
  // myGuess.value = "";
}

function init() {
  loadInitScreen();
  myRange.addEventListener("change", handleChangeSlider);
  guessForm.addEventListener("submit", handleSubmitGuess);
  play.addEventListener("submit", handleSubmitGuess);
  // play.addEventListener("click", handleClickPlay);
}

init();
