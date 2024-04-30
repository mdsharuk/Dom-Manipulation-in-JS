"use strict";

// console.log(document.querySelector(".massage").textContent);

// document.querySelector(".massage").textContent = " 🏇 correct number !";
// console.log(document.querySelector(".massage").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// click event handling
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let heighScore = 0;

//  create a game logic

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".massage").textContent = "⛔ No Number";
  } else if (guess == secretNumber) {
    document.querySelector(".massage").textContent = "🏇 correct number";
    document.querySelector(".number").textContent = secretNumber;

    // style using dom
    document.querySelector("body").style.backgroundColor = "#800000";
    if (score > heighScore) {
      heighScore = score;
      document.querySelector(".heightScore").textContent = heighScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".massage").textContent = "🥴 number is too heigh";
      score--;
      document.querySelector(".score").textContent = score;
    } else
      document.querySelector(".massage").textContent = "❌ You lost the game !";
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".massage").textContent = "🥴 number is too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else
      document.querySelector(".massage").textContent = "❌ You lost the game !";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  let score = 20;
  const secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".massage").textContent = "Start guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
});
