
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


/* index.html style with javascript */

const container = document.querySelector("#container");
const containerH1= container.querySelector("h1");
containerH1.setAttribute("style", "text-align:center; color: blue;");

const containerP= container.querySelector("p");
containerP.setAttribute("style", "text-align:center; font-size: 20px; width:80%; margin:auto 10%; font-style:italic;");

/*new div that will contain the computer choise and human choise divs */
const choisesDiv = document.createElement("div");
choisesDiv.id="choises";
container.appendChild(choisesDiv);

const computerChoiseDiv=document.createElement("div");
computerChoiseDiv.id="computer_choise";
choisesDiv.appendChild(computerChoiseDiv);

const humanChoiseDiv=document.createElement("div");
humanChoiseDiv.id="human_choise";
choisesDiv.appendChild(humanChoiseDiv);


