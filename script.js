//function playGame(){

function getComputerChoice(max) {
    max = 3;
    let rn = Math.floor(Math.random() * max);
    if(rn === 0){
        return "rock";
    }else if(rn === 1){
        return "paper";
    }else return "scissors";
    console.log(getComputerChoice());
}

const rockBtn = document.querySelector("#Rockbtn");
const paperBtn = document.querySelector("#Paperbtn");
const scissorsBtn = document.querySelector("#Scissorsbtn");


function getHumanChoice(choice){
    //choice = window.prompt("Rock, Paper or Scissors ?");
    // let choice = document.getElementById("Rockbtn");
    if (choice === "rock"){
        return "rock";
        //alert("You chose Rock");
    }else if(choice === "paper"){
        return "paper";
        //alert("You chose Paper");
    }else if(choice === "scissors"){
        return "scissors";
        //alert("You chose scissors");
    }
    }

    //  console.log(getComputerChoice()); 
    //   console.log(getHumanChoice("rock"));
    let humanScore = 0;
    let computerScore = 0;

    
    function playRound(humanChoice){
    // let humanChoice = getHumanChoice();
     let computerChoice = getComputerChoice();
    if(humanChoice === "paper" && computerChoice === "rock"){
        alert("you won the round paper beats rock");
        humanScore++;
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        alert("you lost the round paper gets cut");
        computerScore++;
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        alert("you won the round scissors beats paper");
        humanScore++;
    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        alert("you lost the round scissors get smashed");
        computerScore++;
    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        alert("you won the round rock beats scissors");
        humanScore++;
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        alert("you lost the round rock gets foiled");
        computerScore++;
    }else if(humanChoice === "paper" && computerChoice === "paper" || 
            humanChoice === "rock" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "scissors")
            alert("The Round is a tie");
    }
    const humanSelection = getHumanChoice("rock");
    const humanSelectionp = getHumanChoice("paper");
    const humanSelections = getHumanChoice("scissors");
    const computerSelection = getComputerChoice();
    //playRound(humanSelection, computerSelection);
    //console.log(humanScore, computerScore);
//}
    // for (let i = 1; i<=5; i++){
    //playGame();
    // }
    // if(humanScore > computerScore){
    //     alert("You won the game!")
    //     }else if (humanScore === computerScore){
    //         alert("The game is tie!");
    //     }else alert("You lost the game!")


    rockBtn.addEventListener("click", () => {
        playRound(humanSelection, computerSelection);
        console.log(humanScore, computerScore);
    });

    paperBtn.addEventListener("click", () => {
        playRound(humanSelectionp, computerSelection);
        console.log(humanScore, computerScore);
    });

    scissorsBtn.addEventListener("click", () => {
        playRound(humanSelections, computerSelection);
        console.log(humanScore, computerScore);
    });


    //console.log(humanScore, computerScore);


                                        // testing if these work

    //console.log(getComputerChoice()); 
    //console.log(getHumanChoice());
