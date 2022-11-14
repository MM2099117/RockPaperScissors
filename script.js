//create data structure to hold all three options
var options = ['Rock', 'Paper', 'Scissors'];


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
    let gameResult;
            if(sysChoice == userChoice){
                let gameResult = "The game is a draw."
                return gameResult;

            }
            else if(sysChoice == "PAPER" && userChoice == "SCISSORS"){
                gameResult = "User wins."
                return gameResult;

            }
            else if(userChoice == "PAPER" && sysChoice == "SCISSORS"){
                gameResult = "System wins."
                return gameResult;

            }
            else if(userChoice == "ROCK" && sysChoice == "SCISSORS"){
                gameResult = "User wins."
                return gameResult;

            }
            else if(sysChoice == "ROCK" && userChoice == "SCISSORS"){
                gameResult = "System wins."
                return gameResult;

            }
            else if(sysChoice == "PAPER" && userChoice == "ROCK"){
                gameResult = "System wins."
                return gameResult;
            }
            else if(sysChoice == "ROCK" && userChoice == "PAPER"){
                gameResult = "User wins";
                return gameResult;
            }
            console.log(gameResult);            
            return gameResult;
    }


    function game(){
    for(let i = 0; i<5; i++){

    var sysChoice = getSysChoice();
    var userChoice = getUserChoice();
    console.log("User choice is " + userChoice);
    console.log("System choice is " + sysChoice);
    gameResult = playRound(sysChoice, userChoice);
    console.log(gameResult);

        }
    }

    game();