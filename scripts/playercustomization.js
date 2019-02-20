// ===================================================================
// ===================================================================
// Functions to deal with player name and color customization

// Imports


// ===================================================================
// ===================================================================

/**
 * Sets up for Player Customization.
 */
export default function playerCustomizationSetup(){
	const p1Color = document.getElementById('p1color');
	p1Color.addEventListener('change', handleUpdate);
	const p2Color = document.getElementById('p2color');
	p2Color.addEventListener('change', handleUpdate);
}

// ===================================================================
// ===================================================================

function handleUpdate(event) {
	const root = document.documentElement;
	const input = event.target;
	root.style.setProperty(input.name, input.value)
}

// ===================================================================
// ===================================================================


