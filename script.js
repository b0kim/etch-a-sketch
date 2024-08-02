const grid = document.querySelector('.grid');
const gridRect = grid.getBoundingClientRect();
const gridWidth = gridRect.width;
const gridHeight = gridRect.height;

// Keep track of whether the mouse button is down while in the grid
let isMouseDown = false;
grid.addEventListener('mousedown', () => {isMouseDown = true;});
grid.addEventListener('mouseup', () => {isMouseDown = false});
grid.addEventListener('mouseleave', () => {isMouseDown = false});

// Code to create grid
const ROWS_INITIAL = 30;
createGrid(ROWS_INITIAL);
function createGrid(rows) {
    grid.innerHTML = '';

    const columns = Math.floor(gridWidth / gridHeight * rows);
    const squareWidth = gridWidth / columns;
    const squareHeight = gridHeight / rows;

    for (let i=0; i < rows * columns; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
        gridSquare.style.height = `${squareHeight}px`;
        gridSquare.style.width = `${squareWidth}px`;
        gridSquare.addEventListener('mousedown', fillSquare);
        gridSquare.addEventListener('mouseenter', () => {
            if (isMouseDown) fillSquare({ target: gridSquare });
        })
        grid.appendChild(gridSquare);
    }
}

function fillSquare (event) {
    event.target.classList.add('black');
}

// Code for button interactivity
const btnReset = document.querySelector('button.reset'); 
const popup = document.querySelector('.popup');

btnReset.addEventListener('click', () => {
    popup.classList.toggle('show_reset');
});