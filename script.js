

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

let humanScore = 0;
let computerScore = 0;


const rockBtn = document.querySelector("#Rockbtn");
const paperBtn = document.querySelector("#Paperbtn");
const scissorsBtn = document.querySelector("#Scissorsbtn");
const restartBtn = document.querySelector("#restart");
//restartBtn.disabled = true;


const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = `Your points: ${humanScore} Computer's points: ${computerScore}`;

const content2 = document.createElement("div");
content2.classList.add("content2");
content2.textContent = "Round Outcome:";


const content3 = document.createElement("div");
content3.classList.add("content3");
// content3.textContent = "Winner";

function getHumanChoice(choice){
    return choice;
    }

    container.appendChild(content);
    container.appendChild(content2);
    container.appendChild(content3);

//function playGame(){
    
    function playRound(humanChoice){
     let computerChoice = getComputerChoice();
     console.log(`You chose: ${humanChoice}`);
     console.log(`The Computer chose: ${computerChoice}`);

    if(humanChoice === "paper" && computerChoice === "rock"){
        content2.textContent = `Round Outcome: You chose ${humanChoice}, The Computer chose ${computerChoice}, You won the round paper beats rock.`;
        console.log("You won the round paper beats rock");
        humanScore++;
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        content2.textContent = `Round Outcome: You chose ${humanChoice}, The Computer chose ${computerChoice}, You lost the round paper gets cut.`;
        console.log("You lost the round paper gets cut");
        computerScore++;
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        content2.textContent = `Round Outcome: You chose ${humanChoice}, The Computer chose ${computerChoice},You won the round scissors beats paper.`;
        console.log(`You chose ${humanChoice}, The Computer chose ${computerChoice}, You won the round scissors beats paper`);
        humanScore++;
    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        content2.textContent = `Round Outcome: You chose ${humanChoice}, The Computer chose ${computerChoice},You lost the round scissors get smashed.`;
        console.log("You lost the round scissors get smashed");
        computerScore++;
    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        content2.textContent = `Round Outcome: You chose ${humanChoice}, The Computer chose ${computerChoice}, You won the round rock beats scissors.`;
        console.log("You won the round rock beats scissors");
        humanScore++;
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        content2.textContent = `Round Outcome: You chose ${humanChoice}, The Computer chose ${computerChoice}, You lost the round rock gets foiled.`;
        console.log("You lost the round rock gets foiled");
        computerScore++;
    }else if(humanChoice === computerChoice){
            content2.textContent = `Round Outcome: You chose ${humanChoice}, The Computer also chose ${computerChoice}, The Round is a tie.`;
            console.log("The Round is a tie");
    }
    if (humanScore === 5){
        content3.textContent = "The Player wins!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        restartBtn.disabled = false;
    }else if(computerScore === 5){
        content3.textContent = "The Computer wins!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        restartBtn.disabled = false;
    }
    }
    const humanSelection = getHumanChoice("rock");
    const humanSelectionp = getHumanChoice("paper");
    const humanSelections = getHumanChoice("scissors");
    const computerSelection = getComputerChoice();
 


    rockBtn.addEventListener("click", () => {
        playRound(humanSelection, computerSelection);
        console.log(humanScore, computerScore);
        content.textContent = `Your points: ${humanScore} Computer's points: ${computerScore}`;
    });

    paperBtn.addEventListener("click", () => {
        playRound(humanSelectionp, computerSelection);
        console.log(humanScore, computerScore);
        content.textContent = `Your points: ${humanScore} Computer's points: ${computerScore}`;
    });

    scissorsBtn.addEventListener("click", () => {
        playRound(humanSelections, computerSelection);
        console.log(humanScore, computerScore);
        content.textContent = `Your points: ${humanScore} Computer's points: ${computerScore}`;
    });

//}



    restartBtn.addEventListener("click", () => {
        content.textContent = `Your points: ${humanScore = 0} Computer's points: ${computerScore = 0}`;
        content2.textContent = "Round Outcome:";
        content3.textContent = "";
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    });