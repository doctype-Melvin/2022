const menu = document.querySelector('.menu');
const slider = document.querySelector('.rangeslider');
const gridContainer = document.querySelector('.grid-container');

//Slider to change grid size
const sliderValue = document.createElement('div');
sliderValue.classList.add('sliderValue');
slider.append(sliderValue);

slider.addEventListener('click', (e) => {
    let value = e.target.valueAsNumber;
    sliderValue.textContent = `${value} x ${value}`
    setSize(value)
});


//Function initializes grid
function initGrid(){
    gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(16, 1fr)`;
    for (let i = 0; i < 16*16; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        gridContainer.appendChild(square);   
    }
}
initGrid()

//Function removes squares for resizing
function removeSquares() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    }
}

//Function takes input from slider to resize grid
function setSize(value){
    removeSquares()
    let size = value
    let gridSize = size*size
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < gridSize; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        gridContainer.append(square);
    }
}

//Function manipulates square style
const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', (e) => {
        e.target.classList.remove('square');
}));