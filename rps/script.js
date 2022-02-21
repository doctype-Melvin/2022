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
    pHand.innerText = player.icon;
    cHand.innerText = cpu.icon;
    //current.innerText = ''
    board.append(pHand, current, cHand)
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