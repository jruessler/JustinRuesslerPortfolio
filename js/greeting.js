var welcome = document.querySelector( "#prompt" );
var goodbye = document.querySelector( "#output" );
var responses = {
	"emptyInput": "Please input a string.",
	"correctInput": "Welcome to your website!",
	"incorrectInput": "<p>Please input the <span class='emphasis'>CORRECT</span> string!</p>"
};

var nameTest = function nameTest( name ){
	if( !name ){
		welcome.innerHTML =  responses.emptyInput;
	}
	else if( name[0] === "J" && name[1] === "u" ){
		goodbye.innerHTML = responses.correctInput;
	}
	else{
		welcome.innerHTML = responses.incorrectInput;
	}
};

console.log( welcome.textContent );
console.log( goodbye.textContent );

nameTest( prompt( "What's your name?" ) );
