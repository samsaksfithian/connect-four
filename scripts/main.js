// ===================================================================
// ===================================================================
// Code to run the Connect Four game

// Imports
import { board, playerIndicator, BOARD_COLS, BOARD_ROWS }  from "./helpers.js";
import columnHoverSetup from "./columnhover.js";
import playerCustomization from "./playercustomization.js";
import runTurn from "./turn-logic.js";
import gs from "./gamestate.js";

// ===================================================================
// ===================================================================
// Actual main non-function stuff to run on start

document.getElementById('reset-button').addEventListener('click', resetBoard);
initialize();
columnHoverSetup();
playerCustomization();

// ===================================================================
// ===================================================================
// Set up board

/* Board layout:
Coords: (col number, row number)
(0,5) (1,5) ... (6,5)
(0,4) (1,4) ... (6,4)
...		...		...
(0,0) (1,0) ... (6,0)
*/

/**
 * Dynamically creates the board and replaces the HTML to have a fresh/empty board
 */
function initialize(){
	
	let boardHTML = '';
	// Because of CSS Grid Insert order, iterating starting at top left
	for (let row = BOARD_ROWS-1; row >= 0; row--) {
		for (let col = 0; col < BOARD_COLS; col++) {
			boardHTML += 
			`<div class="slot" data-col="${col}" data-row="${row}">
			<label for="slot${col}${row}">
			<input type="checkbox" ${row > 0 ? 'disabled' : ""}
			name="slot${col}${row}" id="slot${col}${row}" class="griditem"
			data-col="${col}" data-row="${row}">
			</label>
			</div>`;
		}
	}
	// Set the board's HTML
	board.innerHTML = boardHTML;

	// add event listeners
	document.querySelectorAll('.slot input[type=checkbox]').forEach(input => {
		input.addEventListener('change', runTurn);
	});
}

// ===================================================================

/**
 * Runs the board creation initialize() function and resets the player indicator
 */
function resetBoard() {
	// re-initialize board
	initialize();

	// set/reset player turn
	playerIndicator.className = 'player1';
	playerIndicator.innerText = gs.getPlayerName(1);
	gs.setP1Turn();
}


// ===================================================================
// ===================================================================

// Maybe make grid dynamically resizeable at beginning
// board.style += `
// 				grid-template-rows: repeat(${BOARD_ROWS}, 100px);
// 				grid-template-columns: repeat(${BOARD_COLS}, 100px);`;

// ===================================================================
// ===================================================================

