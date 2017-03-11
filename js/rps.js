/* global $ */

var userChoice = prompt( "What would you like to play, Rock, Paper or Scissors?" );
var computerChoice = "Rock";
var rng = Math.random();
var result = "It's a tie!";

if( rng < 0.33 ){
    computerChoice = "Paper";
}

else if( rng < 0.66 ){
    computerChoice = "Scissors";
}

if( userChoice === "Rock" && computerChoice === "Paper" ){
    result = "The Computer wins!";
}

else if( userChoice === "Scissors" && computerChoice === "Paper" ){
    result = "The User wins!";
}

if( userChoice === "Paper" && computerChoice === "Rock" ){
    result = "The User wins!";
}

else if( userChoice === "Scissors" && computerChoice === "Rock" ){
    result = "The Computer wins!";
}

if( userChoice === "Paper" && computerChoice === "Scissors" ){
    result = "The Computer wins!";
}

else if( userChoice === "Rock" && computerChoice === "Scissors" ){
    result = "The User wins!";
}


$( "body" ).html( "<div id='content'><h1>" + result + "</h1></div>" );

console.log( "The computer chose " + computerChoice );
