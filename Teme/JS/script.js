var i;
for (i=0; i<1; i++) 
{
var userChoice = prompt("Rock, paper, scissors")
   if (userChoice === "rock") {i=1;} 
   else if (userChoice === "paper") {i=1;} 
   else if (userChoice === "scissors") {i=1;} 
   else {alert("Try again.");} 
}

console.log("You chose " + userChoice + "!"); 

var computerChoice = Math.random(); 
    if (computerChoice <= 0.33) { computerChoice = "rock"; }
    else if (computerChoice <= 0.66) { computerChoice = "paper"; }
    else { computerChoice = "scissors"; }

console.log("Computer chose " + computerChoice + "!"); 

var victory = "You win!" 
    if (userChoice === computerChoice) { console.log("Tie game!"); }
    else if (userChoice === "rock" && computerChoice === "scissors") { victory }
    else if (userChoice === "paper" && computerChoice === "rock") { victory }
    else if (userChoice === "scissors" && computerChoice === "paper") { victory }
    else {console.log("You lose.");}