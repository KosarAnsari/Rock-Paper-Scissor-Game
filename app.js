let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    //rock,paper,Scissors
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log('game was draw');
    msg.innerText ="Game was Draw. Play again! ";
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log('User Win!')
        msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Booo! You are a Loser. ${compChoice} beats your ${userChoice}`;
        console.log("Booo! You are a Loser");
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice", compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //Scissors , paper
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice = "paper") {
            // rock , scissors

            userWin = compChoice === 'scissors' ? false : true;
        } else {//user -> Scissors
            //Computer -> rock , paper
            userWin = compChoice === 'rock' ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }


}


choices.forEach((choice) => {

    console.log('choice');
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});