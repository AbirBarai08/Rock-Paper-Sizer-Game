const choices = document.querySelectorAll(".choice");
const msgBox = document.getElementById("msg-box");
let userScore = 0;
let compScore = 0;
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msgBox.innerHTML = `You win! your ${userChoice} beats ${compChoice}`;
        msgBox.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msgBox.innerHTML = `You Loss! ${compChoice} beats your ${userChoice}`;
        msgBox.style.backgroundColor = "red";
    }
}

const drawGame = () => {
    msgBox.innerText = "Draw game! Let's play again";
    msgBox.style.backgroundColor = "rgb(2, 2, 73)";
}

const genCompChoice = () => {
    const compOptions = ["rock" , "paper" , "scissor"];
    const compOptionIdx = Math.floor(Math.random() * 3);
    return compOptions[compOptionIdx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
} 

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})