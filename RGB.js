var newColors = document.querySelector("#new");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var squares = document.querySelectorAll(".square");
var colorText = document.querySelector("#rgb");
var header = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var colors = generateColors(6);
var color = pickColor();
var easyMode = true; //Default easy mode
var gameWon = false;
colorText.textContent = color;

for (i=0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === color) {
			messageDisplay.textContent = "Correct!";
			newColors.textContent = "Play Again";
			gameWon = true;
			changeColors();
		}
		else {
			messageDisplay.textContent = "Try again";
			this.style.background = "#232323";
		}
	});
}

// Event Listeners
easy.addEventListener("click", function(){
	if (!easyMode) {
		easy.classList.add("selected");
		hard.classList.remove("selected");
		easyMode = true;
	}
});

hard.addEventListener("click", function(){
	// Switch to hard mode
	if (easyMode) {
		hard.classList.add("selected");
		easy.classList.remove("selected");
		easyMode = false;
	}
});

newColors.addEventListener("click", function() {
	if (gameWon) {
		newColors.textContent = "New Colors";
	}
	colors = generateColors(6);
	color = pickColor();
	colorText.textContent = color;
	header.style.backgroundColor = "steelblue";
	for (i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
});

//Functions
function changeColors() {
	for(i=0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	header.style.backgroundColor = color;
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];


}
function generateColors(num) {
	var arr = [];
	for (i=0; i < num; i++) {
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256)
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);

	var color = "rgb(" + red + ", " + blue + ", " + green + ")";
	return color;
}