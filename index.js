
let humanScore=0;
let computerScore=0;
const choise=["paper", "rock", "scissors"];


/* function to generate randomly paper, rock or scissors*/ 
function getComputerChoice(){
       let computerChoise=choise[Math.floor(Math.random()*3)];
       console.log("Computer Choise: " + computerChoise);
       return computerChoise;
}

/*function to give the user the option to enter an input value of 
rock, paper, scissors*/
function getHumanChoice(){

    let humanChoise= prompt
        ("Enter one of the options:paper, rock, scissors", 
        "paper,rock,scissors");

        return humanChoise.toLowerCase();

        
}
     
function playRound(computerChoise, humanChoise){
    if(computerChoise==humanChoise) {
        console.log("Draw! " + computerChoise + " and " + humanChoise) ;}

        else if ((computerChoise=="rock" && humanChoise=="scissors") || 
                 (computerChoise=="paper" && humanChoise=="rock")    ||
                 (computerChoise=="scissors" && humanChoise=="paper")) {
            console.log("You loose! " + computerChoise + " beats " + humanChoise) ;
            computerScore++;
            console.log(computerScore + " " + humanScore);
        }

        else if((computerChoise=="rock" && humanChoise=="paper") || 
        (computerChoise=="paper" && humanChoise=="scissors")    ||
        (computerChoise=="scissors" && humanChoise=="rock") )    {

            console.log("You win! " + humanChoise + " beats " + computerChoise) ;
            humanScore++;
            console.log(computerScore + " " + humanScore);
        }     
    }


const computerSelection=getComputerChoice();
const humanSelection=getHumanChoice();

playRound(computerSelection, humanSelection);