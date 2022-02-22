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

//Player choice function
const choices = document.querySelectorAll('[data-selection]');
choices.forEach(button => button.addEventListener('click', () => {
    let choiceName = button.dataset.selection;
    let choice = RPS.find(choice => choice.name === choiceName);
    playRound(choice);
}));

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
                }else draw();
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
    score.innerText = parseInt(score.innerText)+1
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
    trackHistory(pIcon, cIcon);
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

function trackHistory(player, cpu) {
const pHistory = document.createElement('div');
const cHistory = document.createElement('div');
const roundResult = document.createElement('div');
        roundResult.setAttribute('id', 'result');
const text = document.createElement('div');
        text.setAttribute('id', 'result-text');
    
    pHistory.innerText = player;
    text.innerText = 'Round'
    cHistory.innerText = cpu;
        
    roundResult.append(pHistory, text, cHistory)
        history.append(roundResult)
}
// Change game mode (winner of x rounds or x points win)
// Try adding animation for round initiation