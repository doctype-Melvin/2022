/*Set up*/
let choice = ['rock', 'paper', 'scissors'];

function cpuPlay() {
    return choice[Math.floor(Math.random()*choice.length)]
};

let roundCount = 0;
let pScore = 0;
let cScore = 0;

/*Simple player input prompt*/
/*function playerPlay(){
    let input = prompt('Make a choice');
    switch(input) {
        case '1':
            return choice[0]
        case '2':
            return choice[1]
        case '3':
            return choice[2]
        default:
            return choice[Math.floor(Math.random()*choice.length)]
    }
}
*/


/*Play one round*/
function playRound(ply, cpu) {
    ply ;
    cpu = cpuPlay();
    if ((ply === 'rock' && cpu === 'scissors') ||
        (ply === 'paper' && cpu === 'rock') ||
        (ply === 'scissors' && cpu === 'paper')) {
            pScore++
            return `You won! ${ply} beats ${cpu}`
        } else if (ply === cpu) {
            return `It's a draw!`
        } else {
            cScore++
            return `You lost! ${cpu} beats ${ply}`
        }
}
console.log(playRound())

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
const playerUI = document.querySelector('#player-control');

const rock = document.createElement('button');
rock.classList.add('rock');
rock.textContent = 'Rock';
playerUI.appendChild(rock);

    const paper = document.createElement('button');
    paper.classList.add('paper');
    paper.textContent = 'Paper';
    playerUI.appendChild(paper);

        const scissors = document.createElement('button');
        scissors.classList.add('scissors');
        scissors.textContent = 'Scissors';
        playerUI.appendChild(scissors);

            const random = document.createElement('button');
            random.classList.add('random');
            random.textContent = 'Random Attack';
            playerUI.appendChild(random);



