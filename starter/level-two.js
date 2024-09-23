/*
 * DOTS: Level Two
 *
 */
let score = 0
const scoreDisplay = document.querySelector('.score.js-score')
const levelWinner = document.querySelector('.level-winner')
const ballElements = document.querySelectorAll('.ball.js-ball')
for (let i=0; i< ballElements.length; i++) {
    ballElements[i].addEventListener('click', ()=>{
        score += 10;
   scoreDisplay.innerText = score;
   if (score >= 100) {
    levelWinner.style.opacity = 1;
   }
    })
}



