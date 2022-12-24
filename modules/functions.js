
// file to store functions (SOC: seperation of concerns)


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
    

    
}

// mark the board with players' symbol
function markBoard(gameboard, playerTurn) {

    // validation loop for user selection
    while(true) {

    }
}


module.exports.showGameBoard = showGameBoard;