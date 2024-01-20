let userScore = 0; // initialize user score to 0
let compScore = 0; //initialize computer score to 0



const choices = document.querySelectorAll(".choice"); // select all the choice elements
const msg = document.querySelector("#msg");//here to access message to display the result
const userScorepara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



// we generate computer choice
const gencompchoice = () => {
    //rock paper scissors will generate randomly we have to store them in an array
    const options = ["rock", "paper", "scissor"];
   const randomIdx = Math.floor(Math.random() * 3);
   return options[randomIdx];
    // here we get random numbers 
    //her to genrate number we have to multiply them with its next number.



};

const drawgame = () => {
   
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor="blue";
    
}

const showwinner = (userwin) => {
    if(userwin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("you win");
        msg.innerText = "You win"
        msg.style.backgroundColor ="green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText ="you loose";
        msg.style.backgroundColor="red";
    }
}




const playGame = (userchoice) =>{
    console.log("user choice = ", userchoice);
    //Generate computer choice ->module
    
    
    const compchoice  = gencompchoice();// here computer choice comes after generation
    console.log("comp choice = ", compchoice);

    if(userchoice==compchoice) {
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice === "rock") {
            // scissors, paper
            compchoice=== "paper" ? false : true;
        } else if(userchoice === "paper") {
            // rock,scissor
            userwin = compchoice === "scissors" ? false : true;

        } else {
            //rock, paper
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);// here we are showing winner
    }
};

//Added the event listner for all choices
choices.forEach(choice => {
    console.log(choice); // log each choice element to the console for debugging
    choice.addEventListener("click", () => {
        
        const userchoice = choice.getAttribute("id");//here as we select the choice we get its id and we start playing
        
        console.log("choice was clicked",userchoice); // log a message to the console when a choice is picked
        
        playGame(userchoice);
    });
});

/* 1. we tracked user and computer score
2. access the choices
3. added the event listner in all choices 
4. then we generate computer choice
5. then we use if else logic
6. then we show winner 
7. then we are updating the score */
