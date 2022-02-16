const display = document.querySelector('#messages');

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

function randomChoice(){
    const random = Math.floor(Math.random()*choices.length);
    return choices[random]
}

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
    const playerWin = whoWins(player, cpu);
    const cpuWin = whoWins(cpu, player)

    showResult(cpu, cpuWin);
    showResult(player, playerWin);
    
}

function showResult(selection, winner) {
    console.log(selection.icon)
}

function whoWins(selection, opponent) {
    return selection.beats === opponent.name
}
