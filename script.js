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
const time = randomYuumiTime(2000, 5000);




//Calcul du temps random pour l'apparition de yuumi
function randomYuumiTime(min, max) {
    return Math.round(Math.random() * (max-min)+min);
};
// console.log(randomYuumiTime(500, 1200));

//calcul du buisson random pour l'apparition de yuumi
function randomBush(bushes) {
    const i = Math.floor(Math.random() * bushes.length);
    return bushes[i];
};

// console.log(randomBush(bushes));



document.addEventListener('click', function(event) {
    if (event.target.classList.contains('yuumi')) {
            currentScore++;
            score.textContent = currentScore;
            console.log("score incremented: " + currentScore);
        }
    });



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
            opacity: 0.5,
            transform: 'translateY(-40px)'
            },
            {offset: '5%',
            opacity: 1,
            transform: 'translateY(-50px)'
            },
            {offset: '25%',
            opacity: 1,
            transform: 'translateY(-50px)'
            },        
            {offset: '50%',
            opacity: 1,
            transform: 'translateY(-50px)'
            },
            {offset: '75%',
            opacity: 1,
            transform: 'translateY(-50px)'
            },
            {offset: '100%',
            transform: 'translateY(100px)'
            }
        ],
    {duration: time}
);

const animation = new Animation(keyframeAnimation);
animation.play();
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




// yuumiOut.addEventListener('click', function() {
//     currentScore++;
//     score.textContent = currentScore;
//     console.log("score incremented: " + currentScore);

// });

        
        // yuumis.forEach(yuumi => {
        //     yuumi.addEventListener("click", ()=>{
        //         currentScore++
        //         score.textContent = currentScore;
        //         console.log("coucou");
        //     });
        // });
        
        startGame.addEventListener("click", startGameFnc);