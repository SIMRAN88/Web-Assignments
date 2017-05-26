//create secret number
var secretNumber =  4

//ask user for guess
var guess = prompt("guess a number");
var x = Number(guess);
alert(guess);

//check if guess is right
if(x === secretNumber){
	alert("right");
}

//otherwise,check if higher
else if( x > secretNumber){
	alert("Too High");
}


//otherwise check if lower
else{
	alert("Too low");
}