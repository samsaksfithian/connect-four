// ===================================================================
// ===================================================================
// Code to make column highlight when hovering

// Imports
// import { boardBackgroundColorBase, boardBackgroundColorHighlight } from "./helpers.js";

// ===================================================================
// ===================================================================

/**
 * Sets up for Column Hover Highlighting. Gets grid items and add event listeners for mouse enter and leave.
 */
export default function columnHoverSetup(){
	const gridItems = document.querySelectorAll('.slot');

	gridItems.forEach( item => { item.addEventListener('mouseenter', highlightColumn) } );
	gridItems.forEach( item => { item.addEventListener('mouseleave', unhighlightColumn) } );
}

// ===================================================================
// ===================================================================

//function to highlight
export function highlightColumn(event) {
	const item = event.target;
	const col = item.dataset.col;
	const itemsInColumn = document.querySelectorAll(`div[data-col="${col}"]`);
	itemsInColumn.forEach(itemInColumn => itemInColumn.style.backgroundColor = 'var(--board-background-color-highlight)');
}

// ===================================================================

// function to unhighlight
export function unhighlightColumn(event) {
	const item = event.target;
	const col = item.dataset.col;
	const itemsInColumn = document.querySelectorAll(`div[data-col="${col}"]`);
	itemsInColumn.forEach(itemInColumn => itemInColumn.style.backgroundColor = 'var(--board-background-color-base)');
}

// ===================================================================
// ===================================================================

