// Code to run the Connect Four game

const board = document.getElementById('board');
const BOARD_ROWS = 6;
const BOARD_COLS = 7;
let player1Name = 'Player 1';
let player2Name = 'Player 2';

// ===============================================
// Set up board

/* Board layout:
Coords: (col number, row number)
(0,5) (1,5) ... (6,5)
(0,4) (1,4) ... (6,4)
...		...		...
(0,0) (1,0) ... (6,0)
*/

// Maybe make grid dynamically resizeable at beginning
// board.style += `
// 				grid-template-rows: repeat(${BOARD_ROWS}, 100px);
// 				grid-template-columns: repeat(${BOARD_COLS}, 100px);`;
function initialize(){
	let boardHTML = '';
	// Because of CSS Grid Insert order, iterating starting at top left
	for (let row = BOARD_ROWS-1; row >= 0; row--) {
		for (let col = 0; col < BOARD_COLS; col++) {
			boardHTML += 
			`<div class="slot">
				<label for="slot${col}${row}">
					<input onchange="runTurn(this)" type="checkbox" 
						${row > 0 ? 'disabled' : ""}
						name="slot${col}${row}" id="slot${col}${row}"
						data-col="${col}" data-row="${row}">
				</label>
				</div>`;
				// (${col},${row})
			}
	}
	// Set the board's HTML
	board.innerHTML = boardHTML;
}

initialize();

// ===============================================
// ===============================================
// Run Turn
const playerIndicator = document.getElementById('player-indicator');
let player1Turn = true;

function runTurn(input){
	// ===============================================	
	// change color of label
	const playerString = player1Turn ? 'player1' : 'player2';
	input.parentElement.className = playerString;
	
	// ===============================================
	// change what's disabled
	// disable the input
	input.disabled = true;

	// enable the slot one row above (row + 1)
	const {col, row} = input.dataset;
	// check if input at top row 
	if(row < BOARD_ROWS - 1) {
		const neighbor = document.getElementById(`slot${col}${parseInt(row) + 1}`);
		neighbor.disabled = false;
	}

	// ===============================================
	// check if it's a win
	const isAWin = checkWin(parseInt(col), parseInt(row), playerString);

	// update win text (win celebration)
	if (isAWin) {
		alert('Winner!');
		//maybe disable all slots
		return;
	}	

	// ===============================================
	// change whose turn it is
	player1Turn = !player1Turn;

	// ===============================================
	// update player-indicator text
	if(player1Turn){
		playerIndicator.className = 'player1';
		playerIndicator.innerText = player1Name;
	} else{
		playerIndicator.className = 'player2';
		playerIndicator.innerText = player2Name;
	}


}

// ===============================================
// ===============================================
// Check for a win
function checkWin(col, row, currPlayer) {
	// Check down
	if (checkDown(col, row, currPlayer) ) { return true; }

	// Check across
	if (checkAcross(col, row, currPlayer) ) { return true; }

	// Check diagonals
	if (checkDiag(col, row, currPlayer) ) { return true; }

	return false;
}

// ===============================================

function checkDown(col, row, currPlayer){
	if (row < 3) { return false; }
	for(let cr = row - 1; cr > row - 4; cr--){
		if(currPlayer !== getSlotPlayer(col, cr)) { return false; }
	}
	return true;
}

// ===============================================

function checkAcross(col, row, currPlayer){
	let numInRow = 0;
	for(let cc = col - 3; cc <= col + 3; cc++){
		const inBounds = (cc >= 0 && cc < BOARD_COLS);
		if (inBounds) {
			numInRow = (currPlayer === getSlotPlayer(cc, row)) ? numInRow + 1 : 0;
		}
		if (numInRow >= 4) { return true; }
	}
	return false;
}

// ===============================================

function checkDiag(col, row, currPlayer){
	// diagonal down
	let numInLine = 0;
	for(let cc = col - 3, cr = row + 3; cc <= col + 3; cc++, cr--){
		const inBounds = (cc >= 0 && cc < BOARD_COLS) && (cr >=0 && cr < BOARD_ROWS);
		if (inBounds) {
			numInLine = (currPlayer === getSlotPlayer(cc, cr)) ? numInLine + 1 : 0;
		}
		if (numInLine >= 4) { return true; }
	}

	// diagonal up
	numInLine = 0;
	for(let cc = col - 3, cr = row - 3; cc <= col + 3; cc++, cr++){
		const inBounds = (cc >= 0 && cc < BOARD_COLS) && (cr >=0 && cr < BOARD_ROWS);
		if (inBounds) {
			numInLine = (currPlayer === getSlotPlayer(cc, cr)) ? numInLine + 1 : 0;
		}
		if (numInLine >= 4) { return true; }
	}
	return false;
}

// ===============================================

function getSlotPlayer(col, row){
	const currSlot = document.getElementById(`slot${col}${row}`);
	return currSlot.parentElement.className;
}

