// ===================================================================
// ===================================================================
// Functions to deal with game turn logic

// Imports
import checkWin from "./win-logic.js";
import { playerIndicator, getSlotElement, BOARD_ROWS } from "./helpers.js";
import gs from "./gamestate.js";

// ===================================================================
// ===================================================================
// Run Turn
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
		alert('Winner!');
		// currPlayerName = player1Turn ? player1Name : player2Name;
		// playerIndicator.parent.innerText = `${currPlayerName} Wins!!!`;
		
		//TODO: disable all slots
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



