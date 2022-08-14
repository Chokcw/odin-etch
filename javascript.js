
let grid_x = 16;
let grid_y = 16;

const board = document.querySelector("#board");

function createGrid () {
    let y = 0;
    while (y < grid_y) {
        let x = 0
        const row = document.createElement('div');
        row.classList.add('row');
        while (x < grid_x) {  

            const grid = document.createElement('div');
            grid.classList.add('grid');
            row.appendChild(grid);

            x++;
        }
        board.appendChild(row);
        y++;
    }
}

createGrid();

let clicked = false;
let fill = true;

const drawButton = document.querySelector("#draw-button");
const eraserButton = document.querySelector("#eraser-button");


function toggleFill(e) {
    // console.log(e.target.id);
    if (e.target.id === 'draw-button') { // if is draw button, fill=true
        fill = true;
        drawButton.classList.add('buttonSelected');
        eraserButton.classList.remove('buttonSelected');
    
    } else if (e.target.id === 'eraser-button') { // else fill = false
        fill = false;
        drawButton.classList.remove('buttonSelected');
        eraserButton.classList.add('buttonSelected');
    }
}

drawButton.addEventListener('click', toggleFill);
eraserButton.addEventListener('click', toggleFill);


// Fill/erasing grids
function downListener() {
    clicked = true;
}

function upListener() {
    clicked = false;
}

function fillGrid (e) {
    if (clicked) {
        if (fill) {
            e.target.classList.add('filled');
        }
        else {
            e.target.classList.add('empty');
        }
    }
}

const rows = document.querySelectorAll(".row"); // make selection more specific
console.log(rows.length); // debug querySelector
rows_array = Array.from(rows)
for (const grid of rows_array) {
    grid.addEventListener('mousedown', downListener);
    grid.addEventListener('mousemove', fillGrid);
    grid.addEventListener('mouseup', upListener);
}

// function clearAll() {
//     clear = confirm("Confirm to clear board?");
//     console.log(clear);
//     if (clear) {
//         for (const grid of rows_array) {

//         }
//     }
// }

// const clearAllButton = document.querySelector("#clearAll-button");
// clearAllButton.addEventListener('click', clearAll);


// clear colours
// eraser
// allow change size, all grids should stay within same area

