var p1 = 0;
var p2 = 0;
var topScore = 0;
var gameOver = false;
var button1 = document.querySelector("button");
var button2 = document.querySelectorAll("button")[1];
var button3 = document.querySelectorAll("button")[2];
var p1Score = document.querySelector("#player1");
var p2Score = document.querySelector("#player2");
var max = document.querySelector("input");
var maxCount = document.querySelector("#maxcount");

function reset(){
	p1 = 0;
	p2 = 0;
	p1Score.textContent = 0;
	p2Score.textContent = 0;
	gameOver = false;
	p1Score.classList.remove("win");
	p2Score.classList.remove("win");
}
max.addEventListener("change", function(){
 maxCount.textContent = max.value;
 topScore = max.value;
 reset();
});

button1.addEventListener("click", function(){
	if (!gameOver) {
		if (p1 < topScore) {
		p1++;
		p1Score.textContent = String(p1);
	} else if (max.value == 0) {
		alert("No Play Score Assigned!");
	} else {
		p1Score.classList.add("win");
		gameOver = true;
		//alert("Player One Wins!");
		}
	}
});
button2.addEventListener("click", function(){
	if (!gameOver) {
		if (p2 < topScore) {
		p2++;
		p2Score.textContent = String(p2);
	} else if (max.value == 0) {
		alert("No Play Score Assigned!");
	} else {
		p2Score.classList.add("win");
		gameOver = true;
		//alert("Player Two Wins!");
		}
	}
});
button3.addEventListener("click", function(){
	reset();
});

