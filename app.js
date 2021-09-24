const startBtn = document.getElementById('start-Btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT_PLAYER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

const getPlayerChoice = () => {
    const choice = prompt(`${ROCK}, ${PAPER} or ${SCISSOR}`,'').toLocaleUpperCase();
    if (choice !== ROCK && choice !== PAPER && choice !== SCISSOR)
    {
        alert(`Invalid Choice, We picked ${DEFAULT_PLAYER_CHOICE} For You `)
        return;
    }
    return choice;
}
const getComputerChoice = () => {
    const randomvalue = Math.random;
    if (randomvalue < 0.34){
       return ROCK;
    } 
    else if ( randomvalue < 0.67 ){
         return PAPER;
    }
    else {
       return SCISSOR;
    }
}
const getWinner = (cChoice, pChoice = DEFAULT_PLAYER_CHOICE) => {
    if (pChoice === cChoice) {
        return RESULT_DRAW;
    }
    else if (cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSOR ||
    cChoice === SCISSOR && pChoice === ROCK){
    return RESULT_PLAYER_WINS;
    }
    else {
        return RESULT_COMPUTER_WINS;
    }
}
function getStartGame () {
    const PlayerChoice = getPlayerChoice();
    const CompuerChoice = getComputerChoice();
    let winner;
    if (PlayerChoice){
        winner = getWinner(CompuerChoice, PlayerChoice);
    }
    else {
        winner = getWinner(CompuerChoice);
    }
    let message = `You Picked ${PlayerChoice || DEFAULT_PLAYER_CHOICE} and Computer Picked ${CompuerChoice}, Therefore You`;
    
    if(winner === RESULT_DRAW){
        message = message + `had a Draw`;
    }
    else if (winner === RESULT_PLAYER_WINS){
        message = message + `Won`;
    }
    else{
        message = message + `Lose`
    }
    alert(message);
}


startBtn.addEventListener('click', getStartGame);