/*choise arraw that has 3 elements of paper, rock and scissors */
const choise=["paper", "rock", "scissors"];

/* function to generate randomly paper, rock or scissors*/ 
function getComputerChoice(){
       let computerChoise=choise[Math.floor(Math.random()*3)];
       console.log("Computer Choise: " + computerChoise);
       return computerChoise;
}

getComputerChoice();