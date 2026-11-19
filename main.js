console.log("Hey mfs! Welcome to the game of Rock/Paper/Scissors")

function computerChoice(){
    let num = Math.floor(Math.random()*3);
    if(num==0){
        return "rock";
    }else if(num==1){
        return "paper";
    }else{
        return "scissors";
    }
}


function humanChoice(){
    while(true){
        let humanChoice = prompt("Enter your choice- rock/paper/scissors, or type-'exit' to close game");
        if(humanChoice.toLowerCase()==="rock"){
            return "rock";
        }else if(humanChoice.toLowerCase()==="scissors"){
            return "scissors";
        }else if(humanChoice.toLowerCase()==="paper"){
            return "paper";
        }else if(humanChoice.toLowerCase()==="exit"){
            return "exit";
        }
        else{
            alert("Invalid choice");
        }
    }
}


let playerScore=0;
let compScore=0;

function playRound(humanTurn, compTurn){
    if(humanTurn===compTurn){
        console.log("Tie, go human!")
    }
    if(humanTurn==="rock" && compTurn==="scissors"){
        playerScore+=1;
        console.log("You win!, rock beats scissor")
    }else if(humanTurn==="rock" && compTurn==="paper"){
        compScore+=1;
        console.log("You lose!, paper beats rock")
    }else if(humanTurn==="paper" && compTurn==="rock"){
        playerScore+=1;
        console.log("You win!, paper beats rock")
    }else if(humanTurn==="paper" && compTurn==="scissors"){
        compScore+=1;
        console.log("You lose!, paper beats scissors")
    }else if(humanTurn==="scissors" && compTurn==="paper"){
        playerScore+=1;
        console.log("You win!, scissor beats paper")
    }else if(humanTurn==="scissors" && compTurn==="rock"){
        compScore+=1;
        console.log("You lose!, rock beats scissor")
    }
}

function playGame(){
    
    let count=1;
    while(count!=6){
        let compChoice = computerChoice();
        let humanTurn=humanChoice();
        playRound(humanTurn, compChoice);
        count+=1;
    }
    console.log(`Player Scores: ${playerScore}`);
    console.log(`Computer Scores: ${compScore}`);
    if(playerScore>=compScore){
        console.log("Player Wins the whole game. Congo!");
    }else{
        console.log("You lost it!");
    }
}

playGame();
