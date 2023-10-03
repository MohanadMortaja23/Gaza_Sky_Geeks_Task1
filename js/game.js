const userScore_span = document.getElementById("me");
const cpuScore_span = document.getElementById("computer");
const round = document.querySelector(".round");
const restart = document.getElementById("restart");
const result = document.getElementById("result")
const modal = document.querySelector(".modal");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const start = document.getElementById("start");
const options = document.querySelectorAll(".options button");
const userHand = document.querySelector(".user-hand");
const cpuHand = document.querySelector(".cpu-hand");
const hands = document.querySelectorAll(".hands img");
const pname = document.querySelector(".pname");
const cname = document.querySelector(".cname");
let userScore = 0;
let cpuScore = 0;
let rounds = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    const cpuChoice = choices[randomNumber];
    return cpuChoice;
}
function win(userChoice, cpuChoice) {



    
    userScore++;
    setTimeout(() => {
        userScore_span.innerHTML = userScore;
        cpuScore_span.innerHTML = cpuScore;
        cname.innerHTML = cpuChoice;
        pname.innerHTML = userChoice;
        start.innerHTML = 'You won';
        result.innerHTML = `<img src="img/win.png">`;
        modal.style.display = 'block';
    }, 2500);

    setTimeout(() => {
        modal.style.display = 'none';
    }, 4500);

}

function lose(userChoice, cpuChoice) {

    cpuScore++;
    setTimeout(() => {
        userScore_span.innerHTML = userScore;
        cpuScore_span.innerHTML = cpuScore;
        cname.innerHTML = cpuChoice;
        pname.innerHTML = userChoice;
        start.innerHTML = 'You lost!';
        result.innerHTML = `<img src="img/lose.png">`;
        modal.style.display = 'block';
    }, 2500);

    setTimeout(() => {
        modal.style.display = 'none';
    }, 4500);

}

function tied(userChoice, cpuChoice) {
    setTimeout(() => {
        userScore_span.innerHTML = userScore;
        cpuScore_span.innerHTML = cpuScore;
        cname.innerHTML = cpuChoice;
        pname.innerHTML = userChoice;
        start.innerHTML = `<p>It's a tied</p>`;
    }, 2500);

}

function play(userChoice, cpuChoice) {

    rounds++;
    round.innerHTML = rounds;

    switch (userChoice + cpuChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, cpuChoice);
            console.log("win");
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, cpuChoice);
            console.log("lose");
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            tied(userChoice, cpuChoice);
            console.log("tied");
            break;
    }

}

hands.forEach(hand => {

    hand.addEventListener("animationend", function () {
        this.style.animation = "";
    });

});

function main() {

    options.forEach(option => {

        option.addEventListener("click", function () {
            const cpuChoice = getComputerChoice();
            play(this.textContent, cpuChoice);
            setTimeout(() => {
                userHand.src = `img/${this.textContent}.png`;
                cpuHand.src = `img/${cpuChoice}.png`;
            }, 2000);
            userHand.style.animation = "shakeuser 2s ease";
            cpuHand.style.animation = "shakecpu 2s ease";

        });

    });

}

function clearModal(e) {

    if (e.target == modal) {
        modal.style.display = "none";
    }

}

window.addEventListener('click', clearModal);

function restartGame() {

    userScore = 0;
    cpuScore = 0;
    rounds = 0;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    round.innerHTML = rounds;
    cname.innerHTML = 'C';
    pname.innerHTML = 'P';
    start.innerHTML = 'Make your choice!';
    userHand.src = `img/Rock.png`;
    cpuHand.src = `img/Rock.png`;

}

restart.addEventListener('click', restartGame);

main();