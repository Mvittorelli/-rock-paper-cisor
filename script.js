let p1Choice = "none";
let p2Choice = "none";
let turn = "p1";
let winner = "none";
let score = 0;

const table = ["cisor", "rock", "paper"];
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const cisor = document.getElementById("cisor");
const scoree = document.getElementById("score");

cisor.addEventListener("click", (event) => {
	p1Choice = "cisor";
	console.log("p1: " + p1Choice);
	let i = Math.floor(Math.random() * table.length);
	p2Choice = table[i];
	console.log(p2Choice);
	// cisor();
	play();
});

rock.addEventListener("click", (event) => {
	p1Choice = "rock";
	console.log("p1: " + p1Choice);
	let i = Math.floor(Math.random() * table.length);
	p2Choice = table[i];
	console.log(p2Choice);
	// rock();

	play();
});
paper.addEventListener("click", (event) => {
	p1Choice = "paper";
	console.log("p1: " + p1Choice);
	let i = Math.floor(Math.random() * table.length);
	p2Choice = table[i];
	console.log(p2Choice);
	// paper();

	play();
});

// function paper{

// }

// function rock{

// }

// function cisor{

// }
function play() {
	if (p1Choice == p2Choice) {
		console.log("égalité");
		p1Choice = "none";
		p1Choice = "none";
		turn = "p1";
	} else if (
		(p1Choice == "cisor" && p2Choice == "paper") ||
		(p1Choice == "paper" && p2Choice == "rock") ||
		(p1Choice == "rock" && p2Choice == "cisor")
	) {
		console.log("p1 win");
		p1Choice = "none";
		p1Choice = "none";
		turn = "p1";
		score++;
		scoree.innerHTML = score;
	} else if (
		(p2Choice == "cisor" && p1Choice == "paper") ||
		(p2Choice == "paper" && p1Choice == "rock") ||
		(p2Choice == "rock" && p1Choice == "cisor")
	) {
		console.log("p2 win");
		p1Choice = "none";
		p1Choice = "none";
		turn = "p1";
		scoree.innerHTML = score;
	} else {
		console.log("wtf ??");
		p1Choice = "none";
		p1Choice = "none";
		turn = "p1";
	}
}
