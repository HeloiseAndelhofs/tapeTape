let currentScore = 0;
// console.log(target.classList.contains('.yuumi'));
console.log(document.querySelectorAll(".yuumi"));

// document.addEventListener('click', function(event) {
//     console.log("je déteste yuumi");
//     if (event.target.classList.contains('yuumi')) {
//         console.log("yuumi?");
//             currentScore++;
//             score.textContent = currentScore;
//             console.log("score incremented: " + currentScore);
//         }
//     });

const bushes = document.querySelectorAll(".bush")

function randomBush(bushes) {
    const i = Math.floor(Math.random() * bushes.length);
    return bushes[i];
};


bush = randomBush(bushes);
const yuumiOut = bush.querySelector(".yuumi");

console.log(yuumiOut);

let yuumis = document.querySelectorAll(".yuumi");

// yuumiOut.addEventListener('click', function() {
//     console.log("ahhahahaah");
//     currentScore++;
//     score.textContent = currentScore;
//     console.log("score incremented: " + currentScore);
// });

// yuumiOut.addEventListener("click", function(){console.log("coucou")});

function whack(e) {
    if(!e.isTrusted) return; 
    currentScore++;
    scoreBoard.textContent = score;
    console.log("yes?");
  }

yuumis.forEach(yuumi => yuumi.addEventListener("click", whack)
);

// document.addEventListener('click', function(event) {
//     console.log("hello world");
//     if (event.target.classList.contains('yuumi')) {
//         console.log("Yuumi clicked!");
//         currentScore++;
//         score.textContent = currentScore;
//         console.log("Score incremented: " + currentScore);
//     }
// });


// console.log(bush);
// console.log(yuumiOut);