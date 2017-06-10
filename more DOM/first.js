var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;


button.addEventListener("click",function(){
	if(isPurple)
	{
	body.style.background = "white";
	isPurple = false;	
	}
	else
	{
	body.style.background = "purple";
	isPurple = true;
	}
});