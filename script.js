const startGame = document.querySelector(".start");
const secondsCountdown = document.getElementById("seconds");
const score = document.querySelector(".score");
const bushes = document.querySelectorAll(".bush");
const yuumis = document.querySelectorAll(".yuumi");

let timeLeft = 10;
let currentScore = 0;
let timer;
let apparitionTimer;

//Calcul du temps random pour l'apparition de yuumi
function randomYuumiTime(min, max) {
    return Math.round(Math.random() * (max-min)+min);
};




//calcul du buisson random pour l'apparition de yuumi
function randomBush(bushes) {
    const i = Math.floor(Math.random() * bushes.length);
    return bushes[i];
};

randomDelay = function delay() {
    return Math.random() * (2000 - 500) + 500;
}


// let time = randomYuumiTime(750, 2500);


//fonction pour faire apparaitre yuumi dans un buisson aléatoir pour une durée aléatoire

function yuumiApparition() {
    bush = randomBush(bushes);
    const yuumiOut = bush.querySelector(".yuumi");

    // let appearanceTime = time;
    
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
{duration: randomYuumiTime(900, 2700), delay: randomDelay()}
);

const animation = new Animation(keyframeAnimation);
animation.play();

yuumiOut.addEventListener('click', clickHandler);
    
function clickHandler() {
    currentScore += 1;
    score.textContent = currentScore;
    console.log("score incremented: " + currentScore);

    // Enleve le click après avoir été activer
    yuumiOut.removeEventListener('click', clickHandler);
}
};



//listener de base pour la 1ere partie
startGame.addEventListener("click", startGameFnc); 

//fonction pour lancer le jeu

function startGameFnc() {
    currentScore = 0;
    secondsCountdown.textContent = "10 seconds";
    timeLeft = 10;

    clearInterval(timer);
    timer = setInterval(countdownTimer, 1000);//décompte toutes les 1000 milisecondes
    yuumiApparition();
    clearInterval(apparitionTimer);
    apparitionTimer = setInterval(yuumiApparition, randomYuumiTime(1300, 2900));
    //animation se lance toutes les "randomYuumiTime"

    
    //rendre start button inutilisable apres un click 
    startGame.removeEventListener("click", startGameFnc);

    //reactive le bouton après 10 secondes 
    setTimeout(function() {
        startGame.addEventListener("click", startGameFnc);
    }, 10000); 
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

function bravo() {
    const bravoClass = document.querySelector(".none.bravo");

    const p = document.createElement("p");
    bravoClass.appendChild(p);
    p.textContent = `You just beat ${currentScore} Yuumi !
    Wanna try again ?`

    bravoClass.classList.remove("none");

    document.getElementById("restart").addEventListener("click", ()=>{
        bravoClass.classList.add("none");
        p.remove();

        setTimeout(startGameFnc, 1000);
     });


    document.getElementById("cancel").addEventListener("click", ()=>{
        bravoClass.classList.add("none");
        secondsCountdown.textContent = "10 seconds";
        p.remove();
        score.textContent = 0;
});
};

