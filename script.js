const startGame = document.querySelector(".start");
const secondsCountdown = document.getElementById("seconds");
const score = document.querySelector(".score");
const bushes = document.querySelectorAll(".bush");
const yuumis = document.querySelectorAll(".yuumi");

// console.log(startGame, secondsCountdownc, bushes, yuumis);

let timeLeft = 10;
let currentScore = 0;


//fonction timer

function countdownTimer() {
    timeLeft--;
    secondsCountdown.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
    }
};

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


//fonction pour faire apparaitre yuumi dans un buisson aléatoir pour une durée aléatoire

function yuumiApparition() {
   time = randomYuumiTime(2000, 5000);
   bush = randomBush(bushes);
   const yuumiOut = bush.querySelector(".yuumi");
   
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
                ransform: 'translateY(100px)'
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
    timer = setInterval(countdownTimer, 1000);
    yuumiApparition();
};


//  console.log(yuumiApparition());

//event tape yuumi et score

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('yuumi')) {
        currentScore++;
        score.textContent = currentScore;
        console.log("coucou");
    }
});

// yuumis.forEach(yuumi => {
//     yuumi.addEventListener("click", ()=>{
//         currentScore++
//         score.textContent = currentScore;
//         console.log("coucou");
//     });
// });

startGame.addEventListener("click", startGameFnc);