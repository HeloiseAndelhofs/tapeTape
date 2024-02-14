const startGame = document.querySelector(".start");
const secondsCountdown = document.getElementById("seconds");
const score = document.querySelector(".score");
const bushes = document.querySelectorAll(".bush");
const yuumis = document.querySelectorAll(".yuumi");

// console.log(startGame, secondsCountdownc, bushes, yuumis);

let timeLeft = 10;
let currentScore = 0;
let timer;
let apparitionTimer;
let time = randomYuumiTime(1700, 3700);




//Calcul du temps random pour l'apparition de yuumi
function randomYuumiTime(min, max) {
    return Math.round(Math.random() * (max-min)+min);
};




//calcul du buisson random pour l'apparition de yuumi
function randomBush(bushes) {
    const i = Math.floor(Math.random() * bushes.length);
    return bushes[i];
};





//fonction pour faire apparaitre yuumi dans un buisson aléatoir pour une durée aléatoire

function yuumiApparition() {
    bush = randomBush(bushes);
    const yuumiOut = bush.querySelector(".yuumi");
    
    console.log("yuumi's there !");
    
    //animation yuumi
    
    const keyframeAnimation = new KeyframeEffect(
        yuumiOut,
        [
            {offset: '0%',
            opacity: 0,
            transform: 'translateY(-20px)'
            },
            {offset: '5%',
            opacity: 0.7,
            transform: 'translateY(-20px)'
            },
            {offset: '12%',
            opacity: 1,
            transform: 'translateY(-50px)'
                },        
            {offset: '50%',
            opacity: 1,
            transform: 'translateY(-50px)'
            },
            {offset: '88%',
            opacity: 0.3,
            transform: 'translateY(-50px)'
            },
            {offset: '95%',
            opacity: 0.1,
            transform: 'translateY(-50px)'
            },
            {offset: '99%',
            transform: 'translateY(100px)',
            opacity: 0
            }
        ],
{duration: time}
);

const animation = new Animation(keyframeAnimation);
animation.play();


// yuumiOut.addEventListener('click', function() {
//         currentScore++;
//         score.textContent = currentScore;
//         console.log("score incremented: " + currentScore);
    
//     });

yuumiOut.addEventListener('click', clickHandler);
    
function clickHandler() {
    currentScore++;
    score.textContent = currentScore;
    console.log("score incremented: " + currentScore);

    // Remove the event listener after it's clicked
    yuumiOut.removeEventListener('click', clickHandler);
}
};




//fonction pour lancer le jeu

function startGameFnc() {
    currentScore = 0;
    timeLeft = 10;
    clearInterval(timer);
    timer = setInterval(countdownTimer, 1000);
    apparitionTimer = setInterval(yuumiApparition, time);
    yuumiApparition();
};


//fonction timer

function countdownTimer() {
    // const timer = setInterval(countdownTimer, 1000);
    timeLeft--;
    secondsCountdown.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        clearInterval(apparitionTimer);
    }
};
//event tape yuumi et score

startGame.addEventListener("click", startGameFnc);