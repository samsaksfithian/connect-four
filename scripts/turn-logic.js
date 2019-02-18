// ===================================================================
// ===================================================================
// Functions to deal with game turn logic

// Imports
import checkWin from "./win-logic.js";
import { playerIndicator, getSlotElement, BOARD_COLS, BOARD_ROWS } from "./helpers.js";
import gs from "./gamestate.js";

// ===================================================================
// ===================================================================
// Run Turn

/**
 * Runs a single turn when a valid board slot is clicked. Disables the clicked slot, enables the next slot, checks for a win, and changes the turn (including indicator) to the next player
 * @param {HTMLEvent} event an HTML event triggered by a click on the board
 */
export default function runTurn(event){
	const input = event.target;

	// change color of label
	const playerString = gs.getP1Turn() ? 'player1' : 'player2';
	input.parentElement.className = playerString;
	
	// change what's disabled
	// disable the input
	input.disabled = true;

	// enable the slot one row above (row + 1)
	const {col, row} = input.dataset;
	// check if input at top row 
	if(row < BOARD_ROWS - 1) {
		const neighbor = getSlotElement(col, (parseInt(row) + 1) );
		neighbor.disabled = false;
	}

	// check if it's a win
	const isAWin = checkWin(parseInt(col), parseInt(row), playerString);

	// update win text (win celebration)
	if (isAWin) {
		gameWon();
		return;
	}	
	
	// change whose turn it is
	gs.nextTurn();
	
	// update player-indicator text
	if(gs.getP1Turn()){
		playerIndicator.className = 'player1';
		playerIndicator.innerText = gs.getPlayerName(1);
	} else{
		playerIndicator.className = 'player2';
		playerIndicator.innerText = gs.getPlayerName(2);
	}
	
}

// ===================================================================
// ===================================================================

/**
 * Displays win celebration and disables board since the game is over.
 */
function gameWon(){
	alert('Winner!');
	//TODO: deal with the `'s Turn` bit of the turn-indicator text
	playerIndicator.innerText = `${gs.getCurrPlayerName()} Wins!!!`;
	disableBoard();
}

// ===================================================================
// ===================================================================

/**
 * Makes all board slots invalid so that turns can't continue. Used after a win to end the game until reset.
 */
function disableBoard() {
	for (let row = 0; row < BOARD_ROWS; row++) {
		for (let col = 0; col < BOARD_COLS; col++) {
			const slot = getSlotElement(col, row);
			slot.disabled = true;
		}
	}
}

// ===================================================================
// ===================================================================


