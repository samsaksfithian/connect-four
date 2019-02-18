// ===================================================================
// ===================================================================
// General Helper Variables and Functions

// ===================================================================
// Helper variables
export const BOARD_ROWS = 6;
export const BOARD_COLS = 7;

export const board = document.getElementById('board');
export const playerIndicator = document.getElementById('player-indicator');

// export const boardBackgroundColorBase = getComputedStyle(document.body).getPropertyValue('--board-background-color-base');
// export const boardBackgroundColorHighlight = getComputedStyle(document.body).getPropertyValue('--board-background-color-highlight');

// ===================================================================
// Helper functions

/**
 * Gets the HTML element for a slot located at (col, row)
 * @param {number} col Column of the slot
 * @param {number} row Row of the slot
 * @returns {HTMLElement} The actual slot div element
 */
export function getSlotElement(col, row) {
	return document.getElementById(`slot${col}${row}`);
}

/**
 * Gets the HTML Class Name for a slot located at (col, row)
 * @param {number} col Column of the slot
 * @param {number} row Row of the slot
 * @returns {string} The string class name of the the slot div element
 */
export function getSlotPlayer(col, row){
	return getSlotElement(col, row).parentElement.className;
}

// ===================================================================
// ===================================================================




