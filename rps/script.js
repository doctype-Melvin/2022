/*Set up*/
let choice = ['rock', 'paper', 'scissors'];

function cpuPlay() {
    return choice[Math.floor(Math.random()*choice.length)]
};

let roundCount = 0;
let pScore = 0;
let cScore = 0;

/*Play one round*/
function playRound(ply, cpu) {
    cpu = cpuPlay();
    if ((ply === 'rock' && cpu === 'scissors') ||
        (ply === 'paper' && cpu === 'rock') ||
        (ply === 'scissors' && cpu === 'paper')) {
            pScore++
                console.log(`You won! ${ply} beats ${cpu}`)
            return `You won! ${ply} beats ${cpu}`
        } else if (ply === cpu) {
                console.log(`It's a draw!`)
            return `It's a draw!`
        } else {
            cScore++
                console.log(`You lost! ${cpu} beats ${ply}`)
            return `You lost! ${cpu} beats ${ply}`
        }
}

/*Function to play a game of 5 rounds*/
// function game(){
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound);
//         roundCount++;
//     }
//     console.log(pScore);
//     console.log(cScore)
//     if (pScore > cScore) {
//         return `You won this match!`
//     } else if (pScore === cScore) {
//         return `It's a tie game!`
//     } else {
//         return `Computer won this match!`
//     }
// }


//Player control buttons
const palyerUI = document.querySelector('#player-control');

const rock = document.createElement('button');
rock.classList.add('rock');
rock.textContent = 'Rock';
palyerUI.appendChild(rock);

    const paper = document.createElement('button');
    paper.classList.add('paper');
    paper.textContent = 'Paper';
    palyerUI.appendChild(paper);

        const scissors = document.createElement('button');
        scissors.classList.add('scissors');
        scissors.textContent = 'Scissors';
        palyerUI.appendChild(scissors);

            const random = document.createElement('button');
            random.classList.add('random');
            random.textContent = 'Random Attack';
            palyerUI.appendChild(random);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playerInput))

function playerInput(e) {
    switch(e.target.className) {
        case 'rock':
            playRound(e.target.className);
            break;
        case 'paper':
            playRound(e.target.className);
            break;
        case 'scissors':
            playRound(e.target.className);
            break;
        case 'random':
            playRound(cpuPlay());
    }
}


//CPU Panel Dummy Controls

const cpuUI = document.querySelector('#cpu-control');

const rockCpu = document.createElement('button');
rockCpu.classList.add('rock');
rockCpu.textContent = 'Rock';
cpuUI.appendChild(rockCpu);

    const paperCpu = document.createElement('button');
    paperCpu.classList.add('paper');
    paperCpu.textContent = 'Paper';
    cpuUI.appendChild(paperCpu);

        const scissorsCpu = document.createElement('button');
        scissorsCpu.classList.add('scissors');
        scissorsCpu.textContent = 'Scissors';
        cpuUI.appendChild(scissorsCpu);

//Scores & Messages Panel

const scoresPanel = document.querySelector('#score');
const scoresDisplay = document.createElement('div');
    scoresDisplay.classList.add('scoreBoard');
    scoresDisplay.setAttribute('style', 'border: 2px black solid; font-size: 55px');
        scoresPanel.appendChild(scoresDisplay);

const playerScore = `${pScore}`
const dashScore = `-`
const cpuScore = `${cScore}`
scoresDisplay.append(playerScore, dashScore, cpuScore)

