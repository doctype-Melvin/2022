const choices = [
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
    const random = Math.floor(Math.random()*choices.length);
    return choices[random]
}
//Player choice - Button starts round
const selections = document.querySelectorAll('[data-selection]');
selections.forEach(button => {
    button.addEventListener('click', () => {
        const player = button.dataset.selection;
        const selection = choices.find(choice => choice.name === player)
        playRound(selection)
    })
});


function playRound(player, cpu) {
    cpu = randomChoice();
    showHand(player, cpu);
    console.log(player.icon, cpu.icon)
}

//Show played hand
const outcome = document.querySelector('#messages');
const playerHand = document.createElement('div');
playerHand.classList.add('player-hand');
const cpuHand = document.createElement('div');
cpuHand.classList.add('cpu-hand');

function showHand(ply, cpu) {
    let player = ply.icon;
    let computer = cpu.icon;
        playerHand.textContent = player;
        cpuHand.textContent = computer;
        outcome.append(playerHand, cpuHand)
}