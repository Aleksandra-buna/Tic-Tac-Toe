// HTML Elements
const divStatus = document.querySelector('.status')
const buttonAgain = document.querySelector('.again')
const gridElements = document.querySelectorAll('.game-element')


// game variables
let gameIsLive = true
let xTurn = true


// display the player winner
const playerWinner = (value) => {
	gameIsLive = false
	value = value
	if (value === 'x') {
		divStatus.innerHTML = `${value} is the winner!`
	} else {
		divStatus.innerHTML = `<span>${value} is the winner!</span>`
	}
}


// the func for change a status game
const statusGame = () => {
	const topLeft = gridElements[0].classList[1]
	const topMid = gridElements[1].classList[1]
	const topRight = gridElements[2].classList[1]
	const midLeft = gridElements[3].classList[1]
	const midMid = gridElements[4].classList[1]
	const midRight = gridElements[5].classList[1]
	const botLeft = gridElements[6].classList[1]
	const botMid = gridElements[7].classList[1]
	const botRight = gridElements[8].classList[1]

	if (topLeft && topLeft === topMid && topLeft === topRight) {
		playerWinner(topLeft)
	} else if (midLeft && midLeft === midMid && midLeft === midRight) {
		playerWinner(midLeft)
	} else if (botLeft && botLeft === botMid && botLeft === botRight) {
		playerWinner(botLeft)
	} else if (topLeft && topLeft === midMid && topLeft === botRight) {
		playerWinner(topLeft)
	} else if (topRight && topRight === midMid && topRight === botLeft) {
		playerWinner(topRight)
	} else if (topRight && topRight === midMid && topRight === botLeft) {
		playerWinner(topRight)
	} else if (topLeft && topLeft === midLeft && topLeft === botLeft) {
		playerWinner(topLeft)
	} else if (topMid && topMid === midMid && topMid === botMid) {
		playerWinner(topMid)
	} else if (topRight && topRight === midRight && topRight === botRight) {
		playerWinner(topRight)
	} else if (topLeft && topRight && topMid &&
		midLeft && midMid && midRight && botLeft &&
		botMid && botRight) {
		gameIsLive = false
		divStatus.innerHTML = 'Game Over, try again!'
	} else {
		xTurn = !xTurn
		if (xTurn) {
			divStatus.innerHTML = 'X\'s turn'
		} else {
			divStatus.innerHTML = '<span>O\'s turn</span>'
		}
	}
}



// event handlers
const clickAgain = () => {
	xTurn = true
	divStatus.innerHTML = 'X starts'
	for (const divElement of gridElements) {
		divElement.classList.remove('x')
		divElement.classList.remove('o')
	}
	gameIsLive = true
}

const clickElement = (event) => {
	const classList = event.target.classList

	if (!gameIsLive || classList[1] === 'x' || 
		classList[1] === 'o') {
		return;
	}

	if (xTurn) {
		classList.add('x')
	
		statusGame()
	} else {
		classList.add('o')

		statusGame()
	}
}


// event listeners
buttonAgain.addEventListener('click', clickAgain)

for (const divElement of gridElements) {
	divElement.addEventListener('click', clickElement)
}