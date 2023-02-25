//create data structure to hold all three options
var options = ['Rock', 'Paper', 'Scissors'];
var userScore = 0;
var systemScore = 0;
var gameRound = 0;
let userChoice = "";
let sysChoice = "";

//get the user's chosen one from a prompt
function getUserChoice(userChoice){

    
}

//get the computer's chosen one from a random selection
function getSysChoice(){
    var sysChoice = options[Math.floor(Math.random() * options.length)];
    return sysChoice;

}

//play a round of rock paper scissors and return winner
function playRound(sysChoice, userChoice){
    gameRound++;
    let roundResult;
    if 
    (
        (userChoice === "Rock" && sysChoice === "Scissors") ||
        (userChoice === "Paper" && sysChoice === "Rock") ||
        (userChoice === "Scissors" && sysChoice === "Paper")
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

    function game(userChoice, sysChoice)
    {

    roundResult = playRound(userChoice, sysChoice);

    const results_div = document.querySelector('#results_div');
    const choices_div = document.querySelector('#choices_div');

    const uc = document.createElement('p');
    uc.textContent = "User choice is: " + userChoice;
    choices_div.appendChild(uc);

    const sc = document.createElement('p');
    sc.textContent = "System choice is: " + sysChoice;
    choices_div.appendChild(sc);

    const rst = document.createElement('p');
    rst.textContent = roundResult;

    finalResult = getGameResult(userScore, systemScore);

    const frst = document.createElement('p');
    frst.textContent = finalResult;
    results_div.appendChild(rst);
    results_div.appendChild(frst);


    }


    //-----------------------------------------------------------//

    const r = document.getElementById("rock_btn");
    r.addEventListener("click", () => {
    userChoice === getUserChoice("Rock");
    sysChoice === getSysChoice();
    game(userChoice, sysChoice);
    });

    const s = document.getElementById("scissors_btn");
    s.addEventListener("click",()=>{
    userChoice === getUserChoice("Scissors");
    sysChoice === getSysChoice();
    game(userChoice, sysChoice);
    });

    const p = document.getElementById("paper_btn");
    p.addEventListener("click",()=>{
    userChoice === getUserChoice("Paper");
    sysChoice === getSysChoice();
    game(userChoice, sysChoice);
    });