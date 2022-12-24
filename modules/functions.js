
// tool for getting user input from console
const input = require('prompt-sync')();


// print game board to the console
function showGameBoard(gameBoard) {

    // row 1
    console.log(gameBoard[0] + ' | ' + gameBoard[1] + ' | ' + gameBoard[2]);
    console.log('----------');
    // row2
    console.log(gameBoard[3] + ' | ' + gameBoard[4] + ' | ' + gameBoard[5]);
    console.log('----------');
    // row 3
    console.log(gameBoard[6] + ' | ' + gameBoard[7] + ' | ' + gameBoard[8]);
    console.log('\n\n');
    

    
}

// mark the board with players' symbol
function markBoard(gameboard, playerTurn) {

    // show who's turn it currently is
    console.log(`Player turn: ${playerTurn}\n\n`);

    // validation loop for user selection
    while(true) {
        let boardPiece = Number(input("Pick the number of the piece you'd like to mark: "));

        // if statement: input is not a number, or its a number not between 1 and 9
        if((isNaN(boardPiece)) || ((boardPiece < 1) || (9 < boardPiece))) {
            console.log('\nInvalid input: please pick a number on the board to mark.\n')
            continue;
        }
        // if piece is already marked
        else if((gameboard[boardPiece-1] === 'X') || (gameboard[boardPiece-1] === 'O')) {
            console.log('Error: That board piece has already been marked, please pick another.');
            continue;
        }

        // if we make it here, the input is valid, mark the board piece
        /* ternary operator: if playerTurn is not even, then it's player1's turn,
         * otherwise, it's player2's turn
        */
        gameboard[boardPiece-1] = (playerTurn % 2 !== 0) ? ('X') : ('O');
        return;
    }

}

function gameWon(gameBoard, playerTurn) {

    // check if the game board has 3 of the same symbols in a row (8 ways to win)
    // the winner is dependent on who's symbol it is
    let player = (playerTurn % 2 !== 0) ? (1) : (2);

    // 1st row (horizontal)
    if((gameBoard[0] === gameBoard[1]) && (gameBoard[1] === gameBoard[2])) {
        console.log(`Player ${player} has won the game! Congratulations!`);
    }
    // 2nd row (horizontal)
    else if((gameBoard[3]===gameBoard[4]) && (gameBoard[4] === gameBoard[5])) {
        console.log(`Player ${player} has won the game! Congratulations!`);
    }
    // 3rd row (horizontal)
    else if((gameBoard[6]===gameBoard[7]) && (gameBoard[7] === gameBoard[8])) {
        console.log(`Player ${player} has won the game! Congratulations!`);
    }
}


module.exports.showGameBoard = showGameBoard;
module.exports.markBoard = markBoard;
module.exports.gameWon = gameWon;