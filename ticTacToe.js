const functions = require('./modules/functions.js');

// global variables
let gameOn = true;
let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const p1 = 'X';
const p2 = 'O';
let playerTurn;

// inform users how to play game
console.log(`
Welcome to the Tic-Tac-Toe game!

In order to win. You must get 3 symbols in a row (player1 is 'X' and player2 is 'O')
When it is your turn, pick a number on the gameboard in order to mark it with your symbol.

Best of luck!\n\n`);


// start the game/keep game going until we have a winner
while(gameOn) {

    playerTurn = 1;
    // show players the game board
    functions.showGameBoard(gameBoard);

    // get user input: what board piece would the player like to mark
    functions.markBoard(gameBoard, playerTurn);
}