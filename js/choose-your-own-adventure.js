var response = {
    "pickColor": "Choose a color if you dare! Red or Blue. Which will you do?",
    "red": "You chose red! Now choose a shape. Triangle or Square?",
    "blue": "You chose blue! Now choose a shape. Triangle or Square?",
    "badOption": "That wasn't an option! Try again, Red or Blue?",
    "redTriangle": "A triangle, great! You just made a red 3-sided object.",
    "blueTriangle": "A triangle, great! You just made a blue 3-sided object.",
    "redSquare": "A square, great! You just made a red 4-sided object.",
    "blueSquare": "A square, great! You just made a blue 4-sided object."
};

var output = document.querySelector( "#output" );
var secondAction;

var runStory = function runStory( pick ){
    var firstAction = prompt ( response[ pick ] );

    if( firstAction ===  "Red" ){
        secondAction = prompt( response.red );
    }

    else if ( firstAction === "Blue") {
        secondAction = prompt( response.blue );
    }

    else { secondAction = prompt( response.badOption );
    }
};

runStory( "pickColor" );
