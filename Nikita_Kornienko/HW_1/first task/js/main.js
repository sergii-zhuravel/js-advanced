let numberMade = document.getElementById('numberMade');
let boardInput = document.getElementById('boardInput').value;
let boardGuess = document.getElementById('boardGuess');
let boardText = document.getElementById('boardText');
let result = document.getElementById('result');
let modal = document.querySelector('.modal');
let number;


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
        } else {
            inside.classList.add('red');
            showResult(number);
        }
    }, 1000);
    
}

function showResult (number) {
    result.innerHTML = `
    <h1>You've lost!</h1>
    <p>Computer Chose <strong>${number}</strong></p>
    `;
    modal.style.display = 'block';
}

numberMade.addEventListener('click', createNumber);
boardGuess.addEventListener('click', showGuess);