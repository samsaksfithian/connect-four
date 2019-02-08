// Code to run the Connect Four game

// ===============================================
// Set up board

/* Board layout:
Coords: (col number, row number)
(0,5) (1,5) ... (6,5)
(0,4) (1,4) ... (6,4)
...		...		...
(0,0) (1,0) ... (6,0)
*/

const board = document.getElementById('board');
const BOARD_ROWS = 6;
const BOARD_COLS = 7;

// board.style += `
// 				grid-template-rows: repeat(${BOARD_ROWS}, 100px);
// 				grid-template-columns: repeat(${BOARD_COLS}, 100px);`;

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

// ===============================================
// ===============================================

const playerIndicator = document.getElementById('player-indicator');
let player1Turn = true;

function runTurn(input){
	// ===============================================	
	// change color of label
	input.parentElement.className = player1Turn ? 'player1' : 'player2';
	
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
	// change whose turn it is
	player1Turn = !player1Turn;

	// ===============================================
	// update player-indicator text
	if(player1Turn){
		playerIndicator.className = 'player1';
		playerIndicator.innerText = 'Player 1';
	} else{
		playerIndicator.className = 'player2';
		playerIndicator.innerText = 'Player 2';
	}

}
