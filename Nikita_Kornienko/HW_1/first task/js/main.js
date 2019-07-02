let numberMade = document.getElementById('numberMade');
let boardInput = document.getElementById('boardInput').value;
let boardGuess = document.getElementById('boardGuess');
let boardText = document.getElementById('boardText');
let restartBtn = document.getElementById('restartBtn');
let result = document.getElementById('result');
let score = document.getElementById('score');
let modal = document.querySelector('.modal');
let number;
let gameScores = {
    Player: 0,
    Computer: 0
}


// Makes up a number from 1 to 10
function createNumber () {
    number = Math.floor(Math.random() * 10) + 1; 
    console.log(number);
//    document.getElementById("numberMade").disabled = true; (should render the button inactive);
    alert('The number has been made! Please insert your guess into an input form! (The number should be from 1 to 10)');
}

// Takes in a player's guess and shows it on the screen

function showGuess () {
    let boardInput = parseInt(document.getElementById('boardInput').value);
    console.log(boardInput);
        if (boardInput > 10 || boardInput < 1 || isNaN(boardInput) == true) {
            alert('Please enter a number from 1 to 10!');
            return 0;
        }
    boardText.innerHTML = `
    <span class="board__text--inside" id="boardInside">${boardInput}</span>
    `;
    setTimeout(() => {
        let inside = document.getElementById('boardInside');
        if(boardInput == number) {
            inside.classList.add('green');
            gameScores.Player ++;
            score.innerHTML = `
            <p>Player: ${gameScores.Player}</p>
            <p>Computer: ${gameScores.Computer}</p>
            `;
        } else {
            inside.classList.add('red');
            showResult(number);
            gameScores.Computer ++;
            score.innerHTML = `
            <p>Player: ${gameScores.Player}</p>
            <p>Computer: ${gameScores.Computer}</p>
            `;
        }
    }, 1000);
    
}

function showResult (number) {
    result.innerHTML = `
    <h1>You've lost!</h1>
    <p>Computer Chose <span id="loseNumber"><strong>${number}</strong></span></p>
    `;
    let loseNumber = document.getElementById('loseNumber');
    loseNumber.classList.add('red');
    modal.style.display = 'block';
}

// Close modal 

function closeModal (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

// Restart Game

function restartGame () {
    gameScores.Player = 0;
    gameScores.Computer = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
        `;
    boardText.innerHTML = `
    <span class="board__text--inside" id="boardInside"></span>
    `;
    boardInput = '';
}

window.addEventListener('click', closeModal);
numberMade.addEventListener('click', createNumber);
boardGuess.addEventListener('click', showGuess);
restartBtn.addEventListener('click', restartGame);