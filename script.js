function getComputerChoice(max) {
    max = 3;
    let rn = Math.floor(Math.random() * max);
    if(rn === 0){
        return "Rock";
    }else if(rn === 1){
        return "Paper";
    }else return "Scissors";
}

function getHumanChoice(choice){
    choice = window.prompt("Rock, Paper or Scissors ?");

    if (choice == "rock"){
        return "Rock";
        alert("You chose Rock");
    }else if(choice == "paper"){
        return "Paper";
        alert("You chose Paper");
    }else if(choice == "scissors"){
        return "Scissors";
        alert("You chose scissors");}
    }

console.log(getComputerChoice()); 
                                        // testing if these work
console.log(getHumanChoice());

