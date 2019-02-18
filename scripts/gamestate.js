// ===================================================================
// ===================================================================
// General helper class to track all elements of the game state

// export class GameState {
// 	player1Name = 'Player 1';
// 	player2Name = 'Player 2';
// 	player1Turn = true;
// 	//TODO: make getters and setters, etc
// }


class GameState {

	constructor() {
		// this.player1Name = 'Player 1';
		// this.player2Name = 'Player 2';
		this.playerNames = ['Player 1', 'Player 2'];
		this.player1Turn = true;
	}
	
	/**
	 * Returns the name of the desired player
	 * @param {number} playerNum Number of the desired player. Between 1 and the # of players (by default 2)
	 * @returns {string} The name of the numbered player
	 */
	getPlayerName(playerNum){
		return (playerNum-1 >= this.playerNames.length) ? "" : this.playerNames[playerNum-1];
	}

	/**
	 * Returns the name of the desired player
	 * @param {boolean} player1 True if want Player 1's name, false if want Player 2's name
	 * @returns {string} The name of either player 1 or player 2
	 */
	getPlayerName(player1){
		return (player1) ? this.playerNames[0] : this.playerNames[1];
	}

	/**
	 * Returns the name of the current player
	 * @returns {string} The name of the current player
	 */
	getCurrPlayerName(){
		return this.getPlayerName(this.player1Turn);
	}
	
	/**
	 * Returns true if it is player 1's turn, false if player 2's turn
	 * @returns {boolean}
	 */
	getP1Turn(){ return this.player1Turn; }

	/**
	 * Sets the turn tracker to true (indicating player 1's turn)
	 */
	setP1Turn(){ this.player1Turn = true; }
	
	/**
	 * Sets the turn tracker to the next value, for the next player
	 */
	nextTurn(){ this.player1Turn = !this.player1Turn; }
}

// Singleton class object
const gameState = new GameState();
export default gameState;


