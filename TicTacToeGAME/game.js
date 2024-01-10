let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols =['o', 'x'];
let gameOver = false;
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ]

function handleMove(position) {

     if(gameOver) {
        return;
     }

     if(board[position] == '') {    
         board[position] = symbols[playerTime];

         gameOver = isWin();

             if(gameOver == false) {

                playerTime = (playerTime == 0)? 1:0;
    
         }
     }
     return gameOver;     


}

function isWin() {


     for(let index =0; index < winStates.length; index++) {
         let seq = winStates[index];

         let position1 = seq[0];
         let position2 = seq[1];
         let position3 = seq[2];

         if(board[position1] == board[position2] && 
            board[position1] == board[position3] &&
            board[position1] != '') {
                return true;
            }
         } 
         return false;
}

function restartGame() {
    playerTime = 0;
    gameOver = false;
    board = ['','','','','','','','','',''];

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.innerHTML = '';
    })
}