/*Set up*/
let choice = ['rock', 'paper', 'scissors'];

function cpuPlay() {
    return choice[Math.floor(Math.random()*choice.length)]
};

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
            game(e.target.className);
            break;
        case 'paper':
            game(e.target.className);
            break;
        case 'scissors':
            game(e.target.className);
            break;
        case 'random':
            game(cpuPlay());
    }
}

//Scores & Messages Panel
const scoresPanel = document.querySelector('#score');
const scoresDisplay = document.createElement('div');
    scoresDisplay.classList.add('scoreBoard');
    scoresDisplay.setAttribute('style', 'border: 2px black solid; font-size: 55px');
        
        const messageDisplay = document.createElement('div');
        messageDisplay.classList.add('message');
        messageDisplay.setAttribute('style', 'border: 2px blue solid')
            scoresPanel.append(scoresDisplay, messageDisplay);



const dashScore = `-`
let pScore = 0;
let cScore = 0;
scoresDisplay.append(pScore, dashScore, cScore)

let rounds = 0

/*Play one round*/
function playRound(ply, cpu) {

    if ((ply === 'rock' && cpu === 'scissors') ||
        (ply === 'paper' && cpu === 'rock') ||
        (ply === 'scissors' && cpu === 'paper')) {
            pScore++;
            rounds++;
            scoresDisplay.textContent = `${pScore}-${cScore}`;
            messageDisplay.textContent = `You won! ${ply} beats ${cpu}`;
            return
        } else if (ply === cpu) {
            rounds++;
            scoresDisplay.textContent = `${pScore}-${cScore}`;
            messageDisplay.textContent = `It's a draw!`;
            return 
        } else {
            cScore++;
            rounds++;
            scoresDisplay.textContent = `${pScore}-${cScore}`;
            messageDisplay.textContent = `You lost! ${cpu} beats ${ply}`;
            return 
        }
}

//Function to play a game of 5 rounds
function game(input) {
    let player = input;
    let computer = cpuPlay();
    playRound(player, computer);
    if (rounds === 5 && pScore > cScore) {
        messageDisplay.textContent = `Human Power!`;
        endGame();
    }else if (rounds === 5 && pScore < cScore) {
        messageDisplay.textContent = `Mr Roboto succeeds!`;
        endGame();
    } else if (rounds === 5 && pScore === cScore) {
        messageDisplay.textContent = `Everybody loses`;
        endGame();
    }
}

//End Game Function
function endGame() {
    rock.setAttribute('disabled', 1);
    paper.setAttribute('disabled', 1);
    scissors.setAttribute('disabled', 1);
    random.setAttribute('disabled', 1);
        let reset = document.createElement('button');
        reset.textContent = `Reset`
        scoresPanel.appendChild(reset);
        reset.addEventListener('click', () => {
            pScore = 0;
            cScore = 0;
            rounds = 0;
            scoresDisplay.textContent = `${pScore}-${cScore}`;
            messageDisplay.textContent = '';
                rock.removeAttribute('disabled', 1);
                paper.removeAttribute('disabled', 1);
                scissors.removeAttribute('disabled', 1);
                random.removeAttribute('disabled', 1);
                    scoresPanel.removeChild(reset)
        })
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



