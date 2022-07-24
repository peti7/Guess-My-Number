'use strict';

const numInput = document.querySelector("input");
const checkBtn = document.querySelector(".check");
const number = document.querySelector(".number");
const statusText = document.querySelector(".status-text");
const scoreText = document.querySelector(".score span");
const highScoreText = document.querySelector(".high-score span");
const againBtn = document.querySelector(".again");


let score = 20;
let highScore = 0;
let randomNum = Math.floor(Math.random() * 20) + 1;

checkBtn.addEventListener("click", () => {
    let inputVal = numInput.value;
    if(!inputVal) return;
    score--;
    scoreText.textContent = score;
    if(inputVal == randomNum){
        statusText.textContent = "Correct number!";
        number.textContent = randomNum;
        document.body.style.backgroundColor = 'green';
        if(score > highScore){
            highScore = score;
            highScoreText.textContent = score;
        }
    }
    if(inputVal > randomNum){
        statusText.textContent = "Too high number!";
    }else if(inputVal < randomNum){
        statusText.textContent = "Too low number!";
    }
});

againBtn.addEventListener("click", () => {
    number.textContent = "?";
    numInput.value = '';
    document.body.style.backgroundColor = "#212121";
    score = 20;
    scoreText.textContent = score;
    randomNum = randomNum = Math.floor(Math.random() * 20) + 1;
});
