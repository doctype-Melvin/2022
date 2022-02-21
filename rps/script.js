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

//Random computer choice
function randomChoice(){
    return RPS[Math.floor(Math.random()*choices.length)]
}
//Player choice - Button starts round
const choices = document.querySelectorAll('[data-selection]');
    choices.forEach(button => button.addEventListener('click', () => {
        const choiceName = button.dataset.selection;
        const choice = RPS.find(choice => choice.name === choiceName);
            playRound(choice);
}));

//Main play round function
function playRound(choice){
    const roboto = randomChoice();
    const playerWins = whoWins(choice, roboto);
    const robotoWins = whoWins(roboto, choice);
    showHands(choice, roboto);
    
}

//Determin winner function
function whoWins(choice, robotoChoice) {
    return choice.beats === robotoChoice.name
}

//Show hands
const outcome = document.querySelector('#messages');
const message = document.createElement('div');
message.classList.add('round-winner');
const pHand = document.createElement('div');
const cHand = document.createElement('div');

function showHands(player, computer){
    let ply = player.icon;
        pHand.textContent = ply;
    let cpu = computer.icon;
        cHand.textContent = cpu;
        message.textContent = '';
            outcome.append(pHand, message, cHand)
}




/*
const display = document.querySelector('#messages');
const info = document.createElement('div');
info.classList.add('round-winner');
const pHand = document.createElement('div');
const cHand = document.createElement('div');

function showHands(winner){
    const winning = winner.name;
        pHand.textContent = winner.icon;
    const losing = winner.beats;
    const loser = RPS.find(loser => loser.name === losing);
        cHand.textContent = loser.icon
    info.textContent = `${winning} beats ${losing}`
    display.append(pHand, info, cHand)
}
*/

/*Things to add
Transition from clicking choice to two fists engaging (round initiation)
Fade from round initiation to outcome
Keep track of outcome history
Choosing game length (3 rounds, 5 rounds, 11 rounds)
Optional: character choice*/