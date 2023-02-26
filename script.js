//create data structure to hold all three options
var options = ['Rock', 'Paper', 'Scissors'];
var userScore = 0;
var systemScore = 0;
var gameRound = 0;

//get the user's chosen one from a prompt
function getUserChoice(){
    let userChoice = prompt("Please enter your Rock Paper Scissors choice:");

    userChoice = userChoice.toUpperCase();

    if(userChoice == "ROCK" || userChoice == "PAPER" || userChoice == "SCISSORS"){
        
        return userChoice;

    }
    else
    {
        prompt("Please enter a valid choice");
        getUserChoice();
    }

    return userChoice;

}

//get the computer's chosen one from a random selection
function getSysChoice(){
    var sysChoice = options[Math.floor(Math.random() * options.length)];
    sysChoice = sysChoice.toUpperCase();
    return sysChoice;

}

//play a round of rock paper scissors and return winner
function playRound(sysChoice, userChoice){
    gameRound++;
    let roundResult;
    if 
    (
        (userChoice === "ROCK" && sysChoice === "SCISSORS") ||
        (userChoice === "PAPER" && sysChoice === "ROCK") ||
        (userChoice === "SCISSORS" && sysChoice === "PAPER")
    )
    {
        userScore++;
        roundResult = "User wins this round."
        return roundResult;
    }

    else if(userChoice === sysChoice) 
    {
        roundResult = "Tie.";
        return roundResult;
    }
    else
    {
        systemScore++;
        roundResult  = "System wins this round."
        return roundResult;
    }
 
    }


    function getGameResult(userScore, systemScore){
        let finalResult;
        if(userScore > systemScore){
            finalResult = "User wins the game."
        }
        else if(systemScore > userScore){
            finalResult = "System wins the game."
        }
        else{
            finalResult = "The game is a draw."
        }

        return finalResult;
    }

    function game()
    {
    while(gameRound < 5)
    {
    var sysChoice = getSysChoice();
    var userChoice = getUserChoice();
    console.log("User choice is " + userChoice);
    console.log("System choice is " + sysChoice);
    roundResult = playRound(sysChoice, userChoice);
    console.log(roundResult);
    console.log("User Score is: " + userScore);
    console.log("System Score is: " + systemScore);    
    console.log('\n');
    }
    finalResult = getGameResult(userScore, systemScore);
    console.log(finalResult);
    }

    game();