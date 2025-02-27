let board, playerTurn, cells, currentPlayer, gameBoard, gameActive;

document.addEventListener('DOMContentLoaded', () => {
    board = document.querySelector(".gameBoard");
    playerTurn = document.getElementById("playerTurn");
    cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener('click', handleClick));
    const resetGameButton = document.getElementById("resetGame");

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    function checkWinner() {
        for (let i = 0; i < winPatterns.length; i++) {
            const [a, b, c] = winPatterns[i];
            if (cells[a].innerHTML===currentPlayer && cells[b].innerHTML===currentPlayer && cells[c].innerHTML===currentPlayer) {
                playerTurn.innerHTML = `${currentPlayer} won!`;
                gameActive = false;
                return;
            }
        }
        if (!gameBoard.includes('')) { //check for empty spaces,if not it's a tie
            playerTurn.innerHTML = "It's a Tie!";
            gameActive = false;
        }
        else{
            console.log("error occured")
        }
    }
function handleClick(event){
let cell=event.target;
let dataIndex=cell.dataset.index;
// check if cell is filled
    if(gameBoard[dataIndex]!==''|| !gameActive){
        console.log(`${dataIndex} is already filled`);
    }
}




});
function resetGame() {
    gameBoard.fill('');
    gameActive = true;
    currentPlayer = 'X';
    playerTurn.innerHTML = "Player X's Turn";
    cells.forEach(cell => cell.innerHTML = '');
}

