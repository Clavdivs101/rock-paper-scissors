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

function getHumanChoice(choice){
    choice = window.prompt("Rock, Paper or Scissors ?");

    if (choice.toLowerCase() === "rock"){
        return "rock";
        //alert("You chose Rock");
    }else if(choice.toLowerCase() === "paper"){
        return "paper";
        //alert("You chose Paper");
    }else if(choice.toLowerCase() === "scissors"){
        return "scissors";
        //alert("You chose scissors");
    }
    }
    // console.log(getComputerChoice()); 
    // console.log(getHumanChoice());


    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
    //humanChoice = getHumanChoice();
    //computerChoice = getComputerChoice();
    if(humanChoice === "paper" && computerChoice === "rock"){
        alert("you won paper beats rock");
        humanScore++;
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        alert("you lost paper gets cut");
        computerScore++;
    }else if(humanChoice === "scissors" && computerChoice === "paper"){
        alert("you won scissors beats paper");
        humanScore++;
    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        alert("you lost scissors get smashed");
        computerScore++;
    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        alert("you won rock beats scissors");
        humanScore++;
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        alert("you lost rock gets foiled");
        computerScore++;
    }else if(humanChoice === "paper" && computerChoice === "paper" || 
            humanChoice === "rock" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "scissors")
            alert("That's a tie");
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(humanScore, computerScore);


                                        // testing if these work

    //console.log(getComputerChoice()); 
    // console.log(getHumanChoice());
