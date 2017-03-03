var nameTest = function( name ){
	if( !name ){
		alert( "please input a string!" );
	}
	else if( name === "Justin" ){
		alert( "Welcome to your website!" );
	}
};

nameTest( prompt( "What's your name?" ) );
