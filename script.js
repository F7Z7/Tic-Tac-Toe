let board, playerTurn, cells, currentPlayer, gameBoard, gameActive;

// Initialize game
board = document.querySelector(".gameBoard");
playerTurn = document.getElementById("playerTurn");
cells = document.querySelectorAll(".cell");
cells.forEach(cell => cell.addEventListener('click', handleClick));

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

currentPlayer = 'X';
gameBoard = ['', '', '', '', '', '', '', '', ''];
gameActive = true;
playerTurn.style.color = "red"
playerTurn.innerHTML = `${currentPlayer}'s turn`;

function checkWinner() {

    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];

        if (gameBoard[a] !== '' && //checking if 3 cells have same content
            gameBoard[a] === gameBoard[b] &&
            gameBoard[a] === gameBoard[c]) {
            playerTurn.innerHTML = `${currentPlayer} won!`;
            playerTurn.style.color = currentPlayer === "X" ? "red" : "blue";
            [cells[a],cells[b],cells[c]].forEach(cell => cell.style.background ="linear-gradient(to right,  blue, red)");
            gameActive = false;
            return true;
        }
    }

    if (!gameBoard.includes('')) { //check for empty spaces, if not it's a tie
        playerTurn.innerHTML = "It's a Tie!";
        playerTurn.style.color = "#003092"// separate color for tie
        gameActive = false;
        return true;
    }

    return false;
}
if (!gameActive) {

}

function handleClick(event) {
    let cell = event.target;
    let dataIndex = Number(cell.dataset.index); // Adjust to zero-based index

    // Check if cell is filled or game is not active
    if (!gameActive) {
        alert("Game Over! Please start a new game");
        return;
    }

    if (gameBoard[dataIndex] !== '') {
        alert(`${gameBoard[dataIndex]} is already filled`);
        return;
    }
    gameBoard[dataIndex] = currentPlayer;

    if (currentPlayer === 'X') {
        cell.classList.add('x');
    } else if (currentPlayer === 'O') {
        cell.classList.add('o');
    } else {
        console.log(`${dataIndex} is already filled`);
    }


    // Check for winner
    if (!checkWinner()) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerTurn.innerHTML = `${currentPlayer}'s turn`;
        playerTurn.style.color = currentPlayer === 'X' ? "red" : "blue" //turn color changes based on X or Y
    }
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    playerTurn.innerHTML = `${currentPlayer}'s turn`;
    cells.forEach(cell => {
        cell.classList.remove('x', 'o');
    });
}

window.resetGame = resetGame;
window.handleClick = handleClick;
window.checkWinner = checkWinner;
window.resetGame = resetGame;