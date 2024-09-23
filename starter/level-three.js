/*
 * DOTS: Level Three
 *
 */

let score = 0
const scoreDisplay = document.querySelector('.score.js-score')
const levelWinner = document.querySelector('.level-winner')
const ballElements = document.querySelectorAll('.ball.js-ball[data-increment]')

// for (let i=0; i< ballElements.length; i++) {
//     ballElements[i].addEventListener('click', ()=>{
//         console.log(ballElements[i].getAttribute('data-increment'))
//         const incrementValue = parseInt(ballElements[i].getAttribute('data-increment'))
//         score += incrementValue
//    scoreDisplay.innerText = score;
//    if (score >= 100) {
//     levelWinner.style.opacity = 1;
//    }
//     })
// }

ballElements.forEach((ballElement)=>{
    ballElement.addEventListener('click',()=>{
        const incrementValue = parseInt(ballElement.getAttribute('data-increment'))
        score += incrementValue
    scoreDisplay.innerText = score;
    if (score >= 100){
        levelWinner.style.opacity =1;
    }
    })
})




