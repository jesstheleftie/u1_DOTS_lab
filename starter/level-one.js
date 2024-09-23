/*
 * DOTS: Level One
 *
 */

let score = 0
const scoreDisplay = document.querySelector('.score.js-score')

const levelWinner = document.querySelector('.level-winner')
const ball = document.querySelector('.ball.js-ball')
ball.addEventListener('click', ()=>{
   score += 10;
   scoreDisplay.innerText = score;
   if (score >= 100) {
    levelWinner.style.opacity = 1;
   }
})



