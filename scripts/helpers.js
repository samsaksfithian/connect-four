// ===================================================================
// ===================================================================
// General Helper Variables and Functions

// ===================================================================
// Helper variables
export const BOARD_ROWS = 6;
export const BOARD_COLS = 7;

export const board = document.getElementById('board');
export const playerIndicator = document.getElementById('player-indicator');

// ===================================================================
// Helper functions

/**
 * Gets the HTML element for a slot located at (col, row)
 * @param {number} col Column of the slot
 * @param {number} row Row of the slot
 * @returns {HTMLElement}
 */
export function getSlotElement(col, row) {
	return document.getElementById(`slot${col}${row}`);
}

/**
 * Gets the HTML Class Name for a slot located at (col, row)
 * @param {number} col Column of the slot
 * @param {number} row Row of the slot
 * @returns {string}
 */
export function getSlotPlayer(col, row){
	return getSlotElement(col, row).parentElement.className;
}

// ===================================================================
// ===================================================================




