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
// console.log(board);

let boardHTML = '';
// Because of CSS Grid Insert order, iterating starting at top left
for (let row = 5; row >= 0; row--) {
	for (let col = 0; col < 7; col++) {
		boardHTML += 
		`<div class="slot">
			<label for="slot${col}${row}">
				<input type="checkbox" name="slot${col}${row}" id="slot${col}${row}">
			</label>
			(${col},${row})
		</div>`;
	}
}
// Set the board's HTML
board.innerHTML = boardHTML;


