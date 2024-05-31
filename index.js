
let humanScore=0;
let computerScore=0;
const choise=["paper", "rock", "scissors"];
const humanChoise_buttons= document.querySelectorAll("button");



/* function to generate randomly paper, rock or scissors*/ 
function getComputerChoice(){
       let computerChoise=choise[Math.floor(Math.random()*3)];
       console.log("Computer Choise: " + computerChoise);
       return computerChoise;
}

/*function to give the user the option to enter an input value of 
rock, paper, scissors*/
function getHumanChoice(){
    

    humanChoise_buttons.forEach((button) =>{
        // add a click listener
        button.addEventListener("click", ()=> {
            console.log("Human Choise " + button.textContent);
        });  
    });
}

getHumanChoice();


function playGame(humanChoise){
  let computerChoise= getComputerChoice();

  if(computerChoise==humanChoise) {
    console.log("Draw! " + computerChoise + " and " + humanChoise) ;}
  
    else if ((computerChoise=="rock" && humanChoise=="scissors") || 
                 (computerChoise=="paper" && humanChoise=="rock")    ||
                 (computerChoise=="scissors" && humanChoise=="paper")) {
            console.log("You loose! " + computerChoise + " beats " + humanChoise) ;
            computerScore++;
            console.log("Computer score: "+ computerScore + " and Human Score: " + humanScore);
        }
    
        else if((computerChoise=="rock" && humanChoise=="paper") || 
        (computerChoise=="paper" && humanChoise=="scissors")    ||
        (computerChoise=="scissors" && humanChoise=="rock") )    {
            console.log("You win! " + humanChoise + " beats " + computerChoise) ;
            humanScore++;
            console.log("Computer score: "+ computerScore + " and Human Score: " + humanScore);
            
        }  
        
        
        if((humanScore==5) ||(computerScore==5)) {
            for(let i=0; i<3; i++)
            {humanChoise_buttons[i].setAttribute("disabled", "");}

            if(humanScore==5)
            {console.log("Game Ended! Congratulation! You won!"); }
             
            if (computerScore==5)
            {console.log("Game Ended! You lost! Try Again!"); }
        }
        
}