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
            const humanChoiseImgAtribute= `images/${button.textContent}.png`; 
            humanChoiseImg.src=humanChoiseImgAtribute;
        });  
    });
}

getHumanChoice();


function playGame(humanChoise){
  let computerChoise= getComputerChoice();
  computerChoiseImg.src=`images/${computerChoise}.png`;

  if(computerChoise==humanChoise) {
    resultP1.textContent="Draw! " + computerChoise + " and " + humanChoise ;}
  
    else if ((computerChoise=="rock" && humanChoise=="scissors") || 
                 (computerChoise=="paper" && humanChoise=="rock")    ||
                 (computerChoise=="scissors" && humanChoise=="paper")) {
                    resultP1.textContent="You loose! " + computerChoise + " beats " + humanChoise;
            computerScore++;
            resultP2.textContent="Computer score: "+ computerScore + " and Human Score: " + humanScore;
        }
    
        else if((computerChoise=="rock" && humanChoise=="paper") || 
        (computerChoise=="paper" && humanChoise=="scissors")    ||
        (computerChoise=="scissors" && humanChoise=="rock") )    {
            resultP1.textContent="You win! " + humanChoise + " beats " + computerChoise ;
            humanScore++;
            resultP2.textContent="Computer score: "+ computerScore + " and Human Score: " + humanScores;
            
        }  
        
        
        if((humanScore==5) ||(computerScore==5)) {
            for(let i=0; i<3; i++)
            {humanChoise_buttons[i].setAttribute("disabled", "");}

            if(humanScore==5)
            {resultP3.textContent="Game Ended! Congratulation! You won!"; }
             
            if (computerScore==5)
            {resultP3.textContent="Game Ended! You lost! Try Again!"; }
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
choisesDiv.setAttribute("style", "display:flex; justify-content:center; gap: 50px; width: 60%; margin: 50px auto;");
container.appendChild(choisesDiv);

/*new div that will contaim the results*/
const resultDiv = document.createElement("div");
resultDiv.id="result";
resultDiv.setAttribute("style", "text-align:center; font-size:20px; font-weight:bold");
container.appendChild(resultDiv);

const resultP1=document.createElement("p");
resultP1.id="result";
resultP1.textContent=" ";
resultDiv.appendChild(resultP1);

const resultP2=document.createElement("p");
resultP2.id="score";
resultP2.textContent="Computer Score: 0 and Human Score: 0";
resultDiv.appendChild(resultP2);

const resultP3=document.createElement("p");
resultP3.id="game_end"
resultP3.textContent="";
resultDiv.appendChild(resultP3);


/*computer_choise Div with image and p */
const computerChoiseDiv=document.createElement("div");
computerChoiseDiv.id="computer_choise";
computerChoiseDiv.setAttribute("style", "text-align:center;")


     const computerChoiseImg=document.createElement("img");
     computerChoiseImg.id="computer_choise_img";
     computerChoiseImg.setAttribute("style", "width:200px; height:200px; background-color:blue; alt:Computer Choise")

     const computerChoiseP=document.createElement("p");
     computerChoiseP.textContent="Computer Choise";
     computerChoiseP.setAttribute("style", "font-size:20px; font-weight:bold; margin-top:1px;");

choisesDiv.appendChild(computerChoiseDiv);
computerChoiseDiv.appendChild(computerChoiseImg);
computerChoiseDiv.appendChild(computerChoiseP);

/*human_choise div with image and p */
const humanChoiseDiv=document.createElement("div");
humanChoiseDiv.id="human_choise";
humanChoiseDiv.setAttribute("style", "text-align:center;")

    const humanChoiseImg=document.createElement("img");
    humanChoiseImg.id="human_choise_img";
    humanChoiseImg.setAttribute("style", "width:200px; height:200px; background-color:blue; alt:human Choise")

    const humanChoiseP=document.createElement("p");
    humanChoiseP.textContent="Human Choise";
    humanChoiseP.setAttribute("style", "font-size:20px; font-weight:bold; margin-top:1px;");


choisesDiv.appendChild(humanChoiseDiv);
humanChoiseDiv.appendChild(humanChoiseImg);
humanChoiseDiv.appendChild(humanChoiseP);
