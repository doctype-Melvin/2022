const menu = document.querySelector('.menu');
const slider = document.querySelector('.rangeslider');
const gridContainer = document.querySelector('.grid-container');

//Slider to change grid size
const sliderValue = document.createElement('div');
sliderValue.classList.add('sliderValue');
sliderValue.textContent = '16 x 16'
slider.append(sliderValue);

slider.addEventListener('click', (e) => {
    let value = e.target.valueAsNumber;
    sliderValue.textContent = `${value} x ${value}`
    setSize(value)
});

//Add buttons to menu
//Eraser
const eraser = document.createElement('button');
eraser.textContent = 'Clear';
menu.append(eraser);
eraser.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style = 'background: white')
})

    //Rainbow mode
    const rainbow = document.createElement('button');
    rainbow.textContent = 'Rainbow';
    menu.append(rainbow);
    rainbow.addEventListener('click', () => {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => square.addEventListener('mouseover', () => {
            let r = Math.random()*255;
            let g = Math.random()*255;
            let b = Math.random()*255;
            square.style = `background: rgb(${r}, ${g}, ${b})`
        }))
    })

//Function manipulates square style
const palette = document.createElement('input');
palette.setAttribute('type', 'color');
menu.append(palette);

function drawSquares(){
    const squares = document.querySelectorAll('.square');
    //On input the background is set to color choice
palette.addEventListener('input', (e) => {
    squares.forEach(square => square.addEventListener('mouseover', () => {
        square.style.background = e.target.value;
    }))
})
    //Default painting functionality
squares.forEach(square => square.addEventListener('mouseover', () => {
    square.style.background = 'black';
}));
};

//Function initializes grid
function initGrid(){
    gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(16, 1fr)`;
    for (let i = 0; i < 16*16; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        gridContainer.appendChild(square);   
    }
    drawSquares()
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
    drawSquares();
}

