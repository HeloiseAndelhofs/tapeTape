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
let time = randomYuumiTime(1300, 2900);




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

//appel de la fonction et du click pour le score
yuumiOut.addEventListener('click', clickHandler);
    
function clickHandler() {
    currentScore += 1;
    score.textContent = currentScore;
    console.log("score incremented: " + currentScore);

    // Enleve le click après avoir été activer
    yuumiOut.removeEventListener('click', clickHandler);
}
};



//fonction pour lancer le jeu

function startGameFnc() {
    currentScore = 0;
    secondsCountdown.textContent = "10 seconds";
    timeLeft = 10;
    //clearInterval(timer);//clear pour etre sure de démarrer à 10
    timer = setInterval(countdownTimer, 1000);//décompte toutes les 1000 milisecondes
    apparitionTimer = setInterval(yuumiApparition, randomYuumiTime(1300, 2900));//animation se lance toutes les "randomYuumiTime"
    yuumiApparition();
};


//fonction timer

function countdownTimer() {
    timeLeft--;
    secondsCountdown.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer); //stop le timer à 0 et le remets à 10
        clearInterval(apparitionTimer);//clear à la fin des 10 secondes, plus d'animation
       setTimeout(bravo, 1200);
    }
};



//afficher message avec le score, la possibilite d'arerter ou de relancer le jeu

// function bravo() {
//     const bravoAppear = document.getElementsByClassName("none");

//     const p = document.createElement("p");
//     bravoAppear[0].appendChild(p);
//     p.textContent = "You just beat "


//     bravoAppear[0].classList.add("bravo");
//     bravoAppear[0].classList.remove("none");


//     document.getElementById("restart").addEventListener("click", ()=>{
//         bravoAppear[0].classList.remove("bravo");
//         bravoAppear[0].classList.add("none");

//         startGameFnc();

//     document.getElementById("cancel").addEventListener("click", ()=>{
//         bravoAppear[0].classList.remove("bravo");
//         bravoAppear[0].classList.add("none");
//         secondsCountdown.textContent = "10 seconds"
//     })
// });


//event tape yuumi et score

startGame.addEventListener("click", startGameFnc); 