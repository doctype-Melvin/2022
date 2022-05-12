const RPS = [
    {
        name: 'rock',
        icon: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        icon: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        icon: '🖖',
        beats: 'paper'
    }
]

//Random choice function
function computerChoice(){
    return RPS[Math.floor(Math.random()*RPS.length)]
}


//Player choice function -- Start game
const choices = document.querySelectorAll('[data-selection]');
const startGame = (() => {
    function clickChoice(input) {
        let choiceName = input.dataset.selection;
        let choice = RPS.find(choice => choice.name === choiceName);
        playRound(choice);
    }
    return {
        clickChoice        
    }
})();
choices.forEach(button => button.addEventListener('click', () => startGame.clickChoice(button), true));
    

//Play round function
function playRound(choice) {
    let roboto = computerChoice();
    let playerWins = whoWins(choice, roboto);
    let robotoWins = whoWins(roboto, choice);
    if(playerWins) {
        trackScore(player),
        ply();
    }else if(robotoWins) {
        trackScore(cpu),
        computer();
    }else 
    draw();
    showHands(choice, roboto);
}

//Winner function
function whoWins(winner, loser) {
    return winner.beats === loser.name
}

//Track points
const player = document.querySelector('[data-your-score]');
const cpu = document.querySelector('[data-cpu-score]');

function trackScore(score) {
    score.innerText = parseInt(score.innerText)+1;
    gameWinner(score.innerText)
    return score.innerText
}

//Declare game winner
function gameWinner(score) {
    if(parseInt(score) === 5){
        choices.forEach(button => button.removeEventListener('click', () => startGame.clickChoice(button), true))
        console.log('GAME OVER')
    }
}

//Round messages
const board = document.querySelector('#messages');
const current = document.createElement('div');
current.classList.add('round-winner')
const pHand = document.createElement('div');
const cHand = document.createElement('div');

function showHands(player, cpu) {
    let pIcon = player.icon
    pHand.innerText = pIcon;
    let cIcon = cpu.icon
    cHand.innerText = cIcon ;
    board.append(pHand, current, cHand);
    trackHistory(pIcon, cIcon)
}
//Helper functions for message board
function ply() {
    current.innerText = 'Beats';
}
function computer() {
    current.innerText = 'Beaten by';
}
function draw() {
    current.innerText = 'Draw'
}

// Add round history
const history = document.querySelector('#history');
    //Function adds round numbers
        let counter = 0;
        function trackRounds(){
            counter++;
            return counter
        }

function trackHistory(player, cpu) {
    const pHistory = document.createElement('div');
    const cHistory = document.createElement('div');
    const roundResult = document.createElement('div');
            roundResult.setAttribute('id', 'result');
    const text = document.createElement('div');
            text.setAttribute('id', 'result-text');
        
        pHistory.innerText = player;
        cHistory.innerText = cpu;
        text.innerText = `Round ${trackRounds()}`
            
        roundResult.append(pHistory, text, cHistory)
            history.after(roundResult)
}

// Try adding animation for round initiation