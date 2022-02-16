const selection = document.querySelectorAll('[data-selection]');
const final = document.querySelector('[data-final]')
const SELECTIONS = [
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

selection.forEach(button => {
    button.addEventListener('click', e => {
        const hand = button.dataset.selection;
        const choice = SELECTIONS.find(selection => selection.name === hand)
        makeChoice(choice)
    })
})


function makeChoice(hand) {
    const cpu = randomChoice();
    const youWin = declareWinner(hand, cpu);
    const cpuWin = declareWinner(cpu, hand);
    
    displayHands(cpu, cpuWin);
    displayHands(hand, youWin);
}

function displayHands(hand, winner) {
    const div = document.createElement('div');
    div.setAttribute('style', 'border: solid 2px black')
    div.innerText = hand.icon;
    div.classList.add('result-selection');
    if (winner) div.classList.add('winner')
    final.after(div)
}

function randomChoice() {
    const random = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[random];
}

function declareWinner(choice, cpu) {
    return choice.beats === cpu.name
}