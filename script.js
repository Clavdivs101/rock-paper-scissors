function getComputerChoice(max) {
    max = 3;
    let rn = Math.floor(Math.random() * max);
    if(rn === 0){
        return "rock";
    }else if(rn === 1){
        return "paper";
    }else return "scissors";
}

console.log(getComputerChoice());

