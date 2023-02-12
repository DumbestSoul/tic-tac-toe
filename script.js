const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById("board");

let circleTurns

startGame();

function startGame(){
    circleTurns = false;
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, {once : true});
    });
    setBoardHoverClass();
}


function handleClick(e){
    const cell = e.target
    const currentClass = circleTurns ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    swapTurns();
    setBoardHoverClass();
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass);
}

function swapTurns(){
    circleTurns = !circleTurns;
}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if(circleTurns){
        board.classList.add(CIRCLE_CLASS);
    }else{
        board.classList.add(X_CLASS);
    }
}