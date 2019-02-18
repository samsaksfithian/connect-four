// ===================================================================
// ===================================================================
// Functions to deal with game win logic

// Imports
import { BOARD_COLS, BOARD_ROWS, getSlotPlayer } from "./helpers.js";

// ===================================================================
// ===================================================================

/**
 * Checks for a connect four down, across, and diagonal from a particular slot
 * @param {number} col Column of the slot
 * @param {number} row Row of the slot
 * @param {string} currPlayer Class name of player to check if won
 * @returns {boolean} True if there's a win, false otherwise
 */
export default function checkWin(col, row, currPlayer) {
	// Check down
	if (checkDown(col, row, currPlayer) ) { return true; }

	// Check across
	if (checkAcross(col, row, currPlayer) ) { return true; }

	// Check diagonals
	if (checkDiag(col, row, currPlayer) ) { return true; }

	return false;
}

// ===================================================================

/**
 * Checks for a connect four straight down from the given slot
 * @param {number} col Column of the slot
 * @param {number} row Row of the slot
 * @param {string} currPlayer Class name of player to check if won
 * @returns {boolean} True if there's a win, false otherwise
 */
function checkDown(col, row, currPlayer){
	if (row < 3) { return false; }
	for(let cr = row - 1; cr > row - 4; cr--){
		if(currPlayer !== getSlotPlayer(col, cr)) { return false; }
	}
	return true;
}

// ===================================================================

/**
 * Checks for a connect four across sideways in either direction from the given slot
 * @param {number} col Column of the slot
 * @param {number} row Row of the slot
 * @param {string} currPlayer Class name of player to check if won
 * @returns {boolean} True if there's a win, false otherwise
 */
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

// ===================================================================

/**
 * Checks for a connect four diagonally, bottom left to top right and top left to bottom right, from the given slot
 * @param {number} col Column of the slot
 * @param {number} row Row of the slot
 * @param {string} currPlayer Class name of player to check if won
 * @returns {boolean} True if there's a win, false otherwise
 */
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

// ===================================================================
// ===================================================================





