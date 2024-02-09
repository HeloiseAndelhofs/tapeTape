const startGame = document.querySelector(".start");
const secondsCountdownc = document.getElementById("seconds");
const bushes = document.querySelectorAll(".bush");
const yuumis = document.querySelectorAll(".yuumi");
const keyframeAnimation = new KeyframeEffect

// console.log(startGame, secondsCountdownc, bushes, yuumis);

let time;

//Calcul du temps random pour l'apparition de yuumi
function randomYuumiTime(min, max) {
    return Math.round(Math.random() * (max-min)+min);
}
// console.log(randomYuumiTime(500, 1200));

//calcul du buisson random pour l'apparition de yuumi
function randomBush(bushes) {
    const i = Math.floor(Math.random() * bushes.length);
     return bushes[i];
}

// console.log(randomBush(bushes));

//fonction pour faire apparaitre yuumi dans un buisson aléatoir pour une durée aléatoire
function yuumiApparition() {
   time = randomYuumiTime(500, 1200);
   bush = randomBush(bushes);
}

//  console.log(yuumiApparition());