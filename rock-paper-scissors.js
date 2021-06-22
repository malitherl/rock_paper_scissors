
//pseudocode down below 


//the computer will choose one out of three, rock, paper, or scissors
//then, the player will choose either rock paper or scissors 
                
                //if the computer chose rock and the player chose rock, then neither win 0
                //if the computer chose rock and the player chose paper, the player wins player++
                //if the computer chose rock and the player chose scissors, then the computer wins computer++

                //if the computer chose paper and the player chose scissors, then the player wins player++
                //if the computer chose paper and the player chose paper, then neither wins 0 
                //if the computer chose paper, and the player chose rock, then the computer++

                //if the computer chose scissors and the player chose rock, then the player++
                //if the computer chose scissors and the player chose paper, then computer++
                //if the computer chose scissors and the player chose scissors, then 0 

//calculate final score, return with winner YEET
let computerChoice= "i am an unset choice"; 
let playerChoice ="i am also unset";
let computerScore =0;
let playerScore =0;
let gamesPlayed= 0;

function computerSelection(){
    val = (Math.floor(Math.random()*3))+1;  
    if(val ==1){
        computerChoice="rock";
    }
    else if (val ==2){
        computerChoice="paper";
    }
    else if(val==3){
        computerChoice="scissors";
    }
    else {
        computerChoice= "i am an error";
    }
}


function playerSelection(){

    let selection = prompt("Rock, paper, or scissors?");
    console.log(selection);
    if(selection.toLowerCase() == "rock"){
        playerChoice="rock";
    } else if (selection.toLowerCase()=="paper") {
        playerChoice="paper";
    } else if (selection.toLowerCase()=="scissors"){
        playerChoice="scissors";
    } else {
        console.log("Please try again: ");
        playerSelection();
    }
}


function playRound(playerChoice, computerChoice){

    if(computerChoice=="rock"){
        if(playerChoice== "scissors"){
            computerScore++;
            return "You Lose! Rock beats scissors!";
        } else if (playerChoice== "paper"){
            playerScore++;
            return "You win! Paper beats rock!";
        } else {
            return "You both chose rock!";
        }
    }
    else if (computerChoice== "paper"){
        if(playerChoice== "scissors"){
            playerScore++;
            return "You win! Scissors beat paper!";
        } else if (playerChoice== "paper"){
            return "You both chose paper!";
        } else {
            computerScore++;
            return "You lose! Paper beats rock!";
        }
    }
    else if (computerChoice ="scissors"){
        if(playerChoice == "scissors"){
            return "You both chose scissors"; 
        } else if (playerChoice = "paper"){
            computerScore++;
            return "You lose! Scissors beat paper!";
        } else {
            playerScore++;
            return "You win! Rock beats scissors!";
        }
    }
    else {
        return "Error: something's gone wrong :(";
    }
}

function game(){
    gamesPlayed++;
    if(gamesPlayed <= 5){
        computerSelection();
        playerSelection(); 
        console.log(playRound(computerChoice, playerChoice));
        console.log("Here are the scores: \n" + "Player: " + playerScore + "\nComputer: " + computerScore);
        game();
    }
}

game();